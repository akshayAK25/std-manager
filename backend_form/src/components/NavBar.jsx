

import React from 'react'
import { Link,NavLink } from 'react-router-dom'
export default function NavBar() {


return (
<nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">

<div className="container">

<Link className="navbar-brand d-flex align-items-center" to="/">
<i className="bi bi-mortarboard-fill me-2"></i>
Student Manager
</Link>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-3">

<li className="nav-item">
<NavLink className="nav-link" to="/form">
<i className="bi bi-person-plus me-1"></i>
Add Student
</NavLink>
</li>

<li className="nav-item">
<NavLink className="nav-link" to="/dis">
<i className="bi bi-people me-1"></i>
Students
</NavLink>
</li>

</ul>

<form className="d-flex ms-auto">

<input
className="form-control me-2"
type="search"
placeholder="Search students"
/>

<button className="btn btn-outline-light">
<i className="bi bi-search"></i>
</button>

</form>

</div>

</div>

</nav>
)
  // old ---------------------------------

//   return (
//     <>
// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link to='/form' className="nav-link active" >Form</Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/dis' className="nav-link active" >Dispaly</Link>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//     </>
//   )




}
