import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="font-nautiles w-full">
        <div className="max-w-[1050px] w-full flex flex-col items-center justify-between mx-auto lg:gap-8 gap-5 py-5 lg:px-10 px-5">
          <div className="lg:text-[79px] text-[32px] leading-[1em] font-semibold text-white">
            Contact
          </div>
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
          <div className="flex flex-row justify-center items-center lg:gap-6 gap-4">
            <Link
              to=""
              className="w-[88px] h-[88px] bg-white rounded-full flex justify-center items-center"
            >
              <Icon
                icon="file-icons:telegram"
                className=" text-primaryBackground w-[48px] h-[48px]"
              />
            </Link>
            <Link
              to=""
              className="w-[88px] h-[88px] bg-white rounded-full flex justify-center items-center"
            >
              <Icon
                icon="entypo-social:twitter"
                className=" text-primaryBackground w-[48px] h-[48px]"
              />
            </Link>
            <Link
              to=""
              className="w-[88px] h-[88px] bg-white rounded-full flex justify-center items-center"
            >
              <Icon
                icon="dashicons:email"
                className=" text-primaryBackground w-[48px] h-[48px]"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <span className="text-white text-[28px] max-w-[560px] text-center">
              $gaga coin has no association with Matt Furie or his creation Pepe
              the Frog. This token is simply paying homage to a meme we all love
              and recognize.
            </span>
            <span className="text-white text-[28px] max-w-[560px] text-center">
              $GAGA is a meme coin with no intrinsic value or expectation of
              financial return. There is no formal team or roadmap. the coin is
              completely useless and for entertainment purposes only.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
