import React from "react";
import banner from "../src/Images/home.jpeg";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="my-3">COVID WELLNESS <br/><strong className="brand-name">CAMPAING</strong></h1>
                                    <h2>GET FREE SESSION</h2>
                                    <div className="mt-3">
                                        <NavLink to="/home" className="btn-get-started" role="button">REGISTER NOW</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={banner} className="img-fluid animated" alt="home img" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
        </>
    );
};


export default Home;