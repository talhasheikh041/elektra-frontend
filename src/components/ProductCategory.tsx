import { sliderData } from "../data/sliderData";
import { Button } from "./ui/button";

const ProductCategory = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 last:border-red-900">
      {sliderData.map((item) => {
        return (
          <div
            className="shadow-xl border rounded-lg p-4 flex flex-col gap-2"
            key={item.heading}
          >
            <img
              className="w-full h-full"
              src={item.image}
              alt="category-img"
            />
            <p className="text-xl">{item.heading}</p>
            <Button className="hover:bg-orange-800">Shop now!</Button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductCategory;
