import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/assets/brands/amazon.png";
import logo2 from "../../../assets/assets/brands/amazon_vector.png";
import logo3 from "../../../assets/assets/brands/casio.png";
import logo4 from "../../../assets/assets/brands/moonstar.png";
import logo5 from "../../../assets/assets/brands/randstad.png";
import logo6 from "../../../assets/assets/brands/star.png";
import logo7 from "../../../assets/assets/brands/start_people.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogosMarquee = () => {
  return (
    <div className="py-14 bg-base-100">
      <h2 className="text-center  font-bold mb-8">
        We've helped thousands of sales teams
      </h2>

      <Marquee speed={50} pauseOnHover gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-12 flex items-center">
            <img
              src={logo}
              alt="Client Logo"
              className="h-4 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogosMarquee;
