import React from 'react';

const UserDetails = ({Username , Email, Phone= "9000484101", City}) => {

  return (
    <div style = {{ margin : "20px"}}>
      <div>Name : {Username}</div>
      <div>Email: {Email}</div>
      <div>Phone : {Phone}</div>
      <div>City : {City}</div>
    </div>
  );
};

export default UserDetails;