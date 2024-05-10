/* eslint-disable react/jsx-key */
const EnrolledClasses = () => {
  const enrolledClassData = [
    {
      id: 1,

      classname: "web design",
      price: "350",
    },
    {
      id: 2,

      classname: "graphic design",
      price: "535",
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-full">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl font-semibold">
            Total enroll: {enrolledClassData.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-5 uppercase font-bold">#</th>
                <th className="py-5 uppercase font-bold">Class Name</th>
                <th className="py-5 uppercase font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClassData.map((item) => (
                <tr>
                  <td className="border font-bold">{item.id}</td>
                  <td className="border uppercase font-bold text-xl">
                    {item.classname}
                  </td>
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

export default EnrolledClasses;
