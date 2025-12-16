import React from 'react';
import UserDetails from "./UserDetails";


const userInfo = {
  username: "khalandar",
  email: "khalandar@gmail.com",
  phone: "9000484101",
  city: "Mumbai",
}

const Footer = () => {

  return (<div>
    <h1>Footer</h1>
    
    
    <UserDetails Username = {userInfo.username} Email = {userInfo.email} Phone = {userInfo.phone} City = {userInfo.city} />
    <UserDetails Username = {userInfo.username} Email = {userInfo.email}  City = {userInfo.city} />
    <UserDetails Username = {userInfo.username} Email = {userInfo.email} Phone = {userInfo.phone} City = {userInfo.city} />
    <UserDetails Username = {userInfo.username} Email = {userInfo.email} Phone = {userInfo.phone} City = {userInfo.city} />

    
  </div>
  );
};

export default Footer;