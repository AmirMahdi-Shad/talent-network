import Image from "next/image";

import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';

import { Navigation  } from 'swiper';
import Slide from "./slide";


function Slider({ourTeam}){
    if(!ourTeam || !ourTeam.content){
        return <></>
    }else{
        return (<div data="slider" className="w-full max-w-[1400px] mx-auto teams-slider">
            <div className="bg-secondary-400 rounded-3xl w-full relative pt-[320px] md:pt-[440px] lg:pt-[510px] 2xl:pt-[40%]">
                <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center justify-items-center">
                    <div className="w-full ">
                        <header className="w-full px-4 md:px-6 2xl:px-10 flex pb-2 md:pb-4 lg:pb-10 justify-between">
                            <h3 className="bg-primary-400 rounded-md h-7 md:h-9 text-typoDark-200 px-3 py-0.5 "><span className="leading-7 md:leading-9 font-extrabold text-[.875rem] md:text-[1rem]">Our team</span></h3>
                            <div data="slider-controller" className="pr-1 lg:pr-10">
                                <button className="w-7 md:w-10 h-7 md:h-10 team-slider-prev"><div className="relative w-full h-full"><Image src={'/icons/slider-prev.svg'} fill alt={'slider prev icon'} /></div></button>
                                <button className="w-7 md:w-10 h-7 md:h-10 team-slider-next"><div className="relative w-full h-full"><Image src={'/icons/slider-next.svg'} fill alt={'slider next icon'} /></div></button>
                            </div>
                        </header>
                        <div data="slider container" className="w-full pt-[260px] md:pt-[320px] lg:pt-[380px] 2xl:pt-[27.14%] relative ">
                            <div className="absolute px-2 md:px-4 lg:px-7 top-0 left-0 w-full h-full ">
                                <div className="w-full h-full ">
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={0}
                                        slidesPerView={'auto'}
                                        className="h-full"
                                        navigation={{
                                            prevEl: ".team-slider-prev",
                                            nextEl: ".team-slider-next",
                                        }}
                                        >
                                        {ourTeam.content.map((person,index)=><SwiperSlide key={index}><Slide person={person} className="w-[18.14%] h-full" /></SwiperSlide>)}
                                        {ourTeam.content.map((person,index)=><SwiperSlide key={index}><Slide person={person} className="w-[18.14%] h-full" /></SwiperSlide>)}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
    
}



export default Slider;