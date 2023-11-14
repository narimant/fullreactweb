import React, { useEffect, useState } from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Pagination from '../../Components/Pagination/Pagination';
import ArticleBox from '../../Components/ArticleBox/ArticleBox';

const Articles = () => {
    const [articles,setArticles]=useState([]);
    const [shownArticles,setShownArticles]=useState([])


    useEffect(()=>{
        fetch(`http://127.0.0.1:4000/v1/articles`).then(res=>res.json()).then(data=>{
            setArticles(data);
        })
    },[])


    return (
       <>
       <TopBar/>
       <Navbar/>
       <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی مقاله ها",
            to: "articles/1",
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
                        shownArticles.map((article,index)=>(
                            <ArticleBox key={index} {...article}/>
                        ))
                    }
                   

              </div>
            </div>
          </div>

         <Pagination 
         items={articles}
         itemsCount={3}
         pathname='/articles'
         setShowItems={setShownArticles}

         />
        </div>
      </section>



       <Footer />
       </>
    );
};

export default Articles;