import React from 'react'
import { education, experience, skills } from '../constants'

const Home = () => {
  return (
    <div className="bg-body-tertiary">
       {/* <!-- Title section --> */}
        <div className="container col-xxl-8 px-4 py-5">

          <h1> Taiwo Abidakun</h1>
          
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="/MY IMAGE.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="my image" width="300" height="50" loading="lazy"/>
            </div>
            <div className="col-lg-6">
              <h2>Summary</h2>
              <hr/>
              <p style={{textAlign:'justify'}}>
                I am a passionate and self-driven Software/Frontend Engineer with a strong academic foundation and a commitment to building innovative solutions that create a positive impact in the workplace and society at large. With hands-on experience in software development, I possess excellent problem-solving abilities, strong interpersonal skills, and a collaborative spirit. I actively contribute to organizational growth by developing user-friendly and efficient digital products while continuously advancing my technical expertise. My ultimate goal is to leverage technology to solve real-world problems and make meaningful contributions to a better, more connected world.
                 </p>
            </div>
          </div>
                {/* About section */}
          <div className="row d-block d-lg-flex g-5">
            <div className="card col mx-lg-2" >
              {education.map((prop,index) => (
                <div className="mt-4" key={index}>
                  <h3 className="text-center justify-content-center">{prop.title}</h3>
                  <h6 className=" mb-2 text-body-secondary">{prop.subtitle}</h6>
                  <hr className=''/>
                  <p className="">
                    {prop.text}
                  </p>
                </div>
              ))}
            </div>
            <br/>
            

                
            <div className="card col mx-lg-2">
              {experience.map((prop,index)=>(
              <div className="mt-4" key={index}>
                <h3 className='text-center justify-content-center'>{prop.title}</h3>
                <h6 className="mb-2 text-body-secondary">
                   {prop.subtitle}
                </h6>
                <p className="">
                  {prop.text}
                 </p> 
                 <hr className=''/>

                 {prop.list && prop.list.length > 0 && (
                    <ul className="">
                      {prop.list.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}                    
              </div>
              ))}
            </div>
                 

            <div className="card col mx-lg-2">
              {skills.map((prop,index)=>(
              <div className="mt-4" key={index}>
                <h3 className='text-center justify-content-center'>
                   {prop.title}
                </h3>
                                             
                <h6 className="mb-2 text-body-secondary">
                  {prop.subtitle}									
                </h6>
                <hr/>

                {prop.list && prop.list.length > 0 && ( 
                <ul className="">
                {prop.list.map((point,idx)=>(
                  <li key={idx}>
                    {point}
                  </li>
                ))}      
                </ul>
                )}
              </div>
              ))}
            </div>                      
            <br/>
          </div>
        </div>
      </div>
  )
}

export default Home