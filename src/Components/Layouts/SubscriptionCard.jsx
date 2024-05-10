import { Button } from "flowbite-react";

const SubscriptionCard = () => {
  return (
    <div className="bg-[#F1F5F9] rounded-lg p-5 md:p-6">
      <div className="md:flex md:p-0 gap-x-5">
        <input
          type="text"
          className="bg-white border-none outline-none focus:ring-0 text-xs rounded-lg w-full md:w-1/2 h-[50px] mb-5"
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-white border-none outline-none focus:ring-0 text-xs rounded-lg w-full md:w-1/2 h-[50px] mb-5"
          placeholder="Last Name"
        />
      </div>
      <div className="md:flex md:p-0 gap-x-5">
        <input
          type="text"
          className="bg-white border-none outline-none focus:ring-0 text-xs rounded-lg w-full md:w-1/2 h-[50px] mb-5"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="bg-white border-none outline-none focus:ring-0 text-xs rounded-lg w-full md:w-1/2 h-[50px] mb-5"
          placeholder="Phone Number"
        />
      </div>
      <div className="md:p-0 ga-x-5">
        <input
          type="text"
          className="bg-white border-none outline-none focus:ring-0 text-xs rounded-lg w-full h-[50px]"
          placeholder="Company (Optional)"
        />
      </div>
      <div className="pt-5 md:px-0 gap-x-5">
        <Button className="w-full bg-[#4e46e5dc] hover:bg-[#4F46E5] text-white">
          Try 14 Days Free Trial
        </Button>
      </div>
      <div className="py-3">
        <p className="text-xs">
          * We never share user details with third parties, period.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
