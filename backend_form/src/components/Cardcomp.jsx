import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Cardcomp() {
  let[stddata,setstddata]=useState([])
  async function getdata(){
    let response= await axios.get("http q ://localhost:5000/dis")
    console.log(response.data);
    setstddata(response.data)
  }
  
  let del=""
  function setdelid(e){
console.log(e.target.id);
  del=e.target.id

  }
  
  let [courses,setcourses]=useState([])
  let [gendr,setgndr]=useState("")
  let [run,setrun]=useState(true)
useEffect(() => {
    async function getdata() {
        try {
            const response = await axios.get("http://localhost:5000/dis", {
                params: {
                    filter: courses.length > 0 ? courses.join(",") : undefined,
                    gender: gendr || undefined,
                    // age: ageState || undefined
                }
            });
            setstddata(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    getdata();
}, [run]); 


  async function deleteitem(e){
    console.log(e.target.id);
    let response= await axios.delete(`http://localhost:5000/delete?q=${del}`)
    console.log(response);
    getdata()
    
  }

  // filter ------------------------------------------------

    let [formData, setFormData] = useState({
      stdname: '',
      stdmail:'',
      stdcourse:'',
      stdnumber:'',
      stdurl:'',
      stdgender:'',
      stdage:''
    })

    
  // data science data analytics FSD
      function handlename(e) {        
     setFormData({...formData,[e.target.name]:e.target.value})
      console.log(e.target.name,",",e.target.value);
      setgndr(e.target.value)
      // console.log(gendr);
      
      
    }

  //   function handlecourse(e){

  //             console.log(e.target.checked);
  //     if(courses.includes(e.target.value)){
  //       const valueToRemove = e.target.value;
  //       const index = courses.indexOf(valueToRemove);
  //       if (index > -1) { // Only splice if the item is found
  // setcourses(courses.splice(index, 1)); // Removes one item at the found index
  //         }
  //          console.log("removed",courses);
  //          e.target.value=""
  //     }
  //     else{
  //       if(e.target.checked){
  //         courses.push(e.target.value)
  //         console.log("added:",courses);
  //       }
  //     }
        
  //   }

  function handlecourse(e) {
  const { value, checked } = e.target;

  if (checked) {
    // Add course: Create a NEW array with the new value
    setcourses([...courses, value]);
  } else {
    // Remove course: Create a NEW array without that value
    setcourses(courses.filter((course) => course !== value));
  }
}



    function runfilt (){
          if(run){
            setrun(false)
          }
          else{ 
            setrun(true)
          }
    }




    return (
<div className="container py-5">

{/* FILTER SECTION */}

<div className="card shadow-sm border-0 mb-5">
<div className="card-body">

<h4 className="mb-4">
<i className="bi bi-funnel-fill me-2"></i>
Filter Students
</h4>

<div className="row">

{/* Gender Filter */}

<div className="col-md-4">

<label className="form-label fw-semibold">Gender</label>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdgender" value="Male" onChange={handlename}/>
<label className="form-check-label">Male</label>
</div>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdgender" value="Female" onChange={handlename}/>
<label className="form-check-label">Female</label>
</div>

</div>

{/* Course Filter */}

<div className="col-md-4">

<label className="form-label fw-semibold">Courses</label>

<div className="form-check">
<input className="form-check-input" type="checkbox" onClick={handlecourse} value="FSD"/>
<label className="form-check-label">Full Stack Development</label>
</div>

<div className="form-check">
<input className="form-check-input" type="checkbox" onClick={handlecourse} value="Data Analytics"/>
<label className="form-check-label">Data Analytics</label>
</div>

<div className="form-check">
<input className="form-check-input" type="checkbox" onClick={handlecourse} value="Data Science"/>
<label className="form-check-label">Data Science</label>
</div>

</div>

{/* Filter Button */}

<div className="col-md-4 d-flex align-items-end">

<button className="btn btn-primary w-100" onClick={runfilt}>
<i className="bi bi-search me-2"></i>
Apply Filter
</button>

</div>

</div>

</div>
</div>

{/* STUDENT CARDS */}

<div className="row g-4">

{
stddata.map((cv)=>{

return(

<div key={cv._id} className="col-lg-3 col-md-4 col-sm-6">

<div className="card student-card shadow-sm border-0 h-100">

<img
src={cv.stdurl}
className="card-img-top student-img"
alt="student"
/>

<div className="card-body">

<h5 className="card-title fw-bold mb-2">
<i className="bi bi-person-circle me-2"></i>
{cv.stdname}
</h5>

<p className="text-muted mb-1">
<i className="bi bi-envelope me-2"></i>
{cv.stdmail}
</p>

<p className="mb-1">
<i className="bi bi-person me-2"></i>
Age: {cv.stdage}
</p>

<p className="mb-1">
<i className="bi bi-gender-ambiguous me-2"></i>
{cv.stdgender}
</p>

<p className="mb-1">
<i className="bi bi-mortarboard me-2"></i>
{cv.stdcourse}
</p>

<p className="mb-2">
<i className="bi bi-telephone me-2"></i>
{cv.stdnumber}
</p>

<div className="d-flex justify-content-between mt-3">

<Link to={`/edit/${cv._id}`}>
<button className="btn btn-outline-primary btn-sm">
<i className="bi bi-pencil-square me-1"></i>
Edit
</button>
</Link>

<button
type="button"
onClick={setdelid}
id={cv._id}
className="btn btn-outline-danger btn-sm"
data-bs-toggle="modal"
data-bs-target={`#modal-${cv._id}`}
>
<i className="bi bi-trash me-1"></i>
Delete
</button>

</div>

</div>

</div>

{/* DELETE MODAL */}

<div
className="modal fade"
id={`modal-${cv._id}`}
tabIndex="-1"
>

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5 className="modal-title">
<i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
Confirm Delete
</h5>

<button
type="button"
className="btn-close"
data-bs-dismiss="modal">
</button>

</div>

<div className="modal-body text-center">

<img
src={cv.stdurl}
className="img-fluid rounded mb-3"
style={{height:"200px",objectFit:"cover"}}
/>

<h5>{cv.stdname}</h5>
<p className="text-muted">{cv.stdmail}</p>
<p>{cv.stdcourse}</p>

</div>

<div className="modal-footer">

<button
className="btn btn-secondary"
data-bs-dismiss="modal">
Cancel
</button>

<button
className="btn btn-danger"
data-bs-dismiss="modal"
onClick={deleteitem}>
Delete
</button>

</div>

</div>

</div>

</div>

</div>

)

})
}

</div>

</div>
)

    // --------------------------------------------


//   return (
//     <div>

//       <div className='pb-5'>
//         <h1>Filter</h1>
//                 <label>Gender:
//           <br/>
//             <input type="radio" name="stdgender" onChange={handlename} id="male" value="Male" />
//             <label htmlFor="male"className='me-3' >Male</label>
//             <input type="radio" name="stdgender" onChange={handlename} id="female" value="Female" />
//             <label htmlFor="female">Female</label>
//             <br/>        
//         </label>
//         <button className='btn btn-primary' onClick={runfilt} >filter</button>
//           <br />

//           {/*  course filter */}
//   <input type="checkbox" id="fsdchk" onClick={handlecourse} value="FSD"/>
//   <label htmlFor="fsdchk"> FSD</label><br/>
//   <input type="checkbox" id="dataanalyticschk" onClick={handlecourse} value="Data Analytics"/>
//   <label htmlFor="dataanalyticschk">data analytics</label><br/>
//   <input type="checkbox" id="datasciencechk" onClick={handlecourse} value="Data Science"/>
//   <label htmlFor="datasciencechk"> data science</label><br/>



//       </div>



// <div className='d-flex flex-wrap gap-3 justify-content-center'>
// {
//   stddata.map((cv)=>{
//       return(  <div key={cv._id} className="card rounded-4" style={{"width": "16rem"}}>
//           <img src={cv.stdurl} className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Name:{cv.stdname}</h5>
//             <h5 className="card-title">Mail:{cv.stdmail}</h5>
//             <h5 className="card-title">Age:{cv.stdage}</h5>
//             <h5 className="card-title">Gender:{cv.stdgender}</h5>
//             <h5 className="card-title">Course:{cv.stdcourse}</h5>
//             <h5 className="card-title">phone number:{cv.stdnumber}</h5>
//             <h5 className="card-title">ID:{cv._id}</h5>
//             <Link to={`/edit/${cv._id}`}>
//             <button className='btn btn-primary '>Edit</button>
//             </Link>
//             {/*  Button trigger modal  */}
//             <button type="button" onClick={setdelid} id={cv._id} className="btn btn-danger ms-4" data-bs-toggle="modal" data-bs-target={`#modal-${cv._id}`}>
//               Delete
//             </button>
//           {/* modal ----------------------- */}
//             <div className="modal fade" id={`modal-${cv._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h1 className="modal-title fs-5" id="exampleModalLabel">Conform delete</h1>
//                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                   </div>
//                   <div className="modal-body">
//                     <img src={cv.stdurl} className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                     <h5 className="card-title">Name:{cv.stdname}</h5>
//                     <h5 className="card-title">Mail:{cv.stdmail}</h5>
//                     <h5 className="card-title">Course:{cv.stdcourse}</h5>
//                     <h5 className="card-title">phone number:{cv.stdnumber}</h5>
//                     <h5 className="card-title">ID:{cv._id}</h5>
//                     </div>
//                   </div>
//                   <div className="modal-footer">
//                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                     <button type="button" className="btn btn-danger" data-bs-dismiss="modal"  onClick={deleteitem}  >Delete</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* --------------------------- */}
//           </div>
//       </div>
      
    
    
//     )
//   })
// }
// </div>

//     </div>
//   )
}
