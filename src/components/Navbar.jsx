import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/media/logo-offer-online.png';


export function Navbar ( ){

    const icons = [
        {
            name:           'Facebook',
            color:          'text-primary',
            description:    'fa-brands fa-facebook',
            url:            'https:///www.google.com'
        },
        {
            name:           'Instagram',
            color:          'text-danger',
            description:    'fa-brands fa-instagram',
            url:            'https:///www.google.com'
        }
    ]

    return (
        <nav className='py-2'>
            <ul className='float-end'>{ icons.map( (icon, idx) =>  
                    <li className='p-1' key={idx}>
                        <a href={icon.url}>
                            <i className={ `${icon.description} ${icon.color} fa-2xl` }></i>
                        </a>
                    </li>
                ) }
            </ul>
            <div className='logo'>
                <Link className='border-logo' to='/'>
                    <img src={logo} alt="Logo" width='150' height='125' />
                </Link>
            </div>
        </nav>
    )
}