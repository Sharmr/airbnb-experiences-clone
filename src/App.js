import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


export default function App() {
    const cards = data.map(d => {
        return <Card 
            title = {d.title}
            description = {d.description}
            price = {d.price}
            img = {`./assets/${d.coverImg}`}
            rating = {d.stats.rating}
            reviewCount = {d.stats.reviewCount}
            location = {d.location}
            openSpots = {d.openSpots}
            country = "USA"
        />
    })
    return (
        <>
            <Navbar />
            <Hero />
            <div className="card-container">   
                 {cards}
            </div>
        </>
    );
}