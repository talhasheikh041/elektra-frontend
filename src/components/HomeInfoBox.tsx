import {
  ClockIcon,
  LockKeyholeIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "lucide-react";

const data = [
  {
    icon: <TruckIcon size={30} color="#8cb4f5" />,
    heading: "Free Shipping",
    text: "We offer free shipping on special products",
  },
  {
    icon: <LockKeyholeIcon size={30} color="#f7d272" />,
    heading: "Secure Payment",
    text: "Make secure payment for your product.",
  },
  {
    icon: <ShoppingBagIcon size={30} color="#fa82ea" />,
    heading: "Quality Products",
    text: "We sell products from only tested and proven brands.",
  },
  {
    icon: <ClockIcon size={30} color="#82fa9e" />,
    heading: "24/7 Support",
    text: "Get access to support from our expert support team.",
  },
];

const HomeInfoBox = () => {
  return (
    <section className="grid sm:grid-cols-2 mt-8 gap-2">
      {data.map((item, index) => {
        const { heading, icon, text } = item;
        return (
          <div key={index} className="border bg-gray-100 p-6 flex gap-6">
            <div className="self-center">{icon}</div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">{heading}</h1>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default HomeInfoBox;
