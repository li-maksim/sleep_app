import '../styles/SwitchButton.css'

function SwitchButton({switched, fn}) {

    function toggle() {
        fn()
    }

    return (
        <div className="switcher">
            <button className={!switched ? "switch_btn active" : "switch_btn"} onClick={() => toggle()}>Monthly</button>
            <button className={switched ? "switch_btn active" : "switch_btn"} onClick={() => toggle()}>Annualy</button>
        </div>
    )
}

export default SwitchButton