import React from 'react'

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
  <div className="container-xl">
    
    <a className="navbar-brand" href="#">
      <h4>Grave Sites Management</h4>
    </a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarCollapse">
     
      <div className="navbar-nav mx-lg-auto">
        <a className="nav-item nav-link active" href="#" aria-current="page">Maintain</a>
        <a className="nav-item nav-link" href="#">Payments</a>
        <a className="nav-item nav-link" href="#">Reports</a>
      </div>
      
      <div className="navbar-nav ms-lg-4">
        <a className="nav-item nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a className="nav-item nav-link" href="#"><i class="fa-solid fa-gear"></i></a>
        <a className="nav-item nav-link" href="#"><i class="fa-regular fa-circle-question"></i></a>
        <a className="nav-item nav-link" href="#"></a>
      </div>
      
      <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
        <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
          Register
        </a>
      </div>
    </div>
  </div>
</nav>


</div>
  )
}

export default Header