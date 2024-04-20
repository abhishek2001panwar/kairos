import React from 'react'

const About = () => {
  return (
           <section className="bg-zinc-100 dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About us </h2>
      <p className="mb-4">Kairos: Empowering mental well-being. Embark on a transformative journey to a healthier mind with accessible, affordable, and stigma-free personalized therapy sessions. Your mental wellness matters.</p>
      <p>Empowering Mental Well-being: Journey to a Healthier Mind with Kairos - Accessible, Affordable, Stigma-Free Therapy</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img className="w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylmrz_MSfuu23RWWqDp3GEKRiNzn-nLrOIRe9xdchqA&s" alt="office content 1" />
      <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://www.shutterstock.com/image-photo/vertical-shot-young-happy-cheerful-600nw-2033522243.jpg" alt="office content 2" />
    </div>
  </div>
</section>

  )
}

export default About