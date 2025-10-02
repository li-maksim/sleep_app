import '../styles/CardsPanel.css'
import CardsCarousel from './CardsCarousel'
import Card from './Card'
import dog from '../assets/dog.jpg'
import hedgehog from '../assets/hedgehog.jpg'
import fox from '../assets/fox.jpg'
import kitten1 from '../assets/kitten1.jpg'
import kitten2 from '../assets/kitten2.jpg'
import bunny from '../assets/bunny.jpg'


function CardsPanel() {

    return(
        <>
        <div className="panel">
            <div className="panel_column">
                <Card type="panel" title="90%" descr="Wake up refreshed and alert" img={dog} altText="Sleeping puppy"></Card>
                <Card type="panel" title="Relaxation" descr="Find meditation sessions for any mood" img={hedgehog} altText="Sleeping hedgehog"></Card>
            </div>
            <div className="panel_column">
                <Card type="panel" title="50 000+" descr="Use SleepApp to sleep better" img={fox} altText="Sleeping fox cub"></Card>
                <Card type="panel" title="Tranquillity" descr="Explore collections of SleepApp playlists" img={kitten1} altText="Sleeping kitten"></Card>
            </div>
            <div className="panel_column">
                <Card type="panel" title="85%" descr="Feel less anxiety and stress" img={kitten2} altText="Anothersleeping kitten"></Card>
                <Card type="panel" title="Personalization" descr="Make your own mix for better experience" img={bunny} altText="Sleeping bunny"></Card>
            </div>
        </div>
        <CardsCarousel>
                <Card type="panel" title="90%" descr="Wake up refreshed and alert" img={dog} altText="Sleeping puppy"></Card>
                <Card type="panel" title="Relaxation" descr="Find meditation sessions for any mood" img={hedgehog} altText="Sleeping hedgehog"></Card>
                <Card type="panel" title="50 000+" descr="Use SleepApp to sleep better" img={fox} altText="Sleeping fox cub"></Card>
                <Card type="panel" title="Tranquillity" descr="Explore collections of SleepApp playlists" img={kitten1} altText="Sleeping kitten"></Card>
                <Card type="panel" title="85%" descr="Feel less anxiety and stress" img={kitten2} altText="Anothersleeping kitten"></Card>
                <Card type="panel" title="Personalization" descr="Make your own mix for better experience" img={bunny} altText="Sleeping bunny"></Card>
        </CardsCarousel>
        </>
    )
}

export default CardsPanel