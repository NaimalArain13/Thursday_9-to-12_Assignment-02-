import Image from "next/image";
import HeroSection from "./components/Hero-Section/Hero-Section";
import Download from "./components/Download/Download";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-white flex flex-col gap-5 w-full max-w-8xl h-[200px] justify-between p-11 items-center justify-center">
        <div>
          <h1 className="text-[1.25rem] flex pt-6 justify-center tracking-wider font-bold md:text-xl  md:font-medium">
            Over <b className="font-bold px-1">500</b> world wide users
          </h1>
        </div>
        <div className="md:hidden flex space-x-4">
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/destin.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/premier.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
          
</div>
        <div className="hidden md:flex md:w-full md:max-w-6xl  md:space-x-16">
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/destin.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/premier.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/marketing.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/attic.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
          <div >
            <Image
              src={"https://www.swiftsales.io/assets/images/spa.png"}
              alt=""
              width={180}
              height={100}
            />
          </div>
        </div>
      </div>
      <Download />
    
    </div>
  );
}
