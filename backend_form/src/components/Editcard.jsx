import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import url from '../../Url'
export default function Editcard() {
    const { id } = useParams();
  let [formData, setFormData] = useState({
    stdname: '',
    stdmail:'',
    stdcourse:'',
    stdnumber:'',
    stdurl:'',
    stdgender:'',
    stdage:''
  })

let [olddata,setolddata]=useState(({}))
  useEffect(()=>{
      
      async function ogfetch(){
    
          let ogdata= await axios.get(`${url}/edit?q=${id}`,formData)
          let data
          data=ogdata.data;
          console.log(delete data.__v);
        //   console.log(delete data._id);
          console.log("old",data);
          setFormData(data);
          setolddata(data)
        }
        ogfetch()



  },[])

      

   function handlename(e) {
       setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    async function handleSubmit(event) {
      let ogdata= await axios.patch(`http://localhost:5000/edit?q=${id}`,formData)
    event.preventDefault()
    console.log(formData);
    setolddata(ogdata)
    
  }

  return (

<div className="container py-5">

<div className="row justify-content-center">

<div className="col-lg-6">

<div className="card form-card">

<div className="card-header">
<i className="bi bi-pencil-square me-2"></i>
Edit Student
</div>

<div className="card-body">

<form onSubmit={handleSubmit}>

<div className="mb-3">
<label className="form-label">Name</label>
<input className="form-control" name="stdname" value={formData.stdname} onChange={handlename}/>
</div>

<div className="mb-3">
<label className="form-label">Email</label>
<input className="form-control" name="stdmail" value={formData.stdmail} onChange={handlename}/>
</div>

<div className="mb-3">
<label className="form-label">Age</label>
<input className="form-control" name="stdage" value={formData.stdage} onChange={handlename}/>
</div>

<div className="mb-3">
<label className="form-label">Phone</label>
<input className="form-control" name="stdnumber" value={formData.stdnumber} onChange={handlename}/>
</div>

<div className="mb-3">
<label className="form-label">Image URL</label>
<input className="form-control" name="stdurl" value={formData.stdurl} onChange={handlename}/>
</div>

<button className="btn btn-primary w-100">
<i className="bi bi-save me-2"></i>
Update Student
</button>

</form>

</div>

</div>

</div>

</div>

</div>

)



// ----------------------------
  return (
    <div>
<h4 className="mb-0">
<i className="bi bi-pencil-square me-2"></i>
Edit Student
</h4>

      <form onSubmit={handleSubmit} className='container mx-auto'>
        <label>
          Name:<input type="text" name="stdname" onChange={handlename}  value={formData.stdname}  />
        </label>
           <br />
        <label>
          mail:<input type="text" name="stdmail" onChange={handlename} value={formData.stdmail}  />
        </label>
         <br />
        <label>
          age:<input type="text" name="stdage" onChange={handlename} value={formData.stdage}  />
        </label>
        <br />
        <label>Gender:
          <br />
            <input type="radio" name="stdgender" onChange={handlename} id="Male" value="Male"checked={formData.stdgender === "Male"} />
            <label htmlFor="fsd"className='me-3' >Male</label>
            <input type="radio" name="stdgender" onChange={handlename} id="Female" value="Female"checked={formData.stdgender === "Female"} />
            <label htmlFor="fsd">Female</label>
            <br/>        
        </label>

          <br />
        <label>
          number:<input type="text" name="stdnumber" onChange={handlename} value={formData.stdnumber}  />
        </label> 
                 <br />
        <label>
          image:<input type="text" name="stdurl" onChange={handlename} value={formData.stdurl}  />
        </label>
           <br />

{/* course select-------------------- */}
          <label htmlFor="">Course:</label>
          <br />
            <input type="radio" name="stdcourse" onChange={handlename} id="FSD" value="FSD"  checked={formData.stdcourse === "FSD"}  />
            <label htmlFor="fsd">FSD</label>
            <br/>
            <input type="radio" name="stdcourse" onChange={handlename} id="data analytics" value="Data Analytics"  checked={formData.stdcourse === "Data Analytics"}  />
            <label htmlFor="fsd">Data Analytics</label>
            <br/>        
            <input type="radio" name="stdcourse" onChange={handlename} id="Data science" value="data science"  checked={formData.stdcourse === "Data Science"} />
            <label htmlFor="fsd">Data science</label>
{/* -------------------------------- */}
              <br/>
              <button type="submit" className='btn btn-primary'>
        {/* <input type="submit" value="Submit" /> */}
        submit
              </button>
      </form>




<div className='cards'>
<div className='d-flex flex-wrap gap-3 justify-content-center'>

    <div key={olddata.stdname} className="card rounded-4" style={{"width": "16rem"}}>
          <img src={olddata.stdurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Name:{olddata.stdname}</h5>
            <h5 className="card-title">Mail:{olddata.stdmail}</h5>
            <h5 className="card-title">Course:{olddata.stdcourse}</h5>
            <h5 className="card-title">phone number:{olddata.stdnumber}</h5>
            <h5 className="card-title">ID:{olddata._id}</h5>
          </div>
</div>

</div>




    </div>

    </div>
  )




}




