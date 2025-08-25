import '../styles/App.css'
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
      <div className="circle_bg"></div>
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
