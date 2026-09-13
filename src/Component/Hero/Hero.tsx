import HeroImg from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white py-12">
      {/* Main Container */}
      <div className="container mx-auto max-w-6xl px-4">
        {/* Hero Layout */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left Side: Text Content */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Build Your Ideal <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              {/* Explore Technologies */}
              <button
                type="button"
                className="rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                Explore Technologies
              </button>

              {/* Learn More */}
              <button
                type="button"
                className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="flex w-full justify-center md:w-1/2">
            <img
              src={HeroImg}
              alt="Development Stack Illustration"
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
