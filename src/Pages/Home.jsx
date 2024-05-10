import Banner from "../Components/Banner/Banner";
import Overviews from "../Components/Layouts/Overviews";
import PopularClass from "../Components/Layouts/PopularClass";
import PopularInstructor from "../Components/Layouts/PopularInstructor";
import Pricing from "../Components/Layouts/Pricing";
import ProductDesign from "../Components/Layouts/ProductDesign";
import Review from "../Components/Layouts/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <Review />
      <ProductDesign />
      <Overviews />
      <Pricing />
    </div>
  );
};

export default Home;
