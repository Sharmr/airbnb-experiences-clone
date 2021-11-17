import star from '../assets/star.png';

export default function Card(props) {
    return (
        <div className='card'>
            <Picture img = {props.img} openSpots = {props.openSpots} location = {props.location}/>
            <Caption rating = {props.rating} reviewcount = {props.reviewCount} country = {props.country} title = {props.title} price = {props.price}/>
        </div>
    );
}

function Picture(props) {
    return (
        <div className='image'>
            <img src={props.img} alt="something" className='card-picture'></img>
            {props.location == "Online" && <div className='status'>
                ONLINE
            </div>}
            {props.openSpots == 0 && <div className='status'>
                SOLD OUT
            </div>}
        </div>
    );
}

function Caption(props) {
    return (
        <div className='caption'>
            <div className='info'>
                <img src={star} alt='star' className='star'></img>
                <span className='rating'> {props.rating} </span>
                <span className='location'> ({props.reviewcount})·{props.country}</span>
            </div>
            <span className='experience-name'>
                {props.title}
            </span>
            <div className="pricing">
                <span className="money-number">
                    From ${props.price}
                </span>
                <span className='per-person'>
                     / person
                </span>
            </div>
        </div>
    );
}