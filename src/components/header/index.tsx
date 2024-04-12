import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="font-nautiles w-full">
        <div className="max-w-[1250px] w-full flex flex-row items-center justify-between mx-auto py-5 lg:px-10 px-5">
          <div className="flex flex-row lg:gap-3 md:gap-2 items-center">
            <img
              src="https://gaga.pe/images/tild6262-3935-4639-a230-653762613835__sticker_2.png"
              className="w-[66px] h-[66px]"
              alt="logo"
            />
            <span className="lg:text-[43px] text-[26px] text-white font-bold leading-[1em]">
              Gaga
            </span>
          </div>
          <div className="lg:flex hidden items-center justify-start lg:gap-8">
            <Link to="/">
              <span className="text-white text-[24px] font-semibold leading-[1em]">
                About
              </span>
            </Link>
            <Link to="/">
              <span className="text-white text-[24px] font-semibold leading-[1em]">
                How to buy
              </span>
            </Link>
            <Link to="/">
              <span className="text-white text-[24px] font-semibold leading-[1em]">
                Tokenomics
              </span>
            </Link>
            <Link to="/">
              <span className="text-white text-[24px] font-semibold leading-[1em]">
                Roadmap
              </span>
            </Link>
          </div>
          <button className="flex items-center justify-center text-[24px] border border-white rounded-[30px] font-semibold leading-[1em] text-white px-10 py-3">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
