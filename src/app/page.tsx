"use client"
import Herosection from '@/Components/Herosection'
import About from '@/Components/About'
import React from 'react'
import Navbar from '@/Components/Navbar'
import Chatbot from '@/Components/Chatbot'
import FAQ from '@/Components/FAQ'
import Foot from '@/Components/Foot'
import { KrishChat } from '@/Components/KrishChat'

const Page = () => {
  return (
    <div>
      <a href="dashboard">dash</a>
      <a href="/login">login</a>
      {/* <Navbar/>
      <Herosection/>
      <About/>
      <Chatbot/>
      <FAQ/>
      <Foot/> */}
      <KrishChat/>
    </div>
  )
}

export default Page