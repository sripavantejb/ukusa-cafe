import HeroPage from './HeroPage'
import MenuItems from './MenuItems'
import StorySection from './StorySection'
import Features from './Features'
import Testimonials from './Testimonials'
import Address from './Address'
import Footer from './Footer'
import Ambience from './Ambience'
import SideNav from './SideNav'

function Home() {
  return (
    <>
        <div id="hero"><HeroPage /></div>
        <SideNav />
        <div id="menu-preview"><MenuItems /></div>
        <div id="story"><StorySection /></div>
        <div id="features"><Features /></div>
        <div id="ambience"><Ambience /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="address"><Address /></div>
        <div id="footer"><Footer /></div>
    </>

  )
}

export default Home