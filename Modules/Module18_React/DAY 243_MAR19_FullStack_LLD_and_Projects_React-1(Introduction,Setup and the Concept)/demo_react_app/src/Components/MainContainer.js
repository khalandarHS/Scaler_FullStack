import React from 'react';
//import '../App.css';
import MainContainerChild from './MainContainerChild';

const MainContainer = () => {
  
  const HeadingName = "Main Container";
  
  return (<div 
    style={{
    display: "flex",
    height: "200px",
    backgroundColor: "orange",
    width: "100%",
   }}
   >
    

    <h1>{HeadingName}</h1>
    {10+20}
   
   <MainContainerChild childData = {"1 ,2 , 3 , 4 , 5"}/>

    </div>);
  
};

export default MainContainer;