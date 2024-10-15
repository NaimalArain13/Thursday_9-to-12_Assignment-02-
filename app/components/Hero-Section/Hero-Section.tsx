import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="mx-auto overflow-hidden bg-neutral-100 flex flex-col items-center pt-10 md:pt-20 min-h-screen space-y-7 md:space-y-9 text-center px-4">
      <h1 className="text-2xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.5]">
        ENGAGE VISITORS.
        <br />
        FUEL LEAD FUNNEL.
        <span className="text-2xl md:text-6xl font-bold ml-1 tracking-tight text-gray-900 leading-loose border-yellow-500  rounded-t-lg  md:border-4 ">
          DRIVE MORE SALES
        </span>
      </h1>

      <p className="text-gray-900 max-w-5xl text-lg md:text-2xl  px-4 leading-loose">
        Our all-in-one customer support solution swiftly answers queries from
        customers, 
        drives company growth, and improves customer satisfaction.
      </p>
      <div className="md:flex-row flex-col space-y-5  md:space-x-5 pt-6">
        <Button className="bg-black text-lg text-white px-4 md:px-8 py-8 rounded-full font-semibold shadow-md hover:bg-gray-800 transition duration-200">
          GET FREE ACCOUNT
        </Button>
        <Button className="bg-yellow-500 text-lg text-black px-4 md:px-8 py-8 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition duration-200">
          VIEW PRODUCT DEMO
        </Button>
      </div>
      <p className="text-gray-800 font-semibold text-md pt-1">No credit card required</p>
    </div>
  );
}
