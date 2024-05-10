import CardContents from "./CardContents";
import Container from "./Container";

const PopularCard = () => {
  return (
    <Container>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10">
        <CardContents />
      </div>
    </Container>
  );
};

export default PopularCard;
