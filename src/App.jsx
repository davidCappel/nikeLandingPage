import Nav from './components/Nav';
import {
  Hero,PopularProducts,SuperQuality, Subscribe,SpecialOffer,Services,CustomerReviews,Footer
} from './sections'

import { ScrollReveal } from 'reveal-on-scroll-react'



const App=()=>(
  <main className="relative">
    <Nav></Nav>
    <section className="x1:padding-l wide:padding-r padding-b">
      <ScrollReveal.div>
        <Hero></Hero>
      </ScrollReveal.div>
      
    </section>
    <section className="padding">
      <ScrollReveal.div>
        <PopularProducts></PopularProducts>
      </ScrollReveal.div>
    </section >
    
    <section className="padding">
      <ScrollReveal.div>
        <SuperQuality></SuperQuality>
      </ScrollReveal.div>
      

    </section >
    <section className="padding-x py-10">
      <ScrollReveal.div>
        <Services></Services>

      </ScrollReveal.div>
     

    </section >
    <section className="padding">
      <ScrollReveal.div>
        <SpecialOffer></SpecialOffer>
      </ScrollReveal.div>
      

    </section >
    <section className="bg-pale-blue padding">
      <ScrollReveal.div>
        <CustomerReviews></CustomerReviews>
      </ScrollReveal.div>
      

    </section >
    <section className="padding-x sm:py-32 py-16 w-full">
      <ScrollReveal.div>
        <Subscribe></Subscribe>

      </ScrollReveal.div>

    </section >
    <section className="bg-black padding-x padding-t pb-8 text-slate-600">
      <Footer></Footer>

    </section >

  </main>
)

export default App;