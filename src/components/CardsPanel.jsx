import '../styles/CardsPanel.css'
import dog from '../assets/dog.jpg'
import hedgehog from '../assets/hedgehog.jpg'
import fox from '../assets/fox.jpg'
import kitten1 from '../assets/kitten1.jpg'
import kitten2 from '../assets/kitten2.jpg'
import bunny from '../assets/bunny.jpg'


function CardsPanel() {

    return(
        <div className="panel">
            <div className="panel_column">
                <div className="panel_card">
                    <h3 className="h3">90%</h3>
                    <p className="p">Wake up refreshed and alert</p>
                    <img src={dog} alt="Sleeping puppy" className="panel_img" />
                </div>
                <div className="panel_card">
                    <h3 className="h3">Relaxation</h3>
                    <p className="p">Find meditation sessions for any mood</p>
                    <img src={hedgehog} alt="Sleeping hedgehog" className="panel_img" />
                </div>
            </div>
            <div className="panel_column">
                <div className="panel_card">
                    <h3 className="h3">50 000+</h3>
                    <p className="p">Use SleepApp to sleep better</p>
                    <img src={fox} alt="Sleeping fox cub" className="panel_img" />
                </div>
                <div className="panel_card">
                    <h3 className="h3">Tranquillity</h3>
                    <p className="p">Explore collections of SleepApp playlists</p>
                    <img src={kitten1} alt="Sleeping kitten" className="panel_img" />
                </div>
            </div>
            <div className="panel_column">
                <div className="panel_card">
                    <h3 className="h3">85%</h3>
                    <p className="p">Feel less anxiety and stress</p>
                    <img src={kitten2} alt="Anothersleeping kitten" className="panel_img" />
                </div>
                <div className="panel_card">
                    <h3 className="h3">Personalization</h3>
                    <p className="p">Make your own mix for better experience</p>
                    <img src={bunny} alt="Sleeping bunny" className="panel_img" />
                </div>
            </div>
        </div>
    )
}

export default CardsPanel