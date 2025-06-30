import '../styles/CollectionSection.css'
import IconsSlider from './IconsSlider'
const svgModules = import.meta.glob('../assets/icons/*.svg', {
    eager: true,
    import: 'default',
  })

const icons = Object.entries(svgModules).map(([path, src]) => {
const fileName = path.split('/').pop().replace('.svg', '');
return { src, text: fileName };
})


function CollectionSection() {

    return (
        <section className="section collection">
            <div className="container">
                <h2 className="h2">
                    Collection of soothing sounds <span className="purple_text">based on somnology studies</span>
                </h2>
                <p className="p main_text">
                    <span className="orange_text">SleepApp</span> uses a blend of sounds, noises, melodies to help you unwind and <span className="purple_text">fall asleep faster.</span> Whether it’s the gentle rustle of leaves, rhythmic waves, or the comforting hum of white noise, each sound is designed to improve your overall health by enhancing sleep quality. Enjoy calming audio experiences that guide you into a peaceful slumber, helping you wake up feeling <span className="purple_text">refreshed and happy.</span>
                </p>
                <IconsSlider icons={icons} direction="left" />
                <IconsSlider icons={icons} direction="right" />
                <p className="p orange_text collection_end">
                    Create your perfect mix by picking a few
                </p>
            </div>
        </section>
    )
}

export default CollectionSection