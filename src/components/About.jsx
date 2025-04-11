import React from 'react'

const About = () => {
  return (
    <div className='container-fluid'>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="/IMG_20220430_101321_005.jpg" class="d-block mx-lg-auto img-fluid rounded" alt="my image" width="300" height="50" loading="lazy"/>
            </div>
            <div className="col-lg-6">
              <h2>Summary</h2>
              <hr/>
              <p>
                Aspiring to build a remarkable career that positively impacts the workforce and humanity. A young, intuitive, and self-driven quick learner with a strong academic foundation and a passion for software development. Equipped with excellent problem-solving abilities, interpersonal skills, and a collaborative spirit, I am eager to contribute to organizational growth while continually improving my technical expertise and gaining hands-on experience. 
                My ultimate goal is to leverage my skills to create innovative solutions that make the world a better place.        
              </p>
            </div>
          </div>
    </div>
  )
}

export default About