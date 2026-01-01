import Services from "../pages/Services";
import What from "../pages/What";
import Globalbrands from "../pages/Globalbrands";
import yellow from "../assets/yellow.jpg";
import tshirt from "../assets/tshirt.jpg";
const Home = () => {
  return (
    <>
      <section className="bg-gray-50 -mt-8 lg:mt-0 -ml-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 pt-20 py-2 lg:py-30 lg:pt-14  ">
          <div className="lg:grid lg:grid-cols-2 lg:items-center gap-10">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Learn what matters, ship what counts
              </h1>
              <p className="lg:mt-25 mt-6 text-gray-900 max-w-xl">
                Master new skills through our comprehensive tutorials while we
                handle your logistics needs with precision and speed.
              </p>

              <div className="lg:mt-10 mt-4 flex items-center">
                <button className="bg-orange-600 text-white font-bold px-6 py-3 rounded-full hover:cursor-pointer">
                  Book now
                </button>
                <button className="ml-3 bg-white/8 text-black border border-orange-600/20 font-bold px-5 py-2  rounded-full hover:cursor-pointer">
                  Membership
                </button>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 relative flex justify-between">
              <img
                src={yellow}
                alt="Hero Image"
                className="w-[290px] h-[340px] lg:w-[980px] lg:h-auto object-contain object-center rounded-xl shadow-sm border border-orange-500"
              />
              <img
                src={tshirt}
                alt="Accent Image"
                className="absolute -right-2  -top-6 lg:-right-6  md:right-55 w-20 h-20 lg:w-36 lg:h-36 object-cover rounded-2xl shadow-sm border-1 border-orange-600"
              />
            </div>
          </div>
        </div>
      </section>
      <Globalbrands />
      <What />
      <Services />
    </>
  );
};

export default Home;
