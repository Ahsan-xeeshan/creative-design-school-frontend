/* eslint-disable react/jsx-key */
const PaymentHistory = () => {
  const transactionData = [
    {
      id: 1,
      transactionID: "efgh4444",
      time: "3:55 PM",
      price: "350",
    },
    {
      id: 2,
      transactionID: "abcd1234",
      time: "7:23 PM",
      price: "535",
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-full">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl font-semibold">
            Pay History: {transactionData.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-5 uppercase font-bold">#</th>
                <th className="py-5 uppercase font-bold">transactionID</th>
                <th className="py-5 uppercase font-bold">Time</th>
                <th className="py-5 uppercase font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((item) => (
                <tr>
                  <td className="border font-bold">{item.id}</td>
                  <td className="border uppercase font-bold text-xl">
                    {item.transactionID}
                  </td>
                  <td className="border font-bold text-xl">{item.time}</td>
                  <td className="border font-bold text-xl">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
