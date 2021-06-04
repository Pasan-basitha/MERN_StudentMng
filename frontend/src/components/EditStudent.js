import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function EditStudent() {
    let history = useHistory();
    const { id } = useParams();
    const [student,setStudent]=useState({
        name:'',
        age:'',
        gender:''
     })
     const { name, age, gender } = student;

     const onInputChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value });
      };

      const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8070/student/update/${id}`, student);
        history.push("/");
       
      };

     useEffect(()=>{
       
        axios.get(`http://localhost:8070/student/get/${id}`).then(res=>{
            console.log(res.data.student);
            setStudent(res.data.student);
        }).catch(err=>{
            console.log(err);
            
        }) 
    },[])


    return (

        
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label for="Topic" class="form-label">Topic</label>
            <input
              type="text"
              className="form-control form-control-m"
              
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="description" class="form-label">Description</label>
            <input
              type="text"
              className="form-control form-control-m"
            
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="PostCategory" class="form-label">Post Category</label>
            <input
              type="text"
              className="form-control form-control-m"
             
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div>
        
         
          <button className="btn btn-warning btn-block">Update Post</button>
        </form>
      </div>
    </div>
    )
}
