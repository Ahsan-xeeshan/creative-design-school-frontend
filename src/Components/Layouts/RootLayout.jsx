import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Preloader from "../Layouts/Preloader";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after the operation is complete
    }, 1000); // Simulating a 2-second loading delay
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        // Render your preloader component here while data is loading
        <Preloader />
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export default RootLayout;
