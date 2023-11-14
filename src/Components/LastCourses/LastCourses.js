import React, { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastCourses.css";

export default function LastCourses() {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch(`http://127.0.0.1:4000/v1/courses`).then(res=>res.json()).then(data=>setCourses(data))
    
  },[])
  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref={'courses/1'}
          />

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {
                  courses.splice(0,3).map((course,index)=>(
                    <CourseBox key={index} {...course} />
                  ))
                }
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
