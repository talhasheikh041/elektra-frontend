import { Button } from "./ui/button";

type PropsType = {
  heading: string;
  btnText: string;
};

const PageHeading = ({ heading, btnText }: PropsType) => {
  return (
    <>
      <div className="flex justify-between items-center mt-14">
        <h1 className="text-2xl font-light sm:text-3xl lg:text-4xl">
          {heading}
        </h1>
        <Button variant="default">{btnText}</Button>
      </div>
      <hr className="mt-4" />
    </>
  );
};
export default PageHeading;
