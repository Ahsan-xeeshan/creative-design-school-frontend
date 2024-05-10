import InstructorCard from "../Components/Layouts/InstructorCard";

const AllInstructor = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center  mt-10 underline">
        Our Instructors
      </h1>
      <div className="mt-6 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <InstructorCard />
      </div>
    </div>
  );
};

export default AllInstructor;
