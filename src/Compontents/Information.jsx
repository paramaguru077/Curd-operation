import React, { useState } from 'react'
import '../Styles/Information.css'
const Information = ({users,setUser,setUserInfo,setEditIndex}) => {
 
  const handleDelete =(i)=>{
    const newUsers = users.filter((_,index)=> index!==i);
    setUser(newUsers);
      
  }
  const handleEdit =(users,i)=>{
    setUserInfo(users);
    setEditIndex(i);

  }
  return (
    <div className='dataTable'>
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
              <td>Phone</td>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {users.map((data,index)=>{
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                    <button onClick={()=> handleEdit(data,index)} >Edit</button>
                    <button  onClick={()=> handleDelete(index)}>Delete</button>
                </td>

              </tr>
            )
           })}
          </tbody>
        </table>
      </div>
  )
}

export default Information