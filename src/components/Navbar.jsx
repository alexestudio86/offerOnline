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

    const elements = [
        {
            name:           'home',
            url:            '/a'
        },
        {
            name:           'tienda',
            url:            '/b'
        },
        {
            name:           'contacto',
            url:            '/c'
        }
    ]

    return (
        <div className='nav-Container py-2'>
            <ul className='float-end'>{ icons.map( (icon, idx) =>  
                    <li className='p-1' key={idx}>
                        <a href={icon.url}>
                            <i className={ `${icon.description} ${icon.color} fa-2xl` }></i>
                        </a>
                    </li>
                ) }
            </ul>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt="Logo" width='150' height='125' />
                </Link>
            </div>
            <header className='float-end'>
                <h1>Ofertas, Descuentos y mas...</h1>
            </header>
            <nav className='nav navbar navbar-expand-lg'>
                <ul className='navbar-nav container-fluid justify-content-end'>{ elements.map( (element, idx) =>
                    <li className='nav-item' key={idx}>
                        <Link className='nav-link text-light' to={element.url}>
                            { element.name }
                        </Link>
                    </li>
                ) }
                </ul>
            </nav>
        </div>
    )
}