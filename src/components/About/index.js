//1. import area

import './index.css'
//1.1 import {somenamedimport}  from some location/library

//1.2 import somedefaultimport from some location/library

//functional Component defination area
const About = ()=>{
    //every function should return something
    return(
        <div className="home-cont">
            <img className='imag-style' src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png" alt="about" />
            <h1>About</h1>
            <div>
                <h3>This is a Blog site you will fint lot's of Blog here, soon.</h3>
                <p className='stay-para'>Please Stay Tuned</p>
            </div>
        </div>
    )
}

//3. export area
//3.1 default export
export default About;
//3.2 named export