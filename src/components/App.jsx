import '../styles/App.css'
import '../styles/bg.css'
import Header from './Header'
import Home from './Home'
import CollectionSection from './CollectionSection'
import ManageSection from './ManageSection'
import FindSection from './FindSection'
import ReviewsSection from './ReviewsSection'
import PriceSection from './PriceSection'
import FAQSection from './FAQSection'
import SubscribeSection from './SubscribeSection'
import Footer from './Footer'

function App() {

  return (
    < >
    <div className="bg">
      <div className="bg_home">
        <div className="bg_big_circle"></div>
          <div className="bg_pink_circles">
            <div className="bg_circle pink_circle"></div>
            <div className="bg_circle pink_circle"></div>
          </div>
          <div className="bg_blue_circles">
            <div className="bg_circle blue_circle"></div>
            <div className="bg_circle blue_circle"></div>
            <div className="bg_circle blue_circle"></div>
          </div>
          <div className="bg_red_circles">
            <div className="bg_circle red_circle"></div>
            <div className="bg_circle red_circle"></div>
            <div className="bg_circle red_circle"></div>
          </div>
          <div className="bg_wave bg_home_wave"></div>
      </div>
      <div className="bg_manage">
        <div className="bg_circle light_blue_circle"></div>
        <div className="bg_big_circle"></div>
        <div className="bg_circle yellow_circle"></div>
        <div className="bg_circle red_circle"></div>
      </div>
    </div>
      <div className="app">
        <Header />
        <Home />
        <CollectionSection />
        <ManageSection />
        <FindSection />
        <ReviewsSection />
        <PriceSection price={4.99}/>
        <FAQSection />
        <SubscribeSection />
        <Footer />
    </div>
    </>
  )
}

export default App
