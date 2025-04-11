import React, { useState } from 'react'
import { NavItem } from '../constants'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [input, setInput]=useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const validPages=['/', 'contact', 'projects']

        if (validPages.includes(input.toLowerCase())) {
            navigate(input.toLowerCase());      
        } else { 
            alert('page does not exist')
        }
    }

  return (
        <nav className="navbar navbar-expand-lg bg-dark text-white navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-success"  href="/">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {NavItem.map((prop,index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link text-white" aria-current="page" href={prop.link}>{prop.label}</a>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex" role="search" id='form' onSubmit={handleSubmit} >
                        <input className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={(e) => setInput(e.target.value)}
                            />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
        </div>
      </nav>
  )
}

export default Navbar