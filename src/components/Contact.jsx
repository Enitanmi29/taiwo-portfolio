import React from 'react'

const Contact = () => {
  return (
    <div className=" bg-body-tertiary">
      <div className="container py-5">
          <div className ='card  rounded bg-primary-subtle'>
            <div className='bg-info py-2'>
              <h1 className=" text-center">Contact Me: </h1>
              <div className="d-flex img-fluid justify-content-center">
                <img src="/IMG-T.jpg" 
                className="d-block mx-lg-auto img-fluid rounded-circle" 
                alt="my image"
                style={{width:"100px", height:"100px", objectFit:"fill"}}
                loading="lazy" />
              </div>
            </div>
            <div className='px-4'>
              <p className='py-1 text-primary'>Tel: <span className='text-dark'>07085544385.</span></p>
              <p className='py-1 text-primary'>Email: <span className='text-dark'> abidakuntaiwoenitan@gmail.com</span></p>
              <p className='py-1 text-primary'>Address: <span className='text-dark'>
                  Oworo, Lagos state, Nigeria.
                  </span>
              </p>
            </div>
            <div className='d-flex px-4'>
              <p draggable="true" className='btn btn-outline-dark '>
                <a href='https://github.com/Enitanmi29' className='text-decoration-none'>
                  Github   
                </a>
              </p>
              <p className='btn btn-outline-success ms-2 p'>
                <a href='https://wa.me/2347085544385' className='text-decoration-none'>Whatsapp</a>
              </p>
              <p className='btn btn-outline-primary ms-2 p'>
                <a href='https://www.linkedin.com/in/taiwo-abidakun-110bba191' className='text-decoration-none'>LinkedIn</a>
              </p>
          </div> 
        </div>
      </div>
    </div>
    
  )
}

export default Contact