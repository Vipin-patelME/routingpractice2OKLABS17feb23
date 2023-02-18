// 1. import area

//1.1 import someNamedImport from some location/library
//1.2 import somedefaultimport from some location/library 
//import { Link } from 'react-router-dom'
import './index.css'

//2 functional Component Defination area
const Home = ()=>{
    const vlog = "https://www.google.com/search?q=about+blog&rlz=1C1CHBF_enIN1030IN1030&sxsrf=AJOqlzVdwNbSwQ9PLjGQ4p1UF2ywHAkIEw%3A1676715154865&ei=kqTwY4W3NL_y4-EPgpWX6Ak&ved=0ahUKEwiFyMfZ6p79AhU_-TgGHYLKBZ0Q4dUDCA8&uact=5&oq=about+blog&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQkQIyDAgAEA0QgAQQFBCHAjIHCAAQDRCABDIFCAAQkQIyBwgAEA0QgAQyCQgAEAcQHhDxBDIHCAAQDRCABDIHCAAQDRCABDIHCAAQDRCABDIJCAAQBxAeEPEEOgoIABBHENYEELADOgcIABCwAxBDOgYIABAHEB46BAgAEEM6BQgAEIAEOhAIABCABBAUEIcCELEDEIMBOgoIABCABBAUEIcCOggIABCABBCxAzoHCAAQsQMQQzoLCAAQgAQQsQMQgwE6CggAELEDEIMBEENKBAhBGABQ3gNY-x1gpS5oAXABeACAAY4CiAGuEpIBBTAuOS4zmAEAoAEByAEKwAEB&sclient=gws-wiz-serp"
    // every function should return something
    return(
        <div className="home-cont">
            <img className='imag-style' src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png" alt="home" />
            <div>
                <h2>This is home Page and you can directly navigate to diffiret pages by clicking on the buttons, above on the Header.</h2>
                <p className='contact-us-para'>I am going to post some vlogs Here and want you all to read all the vlogs, And I assure you that you will love all the vlogs.</p>
            </div>
            <a href={vlog} target="_blank" rel="noreferrer">
                <button className='go-hompage' type='button'>About Blog</button>
            </a>
        </div>
    )
}

//3. export area

//3.1 default export
export default Home;
//3.2 named export