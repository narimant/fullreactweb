import React, { useEffect, useState } from "react";

import "./Pagination.css";
import { Link, useParams } from "react-router-dom";

export default function Pagination({items,itemsCount,pathname,setShowItems}) {
const { page }=useParams();
const [pageCount,setPageCount]=useState(null);

useEffect(()=>{

  let endIndex=itemsCount*page;
  let startEndex=endIndex-itemsCount;
  let paginatedItems=items.slice(startEndex,endIndex);
  setShowItems(paginatedItems);
  let pagesNumber=Math.ceil(items.length/itemsCount);
  setPageCount(pagesNumber)

},[page,items])

  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
       
        {
            Array(pageCount).fill(0).map((item,index)=>(
            <li className='courses__pagination-item'  key={index}>
          <Link to={`${pathname}/${index+1}`} className={`courses__pagination-link ${page==index+1 ? 'courses__pagination-link--active' : ''}` }>
              {index+1}
          </Link>
        </li>
            ))
        }
       
        

       
      </ul>
    </div>
  );
}
