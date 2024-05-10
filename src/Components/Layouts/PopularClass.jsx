import Container from "../../Components/Layouts/Container";
import PopularCard from "./PopularCard";
const PopularClass = () => {
  return (
    <div className="bg-[#F1F5F9] pt-4">
      <Container>
        <div className="text-center pt-[50px]">
          <h2 className="text-4xl font-bold mb-4">Our Popular Class</h2>
          <h4 className="text-3xl">Creation of Design</h4>
        </div>
        <PopularCard />
      </Container>
    </div>
  );
};

export default PopularClass;
