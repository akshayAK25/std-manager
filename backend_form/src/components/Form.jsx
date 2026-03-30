import React, { use } from 'react'
import { useState } from 'react'
import axios from "axios"
export default function Form() {
  
  let [formData, setFormData] = useState({
    stdname: '',
    stdmail:'',
    stdcourse:'',
    stdnumber:'',
    stdurl:'',
    stdgender:'',
    stdage:''
  })
  

   function handlename(e) {
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(({...formData,[e.target.name]:e.target.value}));
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData);
    axios.post("http://localhost:5000/addemp",formData)
    
  }


return (

<div className="form-wrapper">

<div className="card form-card">

<div className="card-header">
<i className="bi bi-person-plus-fill me-2"></i>
Student Registration
</div>

<div className="card-body">

<form onSubmit={handleSubmit}>

<div className="row">

<div className="col-md-6 mb-3">
<label className="form-label">Name</label>
<input className="form-control" name="stdname" value={formData.stdname} onChange={handlename}/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Email</label>
<input className="form-control" name="stdmail" value={formData.stdmail} onChange={handlename}/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Age</label>
<input className="form-control" name="stdage" value={formData.stdage} onChange={handlename}/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Phone</label>
<input className="form-control" name="stdnumber" value={formData.stdnumber} onChange={handlename}/>
</div>

<div className="col-12 mb-3">
<label className="form-label">Image URL</label>
<input className="form-control" name="stdurl" value={formData.stdurl} onChange={handlename}/>
</div>

<div className="col-md-6 mb-3">

<label className="form-label">Gender</label>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdgender" value="Male" onChange={handlename}/>
<label className="form-check-label">Male</label>
</div>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdgender" value="Female" onChange={handlename}/>
<label className="form-check-label">Female</label>
</div>

</div>

<div className="col-md-6 mb-3">

<label className="form-label">Course</label>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdcourse" value="FSD" onChange={handlename}/>
<label className="form-check-label">Full Stack Development</label>
</div>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdcourse" value="data analytics" onChange={handlename}/>
<label className="form-check-label">Data Analytics</label>
</div>

<div className="form-check">
<input className="form-check-input" type="radio" name="stdcourse" value="data science" onChange={handlename}/>
<label className="form-check-label">Data Science</label>
</div>

</div>

</div>

<button className="btn btn-primary w-100 mt-3">
<i className="bi bi-save me-2"></i>
Submit Student
</button>

</form>

</div>

</div>

</div>

)

  // ------------------------------------------------------

//   return (
//     <div>
//       <h1>form</h1>
//       <form onSubmit={handleSubmit} className='container mx-auto'>
//         <label>
//           Name:<input type="text" name="stdname" onChange={handlename} value={formData.stdname}  />
//         </label>
//            <br />
//         <label>
//           mail:<input type="text" name="stdmail" onChange={handlename} value={formData.stdmail}  />
//         </label>
//           <br />
//         <label>
//           age:<input type="text" name="stdage" onChange={handlename} value={formData.stdage}  />
//         </label>
//           <br />
//         <label>Gender:
//           <br />
//             <input type="radio" name="stdgender" onChange={handlename} id="male" value="Male" />
//             <label htmlFor="male"className='me-3' >Male</label>
//             <input type="radio" name="stdgender" onChange={handlename} id="female" value="Female" />
//             <label htmlFor="female">Female</label>
//             <br/>        
//         </label>
//           <br />
//         <label>
//           number:<input type="text" name="stdnumber" onChange={handlename} value={formData.stdnumber}  />
//         </label> 
//                  <br />
//         <label>
//           image:<input type="text" name="stdurl" onChange={handlename} value={formData.stdurl}  />
//         </label>
//            <br />

// {/* course select-------------------- */}
//           <label htmlFor="">Course:</label>
//           <br />
//             <input type="radio" name="stdcourse" onChange={handlename} id="FSD" value="FSD" />
//             <label htmlFor="FSD">FSD</label>
//             <br/>
//             <input type="radio" name="stdcourse" onChange={handlename} id="data analytics" value="data analytics" />
//             <label htmlFor="data analytics">Data Analytics</label>
//             <br/>        
//             <input type="radio" name="stdcourse" onChange={handlename} id="data science" value="data science" />
//             <label htmlFor="data science">Data science</label>
// {/* -------------------------------- */}
//               <br/>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
}
