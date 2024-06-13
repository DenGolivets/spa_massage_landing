import { useState } from "react";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {

  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  }

  return (
    <nav className="w-full lg:pb-8 flex flex-col justify-center items-center lg:relative sticky top-0 z-50 
    lg:bg-transparent bg-[#f5ebe0]">
      <div className="container mx-auto lg:w-full w-[95%]">
        <div className="flex items-center justify-between border-b border-[#e8e3da] lg:w-4/5 w-full mx-auto 
        py-8">
          <img src="/images/logo.png" alt="logo" width={120} height={100} />
          <span className="flex items-center gap-8">
            {dropDown ? (
              <div onClick={showDropDown} className="lg:hidden text-[22px] cursor-pointer">
                <MdClose />
              </div>
            ) : (
              <div onClick={showDropDown} className="lg:hidden text-[22px] cursor-pointer">
                <HiMenuAlt3 />
              </div>
            )}
            <HiSearch size={24} />
            <PiShoppingCartLight size={24} />
            <button className="uppercase hidden lg:block text-white text-xs font-semibold bg-[#C2A74E]
            px-[29px] py-[11px] transition-bg hover:bg-black hover:text-white">
              Book Now
            </button>
          </span>
        </div>
        <div className="lg:w-full mx-auto h-full lg:flex hidden justify-center gap-16 items-center pt-8 pr-20">
          <ul className="uppercase flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a href="#" className="leading-normal no-underline text-sm hover:text-main font-medium">Home</a>
            <a href="#" className="leading-normal no-underline text-sm hover:text-main font-medium">Services</a>
            <a href="#" className="leading-normal no-underline text-sm hover:text-main font-medium">Product</a>
            <a href="#" className="leading-normal no-underline text-sm hover:text-main font-medium">Testimonial</a>
            <a href="#" className="leading-normal no-underline text-sm hover:text-main font-medium">Team</a>
            <a href="#" className="leading-normal no-underline text-sm hover:text-main font-medium">Blog</a>
          </ul>
        </div>
        {dropDown && (
          <div className="lg:hidden w-full h-full px-6 fixed top-32 bg-[#f5ebe0] transition-all">
            <div className="flex flex-col w-full items-baseline gap-4 justify-center">
              <ul className="flex flex-col justify-center w-full uppercase items-center">
              <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg
              text-[15px] border-0 border-b border-[#e3d5ca]">Home</a>
              <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg
              text-[15px] border-0 border-b border-[#e3d5ca]">Services</a>
              <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg
              text-[15px] border-0 border-b border-[#e3d5ca]">Product</a>
              <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg
              text-[15px] border-0 border-b border-[#e3d5ca]">Testimonial</a>
              <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg
              text-[15px] border-0 border-b border-[#e3d5ca]">Team</a>
              <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg
              text-[15px] border-0 border-b border-[#e3d5ca]">Blog</a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar