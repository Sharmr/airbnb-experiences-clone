import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


export default function App() {
    const cards = data.map(d => {
        return <Card 
            key = {d.id}
            items ={d}
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