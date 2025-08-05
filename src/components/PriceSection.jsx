import '../styles/PriceSection.css'
import { useState } from 'react'
import Button from './Button'
import SwitchButton from './SwitchButton'
import PriceCard from './PriceCard'
import Li from './Li'

function PriceSection({price}) {

    const [switched, setSwitched] = useState(false)
    function toggleSwitched() {
        if (switched) {
            setSwitched(false)
        } else {
            setSwitched(true)
        }
    }

    return (
        <section className="section price">
            <div className="container">
                <h2 className="h2">Simple and affordable</h2>
                <SwitchButton switched={switched} fn={toggleSwitched}/>
                <div className="price_cards">
                    <PriceCard title="Basic" price="Free" descr={"Nothing superfluous, minimal\nset of functions"}>
                        <Li positive={true} descr="Basic sounds collection"/>
                        <Li positive={true} descr="Three custom mixes available"/>
                        <Li positive={false} descr="Personalized routine reminders"/>
                        <Li positive={false} descr="Access from all your devices"/>
                    </PriceCard>
                    <PriceCard title="Premium" price={!switched ? `$${price}` : `$${Math.round(price * 12 * 100) / 100}`} descr={"Access a selection of all the basic\nfeatures with extra options"}>
                        <Li positive={true} descr="Extended sounds library"/>
                        <Li positive={true} descr="Unlimited custom mixes"/>
                        <Li positive={true} descr="Personalized routine reminders"/>
                        <Li positive={true} descr="Access from all your devices"/>
                    </PriceCard>
                </div>
                <Button text="Start with Premium" altColor={true}/>
            </div>
        </section>
    )
}

export default PriceSection