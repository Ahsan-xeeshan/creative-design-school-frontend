/* eslint-disable react/no-unescaped-entities */
import product1 from "../../assets/product-feature-03-detail-01.jpg";
import product2 from "../../assets/product-feature-03-detail-02.jpg";
import product3 from "../../assets/product-feature-03-detail-03.jpg";
import product4 from "../../assets/product-feature-03-detail-04.jpg";
import Container from "./Container";

const ProductDesign = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Design
            </h3>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Designed by Good Goods, Inc.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Solid walnut base with rare earth magnets and powder coated
                  steel card cover
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  6.25" x 3.55" x 1.15"
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Hand sanded and finished with natural oil
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Wood card tray and 3 refill packs
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Made from natural materials. Grain and color vary with each
                  item.
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <img src={product1} alt="" />
              <img src={product2} alt="" />
              <img src={product3} alt="" />
              <img src={product4} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDesign;
