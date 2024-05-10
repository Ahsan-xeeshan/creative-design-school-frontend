/* eslint-disable react/prop-types */
const FooterContent = ({ title, children }) => {
  return (
    <div className="py-[25px]">
      <h3 className="text-primary text-base font-dm font-bold pb-4 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default FooterContent;
