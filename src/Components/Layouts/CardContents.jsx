/* eslint-disable react/jsx-key */
const cardData = [
  {
    title: "jakey chaine",
    price: "800",
    image: "./cardpic1.jpg",
  },
  {
    title: "LoyButan",
    price: "800",
    image: "./cardpic1.jpg",
  },
  {
    title: "Gombo Design E",
    price: "800",
    image: "./cardpic2.jpg",
  },
  {
    title: "Pinto Fills",
    price: "800",
    image: "./cardpic1.jpg",
  },
  {
    title: "Old Design",
    price: "800",
    image: "./cardpic3.png",
  },
  {
    title: "jakey chaine",
    price: "800",
    image: "./cardpic4.jpeg",
  },
  {
    title: "jakey chaine",
    price: "800",
    image: "./cardpic5.webp",
  },
  {
    title: "jakey chaine",
    price: "800",
    image: "./cardpic1.jpg",
  },
];

const CardContents = () => {
  return cardData.map((item) => (
    <a href="#">
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-4">
        <img
          src={item.image}
          alt=""
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div>
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-black truncate block capitalize">
                {" "}
                {item.title}
              </p>

              <p className="text-lg p-2 bg-green-100 rounded-xl text-black truncate block capitalize">
                {" "}
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  ));
};

export default CardContents;
