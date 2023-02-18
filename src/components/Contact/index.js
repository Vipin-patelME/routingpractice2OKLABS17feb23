//1. import area
import './index.css'

//1.1 import {somenamedimport} from some location/library

//1.2 import somedefaultimport from some location/library

//2. functional Component defination area
const Contact = ()=>{
    // every function should return something
    return(
        <div className='home-cont'>
            <img className='imag-style' src='https://assets.ccbp.in/frontend/react-js/contact-blog-img.png ' alt='contact' />
            <h1>Contact Us</h1>
            <p className='contact-us-para'>For Any Complaint Or Querry please Contact us on 
                <span className='gmail-spa'> t4t.forex@gmail.com</span>
            </p>
            <a href='*'><button className='call-now-btn' type='button'>Call Now</button></a>
        </div>
    )
}

//3. export area
//3.1 default export
export default Contact;

//3.2 named export