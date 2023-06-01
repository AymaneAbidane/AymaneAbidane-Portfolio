import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Banner } from '../Components/Banner'
import { Skills } from '../Components/Skills'
import { Contact } from '../Components/Contact'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
    
  )
}
