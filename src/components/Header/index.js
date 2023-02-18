//1. import area
import {Link} from 'react-router-dom'
import './index.css'
//1.1 import {someNamedImport} from some location/library

//1.2 import somedefaultimport from some location/library

//2. functional component definantion area
const Header = ()=>{
    //every function should return something
    return(
        <div className='header-comp'>
            <ul className='button-list'>
                <li className='list-items'>
                    <Link className='home-lik' to="/" >Home</Link>
                </li>
                <li className='list-items'>
                    <Link className='home-lik' to="/about" >About</Link>
                </li>
                <li className='list-items'>
                    <Link className='home-lik' to="/contact" >Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

//3. export area
//3.1 default export
export default Header;
//3.2 named export