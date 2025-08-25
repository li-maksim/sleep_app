import Button from './Button'
import img from '../assets/iphone_homepage.png'
import '../styles/Home.css'

function Home() {

    return (
        <section className="section home">
            <div className="wave_bg"></div>
            <div className="container home">
                <h1>Fall asleep faster <br /><span>wake up easier</span></h1>
                <p className="p">Try living life to the fullest and resting well with our sleep sounds</p>
                <div className="home_img_wrapper">
                    <img className="img home_img" src={img} alt="iPhone 15 image" />
                </div>
                <Button text="Learn more" />
            </div>
        </section>
    )
}

export default Home