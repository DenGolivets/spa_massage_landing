import { FaPlay } from "react-icons/fa"
import RotatedText from "./RotatedText"
import { HiCheck } from "react-icons/hi";
import { LuAlarmClock } from 'react-icons/lu'

const Hero = () => {

  const Card = ({ image, text }) => {
    return (
      <div 
        data-aos='fade-down'
        data-aos-delay='300'
        className="relative w-full h-[350px] flex justify-center items-center"
      >
        {/* <img src="/images/leaf.png" alt="" className="z-20 absolute left-0" /> */}
        <img src={image} alt="" className="h-full absolute top-0 z-10 object-cover w-full" />
        <div className="border border-white z-20 w-[95%] h-[90%] mx-auto">
          <div className="pl-12 absolute flex flex-col items-baseline justify-center h-[90%]">
            <h4 className="text-main lg:text-[40px] text-[30px] font-bold">
              10%
            </h4>
            <h3 className="text-[#F6E8DC] lg:text-[40px] text-[30px] uppercase font-bold pb-4 w-4/5">
              {text}
            </h3>
            <button className="text-xs uppercase font-semibold text-white bg-main py-4 px-12 transition-bg
            hover:bg-black">
              Book Now
            </button>
          </div>
        </div>
      </div>
    )
  };

  const Check = ({ text }) => {
    return (
      <span className="text-textColor flex items-center gap-3 text-lg leading-10">
        <HiCheck className="bg-main text-white rounded-full" />
        {text}
      </span>
    )
  }

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="bg-[url('/images/bg-hero2.jpg')] bg-no-repeat lg:absolute bg-cover bg-center w-full top-0">
          <div>
            <img 
              src="/images/shape.png" 
              alt="" 
              className="hidden lg:block absolute top-[45.3rem] right-0 w-[200px] 
              h-[150px]" 
              data-aos="zoom-in-up"
              data-aos-delay='900'
            />
            <img 
              src="/images/shape2.png" 
              alt="" 
              className="hidden lg:block absolute bottom-[34rem] left-[45rem]
              w-[200px] h-[100px] hover:rotate-12 duration-700 transition-all" 
              data-aos='fade-left'
              data-aos-delay='700'
            />
          </div>
          <div className="max-w-[1200px] mx-auto xl:px-0 lg:mt-60 pt-16 lg:flex items-center p-2 lg:p-0">
            <div
              data-aos='fade-right'
              data-aos-delay='300'
              className="relative lg:w-1/2 z-10" 
            >
              <h6 className="mb-4 text-textColor font-semibold uppercase">
                Natural approach to better health
              </h6>
              <h2 className="mb-9 uppercase lg:text-[70px] font-semibold lg:leading-[70px] text-[#E62E91]/90">
                Discover place where you feel magical
              </h2>
              <button className="uppercase text-xs font-semibold text-white bg-main py-4 px-12 transition-bg
              hover:bg-black hover:text-white">
                Discover More
              </button>
            </div>
            <div 
              data-aos='fade-right'
              data-aos-delay='300'
              className="lg:mt-0 mt-8"
            >
              <div className="relative z-10 rounded-[250px] items-center justify-center lg:h-[622px] 
              h-[480px] hidden lg:flex">
                <img 
                  src="/images/massage1.jpg" 
                  alt="" 
                  className="lg:absolute rounded-[250px] top-0 lg:h-full z-10"
                />
                <img 
                  src="/images/oval-shape.png" 
                  alt="" 
                  className="lg:block hiddenrelative w-[550px] h-[700px] -z-10"
                />
                {/* <img 
                  src="/images/leaf2.png" 
                  alt=""
                  className="absolute lg:h-[150px] lg:w-[150px] left-[18.5rem] top-[31.5rem] main_slider-three_leaf_one 
                  hidden lg:block" 
                  style={{ rotate: '90deg' }}
                />
                <img 
                  src="/images/leaf.png" 
                  alt="" 
                  className="absolute right-[17rem] -top-16 main_slider-three_leaf_two hidden lg:block lg:h-[150px] lg:w-[150px]"
                  style={{ rotate: '90deg' }}
                /> */}
                <img 
                  src="/images/flower-shape.png" 
                  alt="" 
                  className="hidden lg:block absolute right-[11rem] -top-16 z-10 about_three__thumb__flower_img lg:w-[150px] 
                  lg:h-[150px]"
                  style={{ rotate: '260deg' }}
                />
                <div className="absolute z-10 left-8 bottom-0 lg:block flex justify-center">
                  <div className="bg-white rounded-full relative flex items-center justify-center w-[173px]
                  h-[173px] main_slider-three_leaf_text cursor-pointer">
                    <RotatedText />
                    <div className="bg-main text-white rounded-full flex items-center justify-center absolute
                    w-[95px] h-[95px]">
                      <FaPlay size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my-16">
        <div className="flex flex-col lg:flex-row gap-4 max-w-[1600px] mx-auto px-6">
          <Card image='/images/massage3.jpg' text='spa & beauty treatment' />
          <Card image='/images/massage2.jpg' text='thai Massage creams' />
        </div>
        <div className="my-16 lg:flex gap-12 justify-between max-w-[1200px] mx-auto xl:px-0 px-6">
          <div 
            data-aos='zoom-in-up'
            data-aos-delay='300'
            className="relative lg:w-1/3"
          >
            <img src="/images/flower-shape.png" alt="" className="absolute -top-6 left-6 z-20 about_three__thumb__flower_img
            lg:w-[100px] lg:h-[100px]" style={{ rotate: '180deg' }} />
            <img src="/images/massage4.jpg" alt="" className="rounded-full relative z-10 lg:h-[300px] lg:w-[300px]" />
            <img src="/images/oval.png" alt="" className="absolute left-4 bottom-[8rem] main_slider_three_img lg:w-[80px]
            lg:h-[80px]" />
          </div>
          <div 
            data-aos='zoom-in-up'
            data-aos-delay='300'
            className="lg:w-1/3"
          >
            <h4 className="uppercase pb-0 lg:pb-8 font-bold text-3xl">
              Essential Balance Wellness
            </h4>
            <p className="text-main font-medium text-xl">
              We are providing the best quality & natural spa and beauty services.
            </p>
            <p className="pt-8">
              There are many variations  of passages of Amy available,
              but the majority have suffered alteration in some form.
            </p>
            <button className="uppercase text-xs font-semibold text-white bg-main py-4 px-12 transition-bg
            hover:bg-black hover:text-white mt-8">
              Discover More
            </button>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='300'
            className="lg:w-1/3"
          >
            <h4 className="uppercase text-3xl font-bold mb-6">
              Our Benefits
            </h4>
            <Check text='Quality Services' />
            <Check text='100% Satisfaction Guarantee' />
            <Check text='Highly Professional Members' />
            <Check text='Give Always Best' />
            <Check text='Best Value Solutions' />
            <Check text='Proffesional and Qualified' />
            <div className="flex items-center gap-8 mt-4">
              <div className="flex flex-col">
                <div className="border-t-[6px] border-[#f6f5f4]/30 mt-4 w-full shadow-md"></div>
                <div className="flex gap-8 items-center mt-4">
                  <img src="/images/avatar.jpg" alt="" className="rounded-full w-10 h-10" />
                  <span className="flex flex-col gap-2">
                    <img src="/images/sign.png" alt="" className="w-32 h-10" />
                    <p>
                      Melinda - CO Founder
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-right'
          data-aos-delay='300'
          className="mt-12 relative max-w-[1200px] mx-auto xl:px-0 px-6"
        >
          <div className="bg-main lg:flex items-center justify-between">
            <div className="lg:w-44 w-full h-full py-10 opening_wrapper">
              <LuAlarmClock size={65} className='text-white h-20 w-full' />
            </div>
            <div>
              <h4 className="uppercase">
                Opening Hours
              </h4>
            </div>
            <div className="lg:w-1/4 text-center lg:pb-0 pb-8">
              <p className="uppercase text-xs text-white">
                Monday to Friday
              </p>
              <p className="text-xl text-white">
                10:00 am - 7:00 pm
              </p>
            </div>
            <div className="lg:w-1/4 text-center lg:pb-0 pb-8">
              <p className="uppercase text-xs text-white">
                Saturday
              </p>
              <p className="text-xl text-white">
                12:00 am - 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero