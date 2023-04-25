import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/card'
import Carousal from '../components/Carousal'

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div className='m-10'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      <div><Footer /></div>
    </div>
  )
}
