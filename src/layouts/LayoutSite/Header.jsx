import React from 'react'
import User from '../../assets/images/user.svg'
import Cart from '../../assets/images/cart.svg'
import {Link} from 'react-router-dom'
import Search from './Search'
import MainMenu from './MainMenu'
const Header = () => {
  return (
    <header>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="author" content="Untree.co"/>
    <link rel="shortcut icon" href="favicon.png"/>
  
    <meta name="description" content="" />
    <meta name="keywords" content="bootstrap, bootstrap4" />
  
          <link href="css/bootstrap.min.css" rel="stylesheet"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
          <link href="../css/tiny-slider.css" rel="stylesheet"/>
          <link href="../css/style.css" rel="stylesheet"/>
          <title>Furni Free Bootstrap 5 Template for Furniture and Interior Design Websites by Untree.co </title>
          <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
    
     			<div class="container">
     				<a class="navbar-brand" href="/">Furni<span>.</span></a>
    
     				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
     					<span class="navbar-toggler-icon"></span>
     				</button>
					<Search/>
     				<div class="collapse navbar-collapse" id="navbarsFurni">		
              			<MainMenu/>
     					<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
     						<li><a class="nav-link" href="/login"><img src={User}/></a></li>
     						<li><a class="nav-link" href="/cart"><img src={Cart}/></a></li>
     					</ul>
     				</div>
					
     			</div>
                    
     		</nav>
			    </header>
  )
}

export default Header
 