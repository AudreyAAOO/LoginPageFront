import React from 'react';
import "../../assets/css/home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container_home">Home

      <Link to={'/login'}>LOGIN HERE</Link>
      <Link to={'/signup'}>GO Form with Formik</Link>

    </div>
  )
}


export default Home