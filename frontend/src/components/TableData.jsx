import React, { useEffect } from "react";
import HocCompo from "./HocCompo";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, GetUserData } from "../Redux/Action/userAction";
import { Link } from "react-router-dom";

const TableData = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetUserData());
    }, []);
    console.log(state.UserReducer.userArr);


    const deleteData = (id)=> {
        dispatch(DeleteUser(id));
    }
    return (
        <div className=" mx-auto shadow-lg border-2 circle-lg text-white rounded-md" style={{	backdropFilter:"blur(150px)"}}>
            <table className="w-full    mx-auto">
                <thead className="p-5  bg-gray-800">
                    <tr>
                        <th  style={{padding:"10px"}}>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Contry</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.UserReducer?.userArr?.map((x, i) => {
                        return (
                            <tr className="text-center " key={i} >
                                <td className="p-[10px]"><img src={`http://localhost:7000/uploads/${x.image}`} alt="" className="h-[50%] w-[60px]"/></td>
                                <td>{x.name}</td>
                                <td>{x.email}</td>  
                                <td>{x.password}</td>
                                <td>{x.contry}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobby}</td>
                                <td>
                                    <button onClick={()=>deleteData(x._id)} className="py-1 rounded-md px-6 bg-gray-800 me-2 hover:bg-gray-300 hover:text-black">Delete</button>
                                    <Link to={`/form/${x._id}`} className="py-1 rounded-md   px-6 bg-gray-300 text-black hover:bg-gray-800 hover:text-white ">Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default HocCompo(TableData);
