import React from "react";
import "./ragister.css";
import { Link } from "react-router-dom";

export const RagisterForm = () => {
    return (
        <div id="mainRagister">
            <div className="container">
                <header>
                    <h1>
                        <a href="/">
                            <img
                                src="http://tfgms.com/sandbox/dailyui/logo-1.png"
                                alt="Authentic Collection"
                            />
                        </a>
                    </h1>
                </header>
                <h1 className="text-center fs-1" style={{fontSize:'40px'}}>Register</h1>
                <form className="registration-form">
                    <label className="col-one-half">
                        <span className="label-text">userName</span>
                        <input type="text" name="firstName" />
                    </label>
                    <label className="col-one-half">
                        <span className="label-text">City</span>
                       <select name="" id="" className="w-full outline-none" style={{fontSize:"17px",backgroundColor:"rgba(255, 255, 255, 0.6)"}}>
                            <option value="surat">Surat</option>
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="vadodara">Vadodara</option>
                            <option value="anand">Anand</option>
                            <option value="botad" selected>Botad</option>
                            <option value="rajkot">Rajkot</option>
                       </select>
                    </label>
                    <label>
                        <span className="label-text">Email</span>
                        <input type="text" name="email" />
                    </label>
                    <label>
                        <span className="label-text">Number</span>
                        <input type="text" name="email" />
                    </label>
                    <label className="password">
                        <span className="label-text">Password</span>
                        <button
                            className="toggle-visibility"
                            title="toggle password visibility"
                            tabindex="-1"
                        >
                            <span className="glyphicon glyphicon-eye-close"></span>
                        </button>
                        <input type="password" name="password" />
                    </label>
                    <label className="gap-5 pb-5" style={{ display: "flex" }}>
                        <span className="label-text w-100">Image: </span>
                        <input
                            type="file"
                            name=""
                            className={"fs-6 mb-2 mt-[-4px] w-[30px]"}
                            style={{ fontSize: "13px" ,width:"90px"}}
                        />
                        <span className="label-text w-100">Gender: </span>
                        <div className="flex gap-3 pt-[-30px] item-center justify-center"    style={{fontSize:"12px"}}>
                            <input
                                type="radio"
                                name=""
                                className={"fs-6  mt-[-10px]"}
                                style={{fontSize:"10px"}}
                                
                            /> Male
                            <input
                                type="radio"
                                name=""
                                className={"fs-6  mt-[-10px]"}
                                style={{fontSize:"10px"}}
                                
                            /> Female
                           
                        </div>
                    </label>
                    <div className="flex justify-between mt-3">
                        <Link to={"/"} className="border-gray-600 hover:bg-gray-600 hover:text-white border-2 py-2 px-4 rounded-md" name="register">
                        Register
                        </Link>
                        <Link to={"/login"} className="border-gray-600 hover:bg-gray-600 hover:text-white border-2 py-2 px-4 rounded-md" name="register">
                           Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>

        //   mobile: {
        //     type: Number,
        //     required: true,

        //   },
        //   city : {
        //     type: String,
        //     required: true,

        //   },
    );
};
