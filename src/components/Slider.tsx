import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { sliderData } from "../data/sliderData";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = sliderData.length;
  let sliderInterval: NodeJS.Timeout;
  const autoScroll = true;
  const intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        sliderInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(sliderInterval);
  }, [currentSlide, intervalTime, autoScroll]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };

  return (
    <section
      id="slider"
      className="relative h-80 sm:h-[80vh] bg-gray-500 overflow-hidden"
    >
      <ArrowLeftCircleIcon
        onClick={prevSlide}
        className="absolute z-40 top-1/2 left-4 hover:text-orange-600 cursor-pointer hover:scale-150 duration-300"
      />
      <ArrowRightCircleIcon
        onClick={nextSlide}
        className="absolute z-40 top-1/2 right-4 hover:text-orange-600 cursor-pointer hover:scale-150 duration-300"
      />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;

        return (
          <div
            key={index}
            className={`h-full relative -right-1/2 transform transition-all duration-700 ease-in-out -translate-x-1/2 animate-in ${
              currentSlide === index ? "" : "hidden"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="slider-image"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 ease-in-out bg-gray-950 bg-opacity-60 py-6 px-10 text-center text-white rounded-md animate-in sm:py-8 sm:px-14">
              <h2 className="text-3xl font-semibold sm:text-5xl">{heading}</h2>
              <p className="mt-3 text-sm sm:text-base">{desc}</p>
              <hr className="mt-3" />
              <Button className="mt-3 sm:p-6 sm:mt-6 bg-orange-800">
                Shop Now
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Slider;
