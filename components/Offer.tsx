import Image from "next/image";
import { Button } from "./ui/button";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="dark:bg-black h-screen flex flex-col md:flex-row md:justify-between dark:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER  */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className="dark:text-neutral-400 text-amber-600 text-5xl font-bold xl:text-6xl">Delicious Burgher & French Fries</h1>
        <p className="text-muted-foreground xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque
          ea distinctio sed, doloremque temporibus eligendi itaque eum? Commodi,
          ullam.
        </p>
        <CountDown/>
        <Button className="rounded-md py-3 px-6 cursor-pointer">Order Now</Button>
      </div>

      {/* IMAGE CONTAINER  */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
