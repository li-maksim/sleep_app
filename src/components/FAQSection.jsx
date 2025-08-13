import '../styles/FAQSection.css'
import Question from './Question'
import Button from './Button'
import froggy from '../assets/froggy.jpg'

function FAQSection() {

    return (
        <section className="section faq">
            <div className="container">
                <h2 className="h2">FAQ</h2>
                <div className="faq_content">
                    <div className="questions">
                        <Question q="Can I set reminders for my bedtime routine?" a="Of course! SleepApp has system of customizable notifications." />
                        <Question q="Does the app function offline?" a="Yes, many features, including sound playback and sleep tracking, can be accessed offline once downloaded." />
                        <Question q="Can I upload my own sounds to your library to create personal mixes and playlists?" a="Yes, SleepApp supports custom libraries and mixes." />
                        <Question q="Is there a sleep diary feature?" a="Yes, you can write about your dreams or even record a voice message." />
                        <Question q="What if I have trouble falling asleep even with the app?" a="There are many factors that affect our sleep. However, if SleepApp doesn't work for you, we have 30 day refund period." />
                        <Question q="Are there any bonuses or discounts?" a="Of course! You can give promo code to your friend to recieve 10% discount for both of you." />
                    </div>
                    <div className="contacts">
                        <img src={froggy} alt="Frog with question mark" className="img" />
                        <p className="p">Have more questions?</p>
                        <Button text="contact us" altColor={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection