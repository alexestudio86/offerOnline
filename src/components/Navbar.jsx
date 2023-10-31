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
        <div className="py-4">
            <div className='d-flex'>
                <Link className='border border-info mb-2 p-3' to='/'>
                    <img src={logo} alt="Logo" width='150' height='125' />
                </Link>
                <div className="flex-grow-1">
                    <div className='d-flex justify-content-end align-items-center'>
                        <header>
                            <h1>Ofertas, Descuentos y mas...</h1>
                        </header>
                        <ul>{ icons.map( (icon, idx) =>  
                            <li className='p-1' key={idx}>
                                <a href={icon.url}>
                                    <i className={ `${icon.description} ${icon.color} fa-2xl` }></i>
                                </a>
                            </li>
                        ) }</ul>
                    </div>
                    <nav className='nav navbar navbar-expand-lg'>
                        <ul className='navbar-nav container-fluid justify-content-end'>{ elements.map( (element, idx) =>
                            <li className='nav-item' key={idx}>
                                <Link className='nav-link text-light' to={element.url}>
                                    { element.name }
                                </Link>
                            </li>
                        ) }</ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}