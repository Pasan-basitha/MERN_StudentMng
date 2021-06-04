import React,{useState} from 'react';
import axios from "axios";

export default function AddStudent(){

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");

    function sendData(e){
        e.preventDefault();
        
        const newStudent={
            name,
            age,
            gender
        }
        
        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
            alert("student added");
            setName("");
            setAge("");
            setGender("");
        }).catch((err)=>{
            alert(err);
        })
    }

    return(
        <div className="container">
            
            <form onSubmit={sendData}>
  <div class="mb-3"/>
    <label for="name" class="form-label">Student Name</label>
    <input type="text" class="form-control" id="name" placeholder="Eneter student name" 
    onChange={(e)=>{
        setName(e.target.value);
    }

    }/>
    <div/>
    
    <div class="mb-3"/>
    <label for="age" class="form-label">Student Age</label>
    <input type="text" class="form-control" id="age" placeholder="Eneter student age"
     onChange={(e)=>{
        setAge(e.target.value);
    }

    }/>
    <div/>

    <div class="mb-3"/>
    <label for="gender" class="form-label">Student Gender</label>
    <input type="text" class="form-control" id="gender" placeholder="Eneter student gender"
     onChange={(e)=>{
        setGender(e.target.value);
    }

    }/>
    <div/>
    
    
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
        
    )
}