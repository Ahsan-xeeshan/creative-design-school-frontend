const Preloader = () => {
  return (
    <div className="w-full h-screen bg-[#F1F5F9]">
      <div className="flex items-center justify-center h-full gap-4">
        <div className="flex w-[700px] h-[700px] rounded-full items-center gap-4 animate-half-circle">
          <div className="bg-[#753cf0] w-40 h-40 rounded-full"></div>
          <div className="bg-[#753cf0] w-24 h-24 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
