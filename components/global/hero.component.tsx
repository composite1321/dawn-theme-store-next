import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

interface HeroProps{
    title:string;
    subtitle:string;
    btnText:string;
}

const Hero:React.FC<HeroProps> = ({title,subtitle,btnText}) => {

  const [move,setMove] = useState<number>(0)  
  const [count,setCount] = useState<number>(0)
  const maxCount = useRef<number>(1)
  const widthRef = useRef<HTMLImageElement | null>(null)
  const viewRef = useRef<HTMLDivElement | null>(null)
  const contentTitleRef = useRef<HTMLHeadingElement | null>(null)
  const contentSubtitleRef = useRef<HTMLHeadingElement | null>(null)
  const contentBtnRef = useRef<HTMLButtonElement | null>(null)

  const carouselNext = () =>{
      if(count < maxCount.current && widthRef.current){
          setMove(move - widthRef.current.clientWidth)
          setCount(count + 1)
      }
  }
  const carouselPrev = () =>{
    if(count > 0 && widthRef.current){
        setMove(move + widthRef.current.clientWidth)
        setCount(count - 1)
    }
  }
  const carouselMove = () =>{
    gsap.to(viewRef.current,{x:move,duration:1})
  }

  const animateContent = () =>{
    gsap.from(contentTitleRef.current,{ opacity:0, y:-50, duration:1 })
    gsap.from(contentSubtitleRef.current,{ opacity:0, x:50, duration:1 })
    gsap.from(contentBtnRef.current,{ opacity:0, y:50,duration:1 })
  }

  useEffect(()=>{
    carouselMove()
    animateContent()
  },[count])

  return (
    <div className="hero relative top-0 left-0">
      <div className="hero-images-carousel overflow-hidden relative top-0 left-0">
        <div onClick={()=>carouselPrev()} className="hero-carouel-prev z-10  absolute left-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full opacity-40 hover:opacity-100 transition-all cursor-pointer">
            <FontAwesomeIcon className="pointer-events-none" icon={faChevronCircleLeft} size='5x'/>
        </div>
        <div  onClick={()=>carouselNext() }className="hero-carouel-next z-10  absolute right-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full opacity-40 hover:opacity-100 transition-all cursor-pointer">
            <FontAwesomeIcon className="pointer-events-none" icon={faChevronCircleRight} size='5x'/>
        </div>
        <div ref={viewRef} className="hero-images-view flex min-w-max">
            <Image ref={widthRef} loading="eager" className="min-w-[1920px]" src="/assets/hero.png" alt='hero-img' width={1366} height={768} />
            <div className="hero-imgs-wrapper flex w-max">
                <Image className="min-w-[calc(1920 / 2)px]" src="/assets/hero-column-1.png" alt='hero-img' width={1920 / 2} height={768} />
                <Image className="min-w-[calc(1920 / 2)px]" src="/assets/hero-column-2.png" alt='hero-img' width={1920 / 2} height={768} />
            </div>
        </div>
      </div>
      <div className="hero-content w-1/2 px-5 py-12 rounded-lg absolute bg-neutral-900/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 ref={contentTitleRef} className="css-text-desktop-h0 text-center">{title}</h1>
        <h3 ref={contentSubtitleRef} className='text-center css-text-desktop-h2'>{subtitle}</h3>
        <button ref={contentBtnRef} className='cursor-pointer text-center block mx-auto border-2 border-white rounded-lg px-4 py-2 my-2 hover:border-white hover:bg-white hover:text-black'>{btnText}</button>
      </div>
    </div>
  )
}

export default Hero
