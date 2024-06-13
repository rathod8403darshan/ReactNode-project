import React, { useEffect, useState } from 'react'
import HocCompo from './HocCompo'
import { useDispatch, useSelector } from 'react-redux';
import { addUserData, UpdateUser } from '../Redux/Action/userAction';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const FormData1 = () => {
  const [obj, setobj] = useState({hobby:[]})
  
  const [blank, setBlank] = useState({name:"",email:"",password:"",image:"",hobby:[]})
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
const navigate = useNavigate(); 
const param = useParams()

 
    console.log(state.UserReducer.userArr);

    useEffect(()=> {
        if(param.id){
          const user =  state.UserReducer.userArr.find((x)=> x._id === param.id)
          console.log(user);
          setobj({...user,hobby:user.hobby.split(",")})
        }
    },[param.id])

 
  const GetDataInput  = (e)=>{
    console.log(e.target.name);
    if(e.target.name  ===  "image"){
      obj[e.target.name] = e.target.files[0];
      blank[e.target.name]= ""
      e.target.value = ""
    }else if(e.target.type === "checkbox"){
        if(e.target.checked){
          obj.hobby.push(e.target.value)
        }
        else{
          obj.hobby = obj.hobby.filter((x)=> x !== e.target.value);
        }
    }
    else{
      obj[e.target.name]= e.target.value
      blank[e.target.name]= ""
    }

      setobj({...obj})
      setBlank({...blank})
  }

  

  const submitButton = ()=>{
    const formData = new FormData();
    formData.append("name", obj.name);
    formData.append("email", obj.email);
    formData.append("password", obj.password);
    formData.append("image", obj.image);
    formData.append("gender", obj.gender);
    formData.append("contry", obj.contry);
    formData.append("hobby", obj.hobby.join(","));
    
    if(param.id){
      
      // formData.append("_id",param.id);
      dispatch(UpdateUser(param.id,formData))
    }
    else{
      dispatch(addUserData(formData))
    }


     
   
    setBlank({...blank})
    setobj({...blank})
  }
  return (
      <div className=" w-[70%] p-5 mx-auto shadow-sm mainForm  border-white rounded-sm circle-lg  bg-[rgba(255, 255, 255, 0.6)] text-black border-2 bg-gray-300" style={{	backdropFilter:"blur(100px)"}}>
          <form action="" className='w-full shadow-2 '>
              <div className='w-full mb-2'>
                  <label htmlFor="" className='w-full mb-1'>Name :</label>
                  <input type="text" name='name' className='w-full mb-1 outline-0 p-1 bg-transparent border-2 border-white' value={obj.name} onChange={GetDataInput}  />
              </div>
              <div className='w-full mb-2'>
                  <label htmlFor="" className='w-full mb-1'>Email :</label>
                  <input type="email" name='email' className='w-full mb-1 outline-0 p-1 bg-transparent border-2 border-white' value={obj.email} onChange={GetDataInput}  />
              </div>
              <div className='w-full mb-2'>
                  <label htmlFor="" className='w-full mb-1'>Password :</label>
                  <input type="password" name='password' className='w-full mb-1 outline-0 p-1 bg-transparent border-2 border-white' value={obj.password} onChange={GetDataInput}  />
              </div>
             

              <div className='w-full mb-2 '>
                  <label htmlFor="" className=''>Contry :</label>
                  <select name="contry" id="" onChange={GetDataInput} className='border-0 text-black ms-4 rounded-sm outline-0'>
                     <option >----- Select Contry -----</option>
                     <option value="india" selected={obj.contry === "india"}>India</option>
                     <option value="usa" selected={obj.contry === "usa"}>USA</option>
                     <option value="austrlia" selected={obj.contry === "austrlia"}>Austrlia</option>
                     <option value="china" selected={obj.contry === "china"}>China</option>
                     <option value="russia" selected={obj.contry === "russia"}>Russia</option>
                     <option value="canada" selected={obj.contry === "canada"}>Canada</option>
                     <option value="bangladesh" selected={obj.contry === "bangladesh"}>Bangladesh</option>
                  </select>
              </div>

              <div className='w-full mb-2'>
                  <label htmlFor="" className='w-full mb-1'>Gender :</label>
                  <input type="radio" name='gender' value={"male"} className='mb-1 ms-2 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  checked={obj.gender === "male"}/> Male
                  <input type="radio" name='gender' value={"female"} className='mb-1 ms-2 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  checked={obj.gender === "female"}/> Female
                  <input type="radio" name='gender' value={"other"} className='mb-1 ms-2 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  checked={obj.gender === "other"}/> Other
              </div>

              <div className='w-full mb-2'>
                  <label htmlFor="" className='w-full mb-1'>Hobby :</label>
                  <input type="checkbox" name="" value='Khokho' checked={obj.hobby.includes("Khokho")} className='mb-1 ms-3 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  /> Khokho
                  <input type="checkbox" name="" value='Cricket' checked={obj.hobby.includes("Cricket")} className='mb-1 ms-3 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  /> Cricket
                  <input type="checkbox" name="" value='Kabbadi' checked={obj.hobby.includes("Kabbadi")} className='mb-1 ms-3 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  /> Kabbadi
                  <input type="checkbox" name="" value='Basketball' checked={obj.hobby.includes("Basketball")} className='mb-1 ms-3 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  /> Basketball
              </div>
              <div className='w-full mb-2'>
                  <label htmlFor="" className='w-full mb-1'>Image :</label>
                  <input type="file" name='image' className='ms-3 mb-1 outline-0 p-1 bg-transparent border-2 border-white' onChange={GetDataInput}  />
              </div>

              <div className='w-full mt-6'>
                  <button className='bg-blue-600 border-2 py-2 px-10 rounded-sm' type='button' onClick={submitButton}>Enter Data</button>
              </div>
             
          </form>
      </div>
  );
}

export default HocCompo(FormData1)