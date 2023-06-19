import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink/NavLink";
import SubscribeForm from "../SubscribeForm/SubsscribeForm";
import hero from '../../../public/hero1.svg';
import Image from 'next/image';
const Hero = () => (
  <section>
    <GradientWrapper wrapperClassName="inset-0" className="custom-screen text-gray-600">
      <div className=" mb-3 items-center gap-12 text-gray-600 md:flex">
        <div className="flex-none space-y-5 max-w-xl">
        <h1 className="text-5xl text-gray-500 font-extrabold mx-auto  sm:text-6xl">
        Make your networking Game Strong
        {" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
          From Communities
          </span>
        </h1>
        <p className="text-2xl">Break Barriers. Foster Collaboration. Ignite Innovation.</p>
        <SubscribeForm />
        <p>Connect. Network. Contribute.</p>
        </div>
        <div className="flex-none mt-12 md:mt-0">
          <Image
            src={hero}
            alt="Starboard Desktop App"
            className="w-fit shadow-lg md:max-w-2xl"
            loading="eager"
          />
        </div>
      </div>
    </GradientWrapper>
  </section>
);

export default Hero;
