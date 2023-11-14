import React, { useEffect, useState } from "react";

import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import TopBar from "../../Components/TopBar/TopBar";
import { useParams } from "react-router-dom";

export default function Category() {
  const [courses, setCourses] = useState([]);
  const [orderedcourses, setOrderedCourses] = useState([]);
  const { categoryName } = useParams();
  const [showCourses,setShowCourses]=useState([]);
  const [status,setStatus]=useState('default');
  const [statusTitle,setStatusTitle]=useState('مرتب سازی پیش فرض')
  const [searchValue,setSearchValue]=useState('');
  const [coursesDisplayType,setCoursesDisplayType]=useState('row')
  useEffect(() => {
    fetch(`http://127.0.0.1:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setOrderedCourses(data)
      });
  }, [categoryName]);
  useEffect(()=>{
    switch(status){
      case 'free':{
          const freeCourses=courses.filter(course=>course.price===0);
          setOrderedCourses(freeCourses);
          break;
      }
      case 'money':{
        const notfreeCourses=courses.filter(course=>course.price!=0);
        setOrderedCourses(notfreeCourses);
        break;
    }
    case 'last':{
      setOrderedCourses(courses);
      break;
  }
  case 'first':{
    const revCourses=courses.slice().reverse();
    setOrderedCourses(revCourses);
    break;
}
      default:{
        setOrderedCourses(courses)
      }
    }
  },[status])

  const searchValueChangeHandler=(e)=>{
    setSearchValue(e.target.value)
    const filerCourse=courses.filter(course=>course.name.toLowerCase().includes((e.target.value).toLowerCase()))
    setOrderedCourses(filerCourse);
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <section className="courses">
        <div className="container">
          {courses.length ? (
            <>
              <div className="courses-top-bar">
                <div className="courses-top-bar__right">
                  <div className={`courses-top-bar__row-btn ${coursesDisplayType==='row' && 'courses-top-bar__icon--active'}`} onClick={()=>setCoursesDisplayType('row')}>
                    <i className="fas fa-border-all courses-top-bar__icon"></i>
                  </div>
                  <div className={`courses-top-bar__row-btn ${coursesDisplayType==='column' && 'courses-top-bar__icon--active'}`} onClick={()=>setCoursesDisplayType('column')}>
                    <i className="fas fa-align-left courses-top-bar__icon"></i>
                  </div>

                  <div className="courses-top-bar__selection">
                    <span className="courses-top-bar__selection-title">
                      {statusTitle}
                      <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                    </span>
                    <ul className="courses-top-bar__selection-list">
                      <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active"  
                      onClick={()=>{
                        setStatus('default');
                        setStatusTitle('مرتب سازی پیش فرض')
                        }}>
                        مرتب سازی پیش فرض
                      </li>
                      <li className="courses-top-bar__selection-item" 
                      onClick={()=>{
                        setStatus('free')
                        setStatusTitle('مربت سازی دوره های رایگان')
                        }}>
                        مربت سازی دوره های رایگان
                      </li>
                      <li className="courses-top-bar__selection-item" 
                      onClick={()=>{
                        setStatus('money')
                        setStatusTitle(' مربت سازی دوره های پولی')
                        }}>
                        مربت سازی دوره های پولی
                      </li> 
                      <li className="courses-top-bar__selection-item" 
                      onClick={()=>{
                        setStatus('last')
                        setStatusTitle('مربت سازی بر اساس آخرین')
                        }}>
                        مربت سازی بر اساس آخرین
                      </li>
                      <li className="courses-top-bar__selection-item" 
                      onClick={()=>{
                        setStatus('first')
                        setStatusTitle('مربت سازی بر اساس اولین')
                      }}>
                        مربت سازی بر اساس اولین
                      </li>
                      <li className="courses-top-bar__selection-item" 
                      onClick={()=>{
                        setStatus('chip')
                        setStatusTitle('مربت سازی بر اساس ارزان ترین')
                        }}>
                        مربت سازی بر اساس ارزان ترین
                      </li>
                      <li className="courses-top-bar__selection-item" 
                      onClick={()=>{
                        setStatus('expensive')
                        setStatusTitle('مربت سازی بر اساس گران ترین')
                        }}>
                        مربت سازی بر اساس گران ترین
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="courses-top-bar__left">
                  <form action="#" className="courses-top-bar__form">
                    <input
                      type="text"
                      className="courses-top-bar__input"
                      placeholder="جستجوی دوره ..."
                      value={searchValue}
                      onChange={searchValueChangeHandler}
                    />
                    <i className="fas fa-search courses-top-bar__search-icon"></i>
                  </form>
                </div>
              </div>
              <div className="courses-content">
                <div className="container">
                  <div className="row">
                    
                   
                  {showCourses.length === 0 ? (
                      <div className="alert alert-warning">
                        هیچ دوره‌ای برای {statusTitle} وجود ندارد
                      </div>
                    ) : (
                      <>
                        {coursesDisplayType === "row" ? (
                          <>
                            {showCourses.map((course) => (
                              <CourseBox {...course} />
                            ))}
                          </>
                        ) : (
                          <>
                            {showCourses.map((course) => (
                              <div class="col-12">
                                <div class="course-box">
                                  <div class="course__box-header">
                                    <div class="course__box-right">
                                      <a
                                        class="course__box-right-link"
                                        href="#"
                                      >
                                        <img
                                          src="/images/courses/fareelancer.png"
                                          class="course__box-right-img"
                                        />
                                      </a>
                                    </div>
                                    <div class="course__box-left">
                                      <div class="course__box-left-top">
                                        <a
                                          href="#"
                                          class="course__box-left-link"
                                        >
                                          {course.name}
                                        </a>
                                      </div>
                                      <div class="course__box-left-center">
                                        <div class="course__box-left-teacher">
                                          <i class="course__box-left-icon fa fa-chalkboard-teacher"></i>
                                          <span class="course__box-left-name">
                                            محمد امین سعیدی راد
                                          </span>
                                        </div>
                                        <div class="course__box-left-stars">
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                        </div>
                                      </div>
                                      <div class="course__box-left-bottom">
                                        <div class="course__box-left-des">
                                          <p>{course.description}</p>
                                        </div>
                                      </div>
                                      <div class="course__box-footer">
                                        <div class="course__box-footer-right">
                                          <i class="course__box-footer-icon fa fa-users"></i>
                                          <span class="course__box-footer-count">
                                            202
                                          </span>
                                        </div>
                                        <span class="course__box-footer-left">
                                          {course.price === 0
                                            ? "رایگان"
                                            : course.price.toLocaleString()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </>
                    )}
                 
                    
                  <Pagination 
                  items={orderedcourses}
                  itemsCount={3}
                  pathname={`/category-info/${categoryName}`}
                  setShowItems={setShowCourses}
                  />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="alert alert-warning text-center" role="alert">
              برای این دسته بندی دوره ای وجود ندارد
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
