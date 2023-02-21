import React from "react";
import './navbar.css'
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Testimonials from './testmonials/Testimonials'



const Navbar = () => {
    return (
        <>
        <Sidebar />
        <main className="main">
            <Home />
            <About />
            <Services />
            <Resume />
            <Portfolio />
            <Testimonials />
            <Blog />
        </main>
        </>
    )
}
export default Navbar;