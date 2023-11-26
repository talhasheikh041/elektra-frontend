import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type CarouselItemProps = {
  id: number;
  imageurl: string;
  name: string;
  price: string;
  description: string;
};

const CarouselItem = ({
  description,
  imageurl,
  name,
  price,
}: CarouselItemProps) => {
  return (
    <div className="p-2 mx-2 my-2 shadow-xl rounded-xl">
      <Link to="product-details">
        <img
          className="w-96 h-80 rounded-xl object-center object-cover"
          src={imageurl}
          alt="product-image"
        />
        <p className="text-2xl font-semibold mt-2">{price}</p>
        <h1 className="">{name.substring(0, 18)}</h1>
        <p className="text-sm text-gray-500">
          {description.substring(0, 26)}...
        </p>
      </Link>
      <Button className="block w-full mt-4 hover:bg-orange-800">
        Add To Cart
      </Button>
    </div>
  );
};
export default CarouselItem;
