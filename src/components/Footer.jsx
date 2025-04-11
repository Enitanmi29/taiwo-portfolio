import React from 'react'

const Footer = () => {
  return (
    <div className="container">
        <footer className="py-3">
            <hr/>
            <div className='d-flex g-2 justify-content-center my-4'>
              <a href="/projects" className='btn btn-dark me-2'>Past projects</a>
              <a href="/contact" className='btn btn-dark me-2'>Contact me</a> 
              <a href="https://github.com/Enitanmi29" className='btn btn-dark me-2'>Github</a>     
            </div>
            <p className="text-center text-body-secondary">© {new Date().getFullYear()} Copyright</p>
        </footer>
    </div>
  )
}

export default Footer