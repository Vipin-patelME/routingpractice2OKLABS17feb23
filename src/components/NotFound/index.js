//1. import area
import { Link } from 'react-router-dom';
import './index.css'

//1.1 import {someNamedImport} from some location/library

//1.2 import somedefaultimport from some location/library

//2. functional component defination area
const NotFound = () =>{
    //every function should return something
    return(
        <div className="home-cont">
            <img src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png " alt="nf" />
            <h2>Not Found</h2>
            <h3>Something Went wrong</h3>
            <Link to="/">
                <button className='go-hompage' type='button'>Go To Homepage</button>
            </Link>
        </div>
    )
}
//3. export area

//3.1 default export
export default NotFound;
//3.2 named export