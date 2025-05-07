import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#B22222] py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-[#FFD700]">
              Hunting Shooting Range
            </h3>
            <p className="text-[#EFEFEF]">
              Your premier destination for professional shooting training and
              practice.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-[#FFD700]">Hours</h3>
            <p className="text-zinc-400">Saturday - Thursday: 4PM - 12AM</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-[#FFD700]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/hsregypt?mibextid=ZbWKwL"
                className="text-[#EFEFEF] hover:text-[#FFD700]"
                aria-label="Visit our Facebook page"
                target="_blank"
              >
                <FaFacebookF className="size-6" />
              </a>
              <a
                href="https://www.instagram.com/hunting_shooting_range?fbclid=IwY2xjawJsekNleHRuA2FlbQIxMAABHiDZhpb-ePDnrA9uKfoWwtrbj9jdWej3TtJTXjk34ydMucD4P-94v0PracoK_aem_5YpmgD7DFO7SD3hWBzG2yg"
                className="text-[#EFEFEF] hover:text-[#FFD700]"
                aria-label="Visit our Instagram page"
                target="_blank"
              >
                <FaInstagram className="size-6" />
              </a>
              <a
                href="https://www.tiktok.com/@hunting_shooting_range?_t=ZS-8wABhaTKJRx&_r=1"
                className="hover:text-[#FFD700]"
                aria-label="Visit our Tiktok page"
                target="_blank"
              >
                <FaTiktok className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-[#EFEFEF]">
          <p>
            &copy; {new Date().getFullYear()} Hunting Shooting Range. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
