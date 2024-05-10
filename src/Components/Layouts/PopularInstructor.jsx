import InstructorCards from "./InstructorCards";

const PopularInstructor = () => {
  return (
    <div className="bg-[#F1F5F9] pt-7">
      <div className="text-center p-10">
        <h2 className="text-4xl font-bold mb-6">Our Popular Instructors</h2>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10">
        <InstructorCards />
      </div>
    </div>
  );
};

export default PopularInstructor;
