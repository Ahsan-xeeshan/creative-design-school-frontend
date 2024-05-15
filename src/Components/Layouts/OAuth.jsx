import axios from "axios";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { app } from "../../firbaseConfig";
import { loggedInUser } from "../../slices/userSlices";
const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultFromGoogle.user);
      const data = await axios.post(
        `https://creative-school-design.onrender.com/api/v1/authentication/googlesignin`,
        {
          username: resultFromGoogle.user.displayName,
          image: resultFromGoogle.user.photoURL,
          email: resultFromGoogle.user.email,
          password: resultFromGoogle.user.uid,
        }
      );
      console.log(data);
      if (data.data.success) {
        Swal.fire({
          title: "WELCOME!",
          text: "Login Successfull",
          icon: "success",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 3000,
        });
        setTimeout(() => {
          dispatch(loggedInUser(data.data));
          localStorage.setItem("userInfo", JSON.stringify(data.data));
          navigate("/");
        }, 3000);
      } else {
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4 flex gap-x-2">
      <Button
        type="button"
        gradientDuoTone="blueToOrange"
        className="flex w-full items-center justify-center rounded-md border-none p-2 hover:bg-orange-300 focus:ring-2 focus:ring-violet-600 focus:ring-offset-1"
        onClick={handleGoogleClick}
      >
        <FaGoogle className="text-xl" />
      </Button>
    </div>
  );
};

export default OAuth;
