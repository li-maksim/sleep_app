import '../styles/FindSection.css'
import CardsMasonry from './CardsMasonry'

function FindSection() {

    return (
        <section className="section find">
            <div className="container">
                <h2 className="h2">Find the most enjoyable way to cope with stress</h2>
                <p className="p main_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start by unwinding with calming nature sounds or white noise to soothe your mind. Follow up with guided breathing techniques to <span className="purple_text">release tension</span> and ease into relaxation. Choose from bedtime fairy tales or gentle ASMR to bring a <span>sense of calm</span> before drifting off. With personalized playlists and a variety of sounds designed for any mood, you can create a routine that helps you fall asleep faster and wake up revitalized every day.</p>
                <CardsMasonry />
            </div>
        </section>
    )
}

export default FindSection