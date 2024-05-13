import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../Components/Layouts/CheckoutForm";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51PFi5QAivobkXwZsYe6VK8yBo6tkYT8AJFicXnmnCMlhB5ETMFxKqAdWVXFAZxRvjUgkvMHZ811qLzInEnXTCLXC00bJR4rSE1"
);

const Payment = () => {
  const { classId } = useParams();
  const price = 600;
  const [clientSecret, setClientSecret] = useState(null);
  console.log(classId);
  console.log(price);
  useEffect(() => {
    const fetchPaymentClientSecret = async () => {
      try {
        const response = await axios.post(
          "https://creative-school-design.onrender.com/api/v1/payment/confirmpayment",
          { price }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchPaymentClientSecret();
  }, [price]);
  console.log(clientSecret);
  return (
    <div className="bg-white">
      <div className="w-full pl-[400px] pr-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
