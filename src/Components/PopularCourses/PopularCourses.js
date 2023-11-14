import React, { useEffect, useState } from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import "swiper/css";
import "./PopularCourses.css";
import CourseBox from "../CourseBox/CourseBox";
import { Swiper, SwiperSlide } from 'swiper/react';


export default function PopularCourses() {
  const [popularCourses,setPopularCourses]=useState([]);
  useEffect(()=>{
    fetch(`http://127.0.0.1:4000/v1/courses/popular`).then(res=>res.json()).then(data=>{
      setPopularCourses(data);
    })
  },[])
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجوها"
        />

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
          loop={true}
        >
          {popularCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseBox {...course} isSlider={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
