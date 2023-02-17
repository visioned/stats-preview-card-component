import desktopHeader from "./assets/image-header-desktop.jpg";
import mobileHeader from "./assets/image-header-mobile.jpg";

function App() {
  return (
    <main className="h-screen flex justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-cyan-600 to-sky-800">
      <div className="shadow-2xl rounded-2xl h-[779px] w-[327px] lg:h-[446px] lg:w-[1110px] bg-[#1c1b32] lg:flex lg:flex-row-reverse ">
        <div className="rounded-t-lg lg:rounded-t-none lg:h-[446px] lg:w-[1110px] lg:flex bg-cyan-400 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-bl-none">
          <img
            src={mobileHeader}
            alt=""
            className="lg:hidden mix-blend-multiply"
          />
          <img
            src={desktopHeader}
            alt=""
            className="items-end lg:rounded-tl-none lg:rounded-tr-lg lg:rounded-br-lg hidden lg:block mix-blend-multiply"
          />
        </div>

        <div className="lg:p-[34px]">
          <div className="flex flex-col p-[16px] text-center lg:text-left">
            <h1 className="mt-[24px] font-bold text-[28px] lg:text-[35px] text-[#fff] leading-[32px] tracking-[0.2px] mx-4 lg:leading-[42px] lg:tracking-[1px]">
              Get <span className="text-cyan-300">insights</span> that help your
              business grow.
            </h1>
            <p className="text-[15px] pt-[15px] opacity-70 leading-[24px] lg:mt-4 lg:ml-4 lg:pr-24">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>

            <div className="flex flex-col gap-7 lg:gap-14 mt-[36px] lg:flex-row lg:ml-5 lg:mt-16">
              <div className="flex flex-col justify-center items-center lg:items-start">
                <h2 className="font-bold text-2xl text-[#fff] mb-[5px] text-[24px]">
                  10k+
                </h2>
                <p className="font-lexend uppercase text-xs tracking-widest opacity-60">
                  companies
                </p>
              </div>

              <div className="flex flex-col justify-center items-center lg:items-start">
                <h2 className="font-bold text-2xl text-[#fff] mb-[5px] text-[24px]">
                  314
                </h2>
                <p className="font-lexend uppercase text-xs tracking-widest opacity-60">
                  templates
                </p>
              </div>

              <div className="flex flex-col justify-center items-center lg:items-start">
                <h2 className="font-bold text-2xl text-[#fff] mb-[5px] text-[24px]">
                  12M+
                </h2>
                <p className="font-lexend uppercase text-xs tracking-widest opacity-60">
                  queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
