import CarouselItem from "../components/CarouselItem";
import HomeInfoBox from "../components/HomeInfoBox";
import PageHeading from "../components/PageHeading";
import ProductCarousel from "../components/ProductCarousel";
import ProductCategory from "../components/ProductCategory";
import Slider from "../components/Slider";
import { productData } from "../data/carouselData";

const Home = () => {
  const products = productData.map((product) => {
    return (
      <CarouselItem
        key={product.id}
        id={product.id}
        description={product.description}
        imageurl={product.imageurl}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <>
      <Slider />
      <section>
        <div className="px-8 py-6 xl:px-60">
          <HomeInfoBox />
          <PageHeading heading="Latest Products" btnText="Shop Now" />
          <ProductCarousel products={products} />
        </div>
      </section>
      <section className="mt-2">
        <div className="px-8 py-6 xl:px-60">
          <h1 className="text-2xl font-light sm:text-3xl lg:text-4xl">
            Categories
          </h1>
          <hr className="mt-4" />
          <ProductCategory />
        </div>
      </section>
      <section>
        <div className="px-8 xl:px-60">
          <PageHeading heading="Mobile Phones" btnText="Shop Now" />
          <ProductCarousel products={products} />
        </div>
      </section>
    </>
  );
};
export default Home;
