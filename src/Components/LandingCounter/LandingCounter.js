import React, { useEffect, useState } from 'react';

const LandingCounter = ({count}) => {
    const [courseCounter,setCourseCounter]=useState(0);
    useEffect(()=>{
      let interval=setInterval(() => {
        setCourseCounter(prev=>prev+2)
      }, 10);
      if(courseCounter>=count){
        clearInterval(interval);
      }
      return ()=>clearInterval(interval);
    },[courseCounter])
    return (
        <span className="landing-status__count">{courseCounter}</span>
    );
};

export default LandingCounter;