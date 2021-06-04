import React,{useState,useEffect} from 'react';
import axios from "axios";

export default function Home() {

    const [students,setStudents]=useState([]);

    useEffect(()=>{

      function getStudents(){
        axios.get("http://localhost:8070/student/").then(res=>{
            console.log(res.data);
            setStudents(res.data);
        }).catch(err=>{
            console.log(err);
            
        })

      }
      getStudents();
        
    },[])

    
         function onDelete(id){
        axios.delete(`http://localhost:8070/student/delete/${id}`).then((res)=>{
            alert("Delete Successfully");
            axios.get("http://localhost:8070/student/").then(res=>{
              console.log(res.data);
              setStudents(res.data);
          }).catch(err=>{
              console.log(err);
              
          })
           
        })
  
    }

    

  
    return (
        <div className="container">
       
        <h2 className="text-center mb-4">All Students</h2>
             <table className="table">
               <thead>
                 
               <tr>
     <th scope="col">#</th>
     <th scope="col">Student Name</th>
     <th scope="col">Age</th>
     <th scope="col">Gender</th>
     <th scope="col">Action</th>
   </tr>
               </thead>
 
               <tbody>
                 {students.map((student,index)=>(
                   <tr>
                     <th scope="row">{index+1}</th>
                     <td>
                         <a href={`/get/${student._id}`} style={{textDecoration:'none'}}>
                             
                         {student.name}
                         </a>
                     </td>
                     <td>{student.age}</td>
                     <td>{student.gender}</td>
                     <td>
                       <a className="btn btn-warning" href={`/edit/${student._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
 
                       </a>
                       &nbsp;
                       <a className="btn btn-danger" href="#" onClick={()=>onDelete(student._id)}>
                         <i className="fas fa-trash-alt"></i>&nbsp;Delete
 
                       </a>
                     </td>
                   </tr>
                 ))}
               </tbody>
 
             </table>
 
             <button className="btn btn-success"><a href="/add"  style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
             
           </div>
    )
}
