import React, {useEffect, useState} from 'react'
import Information from './Information';
import '../Styles/UserDetails.css'
const UserDetails = () => {
    const initalValue={
        name:"",
        age:"",
        email:"",
        phone:""
      }
      const[users,setUser]= useState([]);
      const[userInfo,setUserInfo]= useState(initalValue);
      const[editIndex,setEditIndex]=useState(null);

      useEffect(()=>{
        if(users.length>0){
          localStorage.setItem("users",JSON.stringify(users));
        }
      },[users])// used to store users data

      useEffect(()=>{
        const savedData =localStorage.getItem('users');
        if(savedData){
          setUser(JSON.parse(savedData));
        }
      },[]);// used to retrive 
    
      const handleChanges=(e)=>{
        const{name,value}=e.target;
        setUserInfo((currentData)=>(
         { ...currentData,[name]:value}
        )
        )
    
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        if(editIndex!==null){
          const updatedUsers = users.map((user,index)=>
            index===editIndex ? userInfo:user
            
          );
          setUser(updatedUsers);
          setEditIndex(null);

        } 
        else{
          setUser((prevUser)=> [...prevUser,userInfo]);

        }  
        
        setUserInfo(initalValue);
      }
    return (
        <div className='container'>
           <h1>{editIndex !== null ? "Edit User Details" : "Enter Your Details"}</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Enter Your Name'
            name='name'
            value={userInfo.name}
            onChange={handleChanges}
            required
              />
             <br />
             <input type="text" 
            placeholder='Enter Your age'
            name='age'
            value={userInfo.age}
            onChange={handleChanges}
            required
             />
             <br />
             <input type="text" 
            placeholder='Enter Your email'
            name='email'
            value={userInfo.email}
            onChange={handleChanges}
            required
             />
             <br />
             <input type="text" 
            placeholder='Enter Your phone'
            name='phone'
            onChange={handleChanges}
            value={userInfo.phone}
            required
             />
             <br />
             <button type='submit'>{editIndex!==null ? "Update": "Add" }</button>
    
          </form>
          {
            users.length>0 &&  <Information users={users} setUser={setUser} setUserInfo={setUserInfo} setEditIndex={setEditIndex} />
          }
        
    
        </div>
      )
}

export default UserDetails
