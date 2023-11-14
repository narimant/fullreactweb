import React, { useEffect, useState } from "react";
import Topbar from "./../../Components/TopBar/TopBar";
import Navbar from "./../../Components/Navbar/Navbar";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
import Footer from "./../../Components/Footer/Footer";
import CourseBox from "./../../Components/CourseBox/CourseBox";

import "./Courses.css";
import Pagination from "../../Components/Pagination/Pagination";

export default function Courses() {

  const [Courses,setCourses]=useState([]);
  const [showCourses,setShowCourses]=useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:4000/v1/courses').then(res=>res.json()).then(data=>{
      setCourses(data)
    })
  },[])

  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {
                  showCourses.map((course,index)=>(
                    <CourseBox key={index} {...course}/>
                  ))
                }
                

              </div>
            </div>
          </div>

         <Pagination 
         items={Courses}
         itemsCount={3}
         pathname='/courses'
         setShowItems={setShowCourses}

         />
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
