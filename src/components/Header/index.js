//import area
import {Link} from 'react-router-dom'

import './index.css'

const Header = ()=>{
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
export default Header;