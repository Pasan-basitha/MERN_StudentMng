import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

export default function StudentDetails() {

    const [student,setStudent]=useState({
       name:'',
       age:'',
       gender:''
    })
    const { id } = useParams();

    useEffect(()=>{
       
        axios.get(`http://localhost:8070/student/get/${id}`).then(res=>{
            console.log(res.data.student);
            setStudent(res.data.student);
        }).catch(err=>{
            console.log(err);
            
        }) 
    },[])
    
    return (
      
        

        <div style={{marginTop:'20px'}}>
             <hr/>

        <d1 className="row">
            <dt className="col-sm-3">Name</dt>
            <dd className="col-sm-9">{student.name}</dd>

            <dt className="col-sm-3">Age</dt>
            <dd className="col-sm-9">{student.age}</dd>

            <dt className="col-sm-3">Gender</dt>
            <dd className="col-sm-9">{student.gender}</dd>
        </d1>
    </div>

         
     
    
    )
}
