import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51PFi5QAivobkXwZsYe6VK8yBo6tkYT8AJFicXnmnCMlhB5ETMFxKqAdWVXFAZxRvjUgkvMHZ811qLzInEnXTCLXC00bJR4rSE1"
);

const Payment = () => {
  const location = useLocation();
  const { from } = location.state;
  const { _id, price } = from;
  console.log(_id, price);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const fetchPaymentClientSecret = async () => {
      try {
        const res = await axios.post(
          "https://creative-school-design.onrender.com/api/v1/payment/confirmpayment",
          {
            from: [
              {
                id: from._id,
                classname: from.classname,
                price: from.price,
              },
            ],
          }
        );
        const data = await res.json();
        window.location = data.url;
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchPaymentClientSecret();
  }, [price, _id]);

  console.log(clientSecret);
  return (
    <div className="bg-white">
      <div className="w-full pl-[400px] pr-10">
        <div className="mx-auto container flex justify-center py-16 px-4">
          <div className="flex flex-col space-y-8 w-full px-16 max-w-xl">
            <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-96 p-6 rounded-xl shadow-md">
              <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between space-x-4">
                  <div className=" text-xl font-semibold tracking-tigh">
                    SUPERCOMPANY
                  </div>
                  <div className="inline-flex flex-col items-center justify-center">
                    <svg
                      className="h-8 w-8"
                      width="24"
                      height="24"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 8.5L8 15.5L5 8.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="font-semibold text-white">wallet</div>
                  </div>
                </div>
                <div className="inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                  <div className="relative w-full h-full grid grid-cols-2 gap-1">
                    <div className="absolute border border-gray-900 rounded w-4 h-6 left-4 top-1"></div>
                    <div className="border-b border-r border-gray-900 rounded-br"></div>
                    <div className="border-b border-l border-gray-900 rounded-bl"></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="border-t border-r border-gray-900 rounded-tr"></div>
                    <div className="border-t border-l border-gray-900 rounded-tl"></div>
                  </div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold tracking-tight">
                    balance
                  </div>
                  <div className="text-2xl font-semibold">$50</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-10 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-16 w-72 px-2 py-3 rounded-lg">
                <div className="flex-initial">
                  <div className="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                    <div className="p-2">
                      <svg
                        className="h-4 w-4 text-white opacity-90"
                        width="24"
                        height="24"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex items-start justify-between">
                  <div>
                    <h2 className="text-xs font-semibold tracking-tight">
                      Super Secure Payment
                    </h2>
                    <p className="text-xs text-gray-500 font-light">
                      You received $5 credit Bonus
                    </p>
                  </div>
                  <div className="text-xs text-gray-400">17:15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="w-2/3 m-8 border rounded-xl py-10 px-6">
          <div className="StripeElement StripeElement--empty">
            <div
              className="__PrivateStripeElement"
              style={{
                margin: "0px !important",
                padding: "0px !important",
                border: "none !important",
                display: "block !important",
                background: "transparent !important",
                position: "relative !important",
                opacity: "1 !important",
                width: "1px !important",
                minWidth: "100% !important",
                overflow: "hidden !important",
                userSelect: "none !important",
                transform: "translate(0px) !important",
                colorScheme: "light only !important",
                height: "19.2px",
              }}
            >
              <iframe
                name="__privateStripeFrame0703"
                frameBorder="0"
                allowtransparency="true"
                scrolling="no"
                role="presentation"
                allow="payment *"
                src="https://js.stripe.com/v3/elements-inner-card-e80456fac4f23e90e636eadbd2a3aced.html#wait=false&amp;mids[guid]=NA&amp;mids[muid]=e7b4cc81-c083-4363-b52a-7ab60662314b2a8d1e&amp;mids[sid]=0e28633b-0d4f-4bbf-b683-c144f3c3c2c261f7e7&amp;style[base][fontSize]=16px&amp;style[base][color]=%23424770&amp;style[base][::placeholder][color]=%23aab7c4&amp;style[invalid][color]=%239e2146&amp;rtl=false&amp;componentName=card&amp;keyMode=test&amp;apiKey=pk_test_51NFR2wJLWdL276GHKNAMqnfqrdMqTjrpSgFRenB7pNcXlSxyS6mP7Qu0EnJHDDTsXM80jsoGJM9YvLFNqN5s8qqX008B9wkFd3&amp;referrer=https%3A%2F%2Fcreative-design-school.web.app%2Fdashboard%2Fpayment%2F64860de9dbd66e65d134abc2&amp;controllerId=__privateStripeController0701"
                title="Secure card payment input frame"
                style={{
                  border: "0px !important",
                  margin: "0px !important",
                  padding: "0px !important",
                  width: "1px !important",
                  minWidth: "100% !important",
                  overflow: "hidden !important",
                  display: "block !important",
                  userSelect: "none !important",
                  transform: "translate(0px) !important",
                  colorScheme: "light only !important",
                  height: "19.2px",
                }}
              ></iframe>
              <input
                className="__PrivateStripeElement-input"
                aria-hidden="true"
                aria-label=" "
                autoComplete="false"
                maxLength="1"
                style={{
                  border: "none !important",
                  display: "block !important",
                  position: "absolute !important",
                  height: "1px !important",
                  top: "-1px !important",
                  left: "0px !important",
                  padding: "0px !important",
                  margin: "0px !important",
                  width: "100% !important",
                  opacity: "0 !important",
                  background: "transparent !important",
                  pointerEvents: "none !important",
                  fontSize: "16px !important",
                }}
              />
            </div>
          </div>
          <button
            className="my-8 bg-teal-100 hover:bg-teal-600 font-semibold text-teal-800 hover:text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 "
            type="submit"
          >
            {price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
