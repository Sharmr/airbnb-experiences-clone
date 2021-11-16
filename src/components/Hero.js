import photogrid from '../assets/photo-grid.png'
export default function Hero() {
    return (
        <div className="hero">
            <BannerImage />
            <Header />
            <SubHeader />
        </div>
    );
}

function BannerImage() {
    return (
        <img src={photogrid} alt='photogrid' className='photo-grid'></img>
    );
}

function Header() {
    return (
        <h1 className='header'>Online Experiences</h1>
    );
}

function SubHeader() {
    return (
        <p className='sub-header'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
    );
}