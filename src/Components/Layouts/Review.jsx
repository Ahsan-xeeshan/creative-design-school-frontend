import review from "../../assets/review.jpg";
import Container from "./Container";
import Flex from "./Flex";
import SubscriptionCard from "./SubscriptionCard";

const Review = () => {
  return (
    <section className="bg-white">
      <Container>
        <Flex className="flex-wrap py-24 ">
          <div className="w-full md:w-1/2 p-5 md:p-8">
            <img src={review} alt="" className="w-14 h-14 rounded-lg" />
            <h3 className="mb-6 text-3xl font-semibold tracking-tighter mt-5 md:w-[450px]">
              “Basko is a total game-changer! Streamlined workflow &amp;
              productivity. Highly recommend!”
            </h3>
            <h4 className="font-semibold tracking-tight mb-1">
              Annabelle Porter
            </h4>
            <span>Co-Founder, Marin-Jones Inc.</span>
          </div>
          <div className="md:w-1/2 mx-auto">
            <SubscriptionCard />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Review;
