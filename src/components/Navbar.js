import logo from '../assets/airbnb-logo.png';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Icon />
        </nav>
    );
}

function Icon() {
    return (
        <img src={logo} alt='airbnb logo' className='navbar-logo'></img>
    );
}