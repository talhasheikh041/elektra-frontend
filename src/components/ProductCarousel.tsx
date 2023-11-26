import { responsive } from "../data/carouselData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type PropsType = {
  products: JSX.Element[];
};

const ProductCarousel = ({ products }: PropsType) => {
  return (
    <section>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        {products}
      </Carousel>
    </section>
  );
};
export default ProductCarousel;
