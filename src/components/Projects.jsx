import React from 'react'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="container">
          <div className="row py-4 d-block">
              <p className='btn btn-outline-primary col-3 ms-3 ms-lg-0'><Link to="https://creatorssss.vercel.app/" className='text-dark text-decoration-none'>Creators app</Link></p>
              <img  src="/Screenshot 2025-02-06 195642.png" className="col-lg-8"/>
          </div>
          <div className="row py-4 d-block">
              <p className='btn btn-outline-primary col-3 ms-3 ms-lg-0'><Link to="https://unitedfoundation.vercel.app/" className='text-dark text-decoration-none'> UFLCD website</Link></p>
              <img  src="/Screenshot 2025-02-06 195755.png" className="col-lg-8"/>
          </div>
          <div className="row py-4 d-block">
              <p className='btn btn-outline-primary col-3 ms-3 ms-lg-0'><Link to="https://cargocontractors.vercel.app/" className='text-dark text-decoration-none'>Cargo Contractors</Link></p>
              <img  src="/Screenshot cargo.jpg" className="col-lg-8"/>
          </div>
          <div className="row py-4 d-block">
              <p className='btn btn-outline-primary col-3 ms-3 ms-lg-0'><Link to="https://valon.my.canva.site/" className='text-dark text-decoration-none' > Valon Design</Link></p>
              <img  src="/Screenshot 2025-02-06 195856.png" className="col-lg-8"/>
          </div>
      </div>
    </div>
  )
}

export default Projects