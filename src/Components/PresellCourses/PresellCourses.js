import React, { useEffect, useState } from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "./PresellCourses.css";
import CourseBox from "../CourseBox/CourseBox";

export default function PresellCourses() {
  const [presellCourses,setPresellCourses]=useState([]);
  useEffect(()=>{
    fetch(`http://127.0.0.1:4000/v1/courses/presell`).then(res=>res.json()).then(data=>{
      setPresellCourses(data);
    })
  },[])
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title='دوره های در حال پیش فروش'
          desc='متن تستی برای توضیحات دوره های پیش فروش'
        />

<>


      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
      >
        {presellCourses.map((course,index)=>(
            <SwiperSlide key={index}>
              <CourseBox  {...course} isSlider={true}/>
            </SwiperSlide>
        ))}
      

      </Swiper>
    </>
      </div>
    </div>
  );
}
