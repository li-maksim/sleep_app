import '../styles/ManageSection.css'
import CardsPanel from './CardsPanel'

function ManageSection() {

    return(
        <section className="section manage">
            <div className="container">
                <h2 className="h2">Manage anxiety and trouble sleeping</h2>
                <p className="p main_text">
                    We’ll help you <span className="purple_text">wake up energized</span> by providing a variety of meditation sessions designed to reduce stress. Whether you’re winding down for the night or need a boost during the day, you’ll find the perfect collection of playlists tailored to any case. Enjoy calming soundscapes and guided practices for <span className="purple_text">deep rest</span> and empowering sleep.
                </p>
                <CardsPanel />
            </div>
        </section>
    )
}

export default ManageSection