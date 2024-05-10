/* eslint-disable react/no-unescaped-entities */
import overview4 from "../../assets/product-page-02-featured-product-shot.jpg";
import overview1 from "../../assets/product-page-02-secondary-product-shot.jpg";
import overview2 from "../../assets/product-page-02-tertiary-product-shot-01.jpg";
import overview3 from "../../assets/product-page-02-tertiary-product-shot-02.jpg";
import Container from "./Container";

const Overviews = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="pt-6">
          <h2 className="text-3xl font-bold text-center mt-5 mb-16 tracking-tight text-gray-900 sm:text-4xl">
            Product Overviews Design
          </h2>
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={overview1}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={overview2}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={overview3}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={overview4}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Basic Tee 6-Pack
              </h1>
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">$192</p>
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>
              <form className="mt-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <div
                    className="mt-4"
                    id="headlessui-radiogroup-:r0:"
                    role="radiogroup"
                    aria-labelledby="headlessui-label-:r1:"
                  >
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1:"
                      role="none"
                    >
                      Choose a color
                    </label>
                    <div className="flex items-center space-x-3" role="none">
                      <div
                        className="ring-gray-400 ring-2 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                        id="headlessui-radiogroup-option-:r2:"
                        role="radio"
                        aria-checked="true"
                        tabIndex="0"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-:r3:"
                      >
                        <span className="sr-only" id="headlessui-label-:r3:">
                          White
                        </span>
                        <span
                          aria-hidden="true"
                          className="bg-white h-8 w-8 rounded-full border border-black border-opacity-10"
                        ></span>
                      </div>
                      <div
                        className="ring-gray-400 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                        id="headlessui-radiogroup-option-:r4:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:r5:"
                      >
                        <span className="sr-only" id="headlessui-label-:r5:">
                          Gray
                        </span>
                        <span
                          aria-hidden="true"
                          className="bg-gray-200 h-8 w-8 rounded-full border border-black border-opacity-10"
                        ></span>
                      </div>
                      <div
                        className="ring-gray-900 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                        id="headlessui-radiogroup-option-:r6:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:r7:"
                      >
                        <span className="sr-only" id="headlessui-label-:r7:">
                          Black
                        </span>
                        <span
                          aria-hidden="true"
                          className="bg-gray-900 h-8 w-8 rounded-full border border-black border-opacity-10"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>
                  <div
                    className="mt-4"
                    id="headlessui-radiogroup-:r8:"
                    role="radiogroup"
                    aria-labelledby="headlessui-label-:r9:"
                  >
                    <label
                      className="sr-only"
                      id="headlessui-label-:r9:"
                      role="none"
                    >
                      Choose a size
                    </label>
                    <div
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      role="none"
                    >
                      <div
                        className="cursor-not-allowed bg-gray-50 text-gray-200 group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:ra:"
                        role="radio"
                        aria-checked="false"
                        aria-disabled="true"
                        tabIndex="-1"
                        data-headlessui-state="disabled"
                        aria-labelledby="headlessui-label-:rb:"
                      >
                        <span id="headlessui-label-:rb:">XXS</span>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="0"
                              y1="100"
                              x2="100"
                              y2="0"
                              vectorEffect="non-scaling-stroke"
                            ></line>
                          </svg>
                        </span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:rc:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:rd:"
                      >
                        <span id="headlessui-label-:rd:">XS</span>
                        <span
                          className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:re:"
                        role="radio"
                        aria-checked="true"
                        tabIndex="0"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-:rf:"
                      >
                        <span id="headlessui-label-:rf:">S</span>
                        <span
                          className="border-2 border-indigo-500 pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:rg:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:rh:"
                      >
                        <span id="headlessui-label-:rh:">M</span>
                        <span
                          className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:ri:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:rj:"
                      >
                        <span id="headlessui-label-:rj:">L</span>
                        <span
                          className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:rk:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:rl:"
                      >
                        <span id="headlessui-label-:rl:">XL</span>
                        <span
                          className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:rm:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:rn:"
                      >
                        <span id="headlessui-label-:rn:">2XL</span>
                        <span
                          className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div
                        className="cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        id="headlessui-radiogroup-option-:ro:"
                        role="radio"
                        aria-checked="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:rp:"
                      >
                        <span id="headlessui-label-:rp:">3XL</span>
                        <span
                          className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: "Black". Need to
                    add an extra pop of color to your outfit? Our white tee has
                    you covered.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Ultra-soft 100% cotton
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    "Charcoal Gray" limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Overviews;
