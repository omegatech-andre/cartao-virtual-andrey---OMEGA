'use client'
import './index.scss'
import Image from 'next/image'
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { IoMenu } from "react-icons/io5";
import { useState } from 'react'

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRotate, setIsRotate] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
    setIsRotate(!isRotate)
  }

  return (
    <main>
      <div className="page">
        <div className="page__logo">
          <Image
            src='/logo.png'
            width={240}
            height={240}
          />
          <h1>Andrey Vinícius</h1>
          <h2>CEO</h2>
        </div>
        {
          isVisible && (
            <>
              <div className="page__content">
                <Image
                  src='/qrcode.png'
                  width={240}
                  height={240}
                />
              </div>
              <div className="page__content">
                <a href="https://www.linkedin.com/in/andreyvinisc/" target='_blank'><SiLinkedin size={22} /></a>
                <a href="https://wa.me/5581982590059" target='_blank'><SiWhatsapp size={22} /></a>
                <a href="https://www.instagram.com/omegascreen.ind/" target='_blank'><SiInstagram size={22} /></a>
              </div>
            </>
          )
        }
        <div className="page__btntoggle">
          <IoMenu size={30} onClick={handleClick} className={isRotate ? 'rotateX' : 'rotateY'} />
        </div>
      </div>
    </main >
  )
}