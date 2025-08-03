import '../styles/ReviewsSection.css'
import Slider from './Slider'
import star from '../assets/icons/star.svg'

function ReviewsSection() {

    const array = []
    for (let i = 0; i < 5; i++) {
        array.push(i)
    }

    const stars = array.map((e) => {
        return <img key={e} src={star} className="star" alt='' />
    })

    return (
        <div className="section reviews">
            <div className="container">
                <h2 className="h2">Our mission is to <span className="orange_text">change your life</span></h2>
                <div className="p main_text">More than 50,000 people enjoy our app and live a full life. Read why they love it and join in</div>
                <Slider direction="left">
                <div className="review_block">
                    <div className="p review_descr">«Highly recommend it to anyone looking to improve their sleep!»</div>
                    <p className="review_name">Oliver Bennett</p>
                </div>
                <div className="review_block">
                    <div className="p review_descr">«For a few weeks this app has completely changed my sleep routine! I especially love the customizable mixes»</div>
                    <p className="review_name">Noah Carter</p>
                </div>
                <div className="review_block">
                    <div className="p review_descr">« I appreciate SleepApp  interface, making it easy to navigate even when I’m half-asleep! Love this app»</div>
                    <p className="review_name">Ethan Sullivan</p>
                </div>
                <div className="review_block">
                    <div className="p review_descr">«This awesome app has helped me with my insomnia. None of the previously used ones could deal with it»</div>
                    <p className="review_name">Mia Anderson</p>
                </div>
                <div className="review_block">
                    <div className="p review_descr">«Combining gentle rain with soft piano music has become my go-to for relaxation»</div>
                    <p className="review_name">Ann Lively</p>
                </div>
                </Slider>
                <div className="stars">
                    {stars}
                </div>
                <div className="p main_text">One of the top rated healthcare apps</div>
            </div>
        </div>
    )
}

export default ReviewsSection