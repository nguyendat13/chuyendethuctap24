import React from 'react'
import Header from '../LayoutSite/Header'
import Footer from '../LayoutSite/Footer'
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../css/style.css';
import '../../css/tiny-slider.css';

const LayoutSite = () => {
  return (
	<div>
		<div><Header/></div>
		<div><Outlet/></div>
	  	<div><Footer/></div>
		
	</div>
  )
}

export default LayoutSite
