import '../styles/CardsMasonry.css' 
import CardsCarousel from './CardsCarousel'
import Card from './Card'
import bedroom from '../assets/bedroom.jpg'
import nature from '../assets/nature.jpg'
import soundwaves from '../assets/soundwaves.jpg'

function CardsMasonry() {

    return (
        <>  
            <div className="masonry">
                <Card type="vertical" title="Playlists" descr="We have carefully composed hundreds of playlists with soothing and sleepifying music for any mood"></Card>
                <Card type="vertical" title="Bedtime routine" descr="Implement our recommendations in your routine to create a pleasant mood before bedtime and start a new life" img={bedroom} altText="Comfy bedroom"></Card>
                <Card type="vertical" title="Binaural rhythms" descr="Discover beats that can help synchronize brainwaves and ease the transition into deeper sleep"></Card>
                <Card type="vertical" title="White noise" descr="Masking background noise, it creates a calming environment that helps reduce distractions, making it easier to focus and relax"></Card>
                <Card type="vertical" title="ASMR" descr="Whispering, tapping, and soft rustling trigger a tingling sensation that many find deeply relaxing"></Card>
                <Card type="vertical" title="Nature sounds" descr="It can be a simple yet effective way to cultivate inner peace" img={nature} altText="Mountains and sky filled with stars"></Card>
                <Card type="horizontal" title="Fairytales" descr="The enchanting stories of magical creatures and brave heroes can help calm an active mind, providing a comforting backdrop as you wind down for the night" img={soundwaves} altText="Soundwaves"></Card>
                <Card type="vertical" title="Breathing techniques" descr="We’ll tell you about variety of methods of breathing that that have been proven effective in managing stress and anxiety, helping to achieve greater balance and tranquility in your life"></Card>
            </div>
            <CardsCarousel>
                <Card type="vertical" title="Playlists" descr="We have carefully composed hundreds of playlists with soothing and sleepifying music for any mood"></Card>
                <Card type="vertical" title="Bedtime routine" descr="Implement our recommendations in your routine to create a pleasant mood before bedtime and start a new life" img={bedroom} altText="Comfy bedroom"></Card>
                <Card type="vertical" title="Binaural rhythms" descr="Discover beats that can help synchronize brainwaves and ease the transition into deeper sleep"></Card>
                <Card type="vertical" title="White noise" descr="Masking background noise, it creates a calming environment that helps reduce distractions, making it easier to focus and relax"></Card>
                <Card type="vertical" title="ASMR" descr="Whispering, tapping, and soft rustling trigger a tingling sensation that many find deeply relaxing"></Card>
                <Card type="vertical" title="Nature sounds" descr="It can be a simple yet effective way to cultivate inner peace" img={nature} altText="Mountains and sky filled with stars"></Card>
                <Card type="horizontal" title="Fairytales" descr="The enchanting stories of magical creatures and brave heroes can help calm an active mind, providing a comforting backdrop as you wind down for the night" img={soundwaves} altText="Soundwaves"></Card>
                <Card type="vertical" title="Breathing techniques" descr="We’ll tell you about variety of methods of breathing that that have been proven effective in managing stress and anxiety, helping to achieve greater balance and tranquility in your life"></Card>
            </CardsCarousel>
        </>
    )
}

export default CardsMasonry