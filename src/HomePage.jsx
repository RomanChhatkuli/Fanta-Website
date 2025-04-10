import React, { useEffect, useRef } from 'react'
import Logo from './assets/logo.png'
import coconoutleaf from './assets/coconoutleaf.png'
import fanta from './assets/fanta.png'
import leaf2 from './assets/leaf2.png'
import leaf from './assets/leaf.webp'
import orange from './assets/orange.webp'
import orange2 from './assets/orange2.png'
import cocacola from './assets/cocacola.png'
import pepsi from './assets/pepsi.png'
import lemon from './assets/lemon.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
    const FantaRef = useRef();
    const Orange2Ref = useRef();
    const OrangeRef = useRef();
    const LeafRef = useRef();
    const Leaf2Ref = useRef();
    const ClemonRef = useRef();
    const PlemonRef = useRef();
    const CocacolaRef = useRef();
    const PepsiRef = useRef();

    useGSAP(() => {
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page2",
                start: "0% 95%",
                end: "60% 50%",
                scrub: true,
            }
        })

        t1.to(FantaRef.current, { top: "123%", left: "-14%", ease: 'power2.out' }, 'animation1')
        t1.to(Orange2Ref.current, { top: "205%", left: "21%", ease: 'power2.out' }, 'animation1')
        t1.to(OrangeRef.current, { top: "69%", left: "30%", ease: 'power2.out' }, 'animation1')
        t1.to(Leaf2Ref.current, { top: "135%", left: "1%", ease: 'power2.out', rotate: "135" }, 'animation1')
        t1.to(LeafRef.current, { top: "130%", left: "68%", ease: 'power2.out', rotate: "150", scale: "0.8" }, 'animation1')

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page3",
                start: "0% 95%",
                end: "60% 50%",
                scrub: true,
            }
        })

        t2.to(FantaRef.current, { top: "255%", left: "17%", scale: '0.55', ease: 'power2.out' }, 'animation2')
        t2.to(Orange2Ref.current, { top: "270%", left: "42.5%", ease: 'power2.out' }, 'animation2')
        t2.from([CocacolaRef.current, ClemonRef.current], { rotate: "-90", top: "20%", left: "-120%", ease: 'power2.out' }, 'animation2')
        t2.from([PepsiRef.current, PlemonRef.current], { rotate: "90", top: "15%", right: "-130%", ease: 'power2.out' }, 'animation2')
    })

    return (
        <>
            <div className='w-screen h-screen bg-orange-400 page1'>
                <nav className='text-white flex lg:ml-52 pt-5 lg:gap-72 gap-4 items-center fixed z-50'>
                    <div>
                        <img src={Logo} alt="Fanta Logo" className='object-contain h-12' />
                    </div>
                    <div className='flex justify-center items-center lg:gap-14 gap-4 font-semibold'>
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Shop</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>
                <div className='relative flex justify-center items-center'>
                    <div className='text-white font-bold text-9xl lg:text-[370px] mt-72 lg:mt-36'>FANTA</div>
                    <img src={fanta} ref={FantaRef} alt="Fanta" className='will-change-transform scale-[0.60] absolute lg:top-[-90px] lg:left-[245px] z-20 top-28 lg:mt-16 mt-20' />
                    <img src={orange2} ref={Orange2Ref} alt="orange" className='will-change-transform lg:w-60 w-28 absolute lg:top-0 lg:left-[470px] top-32 left-20 z-10 lg:mt-16 mt-20' />
                    <img src={orange} ref={OrangeRef} alt="orange" className='will-change-transform lg:scale-[0.2] absolute lg:top-[-290px] lg:left-[130px] scale-[0.3] left-16 top-36 z-30 lg:mt-16 mt-20' />
                    <img src={leaf} ref={LeafRef} alt="leaf" className='will-change-transform lg:w-72 absolute lg:top-[20px] lg:left-[10px] rotate-45 w-20 left-[-10px] top-48 lg:mt-16 mt-20' />
                    <img src={leaf2} ref={Leaf2Ref} alt="leaf" className='will-change-transform lg:w-48 absolute lg:top-[400px] lg:right-[130px] rotate-270 w-13 right-[5px] top-[320px] lg:mt-16 mt-20' />
                    <img src={coconoutleaf} alt="cocunoutleaf" className='will-change-transform lg:w-80 absolute lg:top-[0px] lg:right-0 w-28 right-0 top-[150px] lg:mt-16 mt-20' />
                </div>

                {window.innerWidth < 768 && (
                    <div className='p-8 bg-[#f97316] mt-20 text-[#fff]'>
                        This site is not optimized for mobile. Please use a larger screen for the best experience.
                    </div>
                )}
            </div>

            <div className='w-screen h-screen bg-[#4d231c] flex items-center gap-72 page2'>
                <div className='mt-72 ml-36'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-96'>
                        <path fill="#e04428" d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className=' text-white mr-28 ml-[-90px]'>
                    <div className='font-bold text-7xl'>Flavour Updated</div>
                    <div className='mt-8'>We’ve refreshed your favorite Fanta with an even bolder, fruitier taste!
                        Our new recipe is bursting with juicy flavor that’ll make your taste buds dance. Whether you're sipping Orange, Grape, or one of our wild new flavors, it's more Fanta than ever before.
                        <br />
                        ✨ Now with an extra burst of real fruit flavor <br />
                        💥 No caffeine. Just pure fizzy fun. <br />
                        🌈 More vibrant. More refreshing. More YOU. <br />

                        Ready to pop open the new Fanta? <br />
                        Try it today and taste the upgrade!</div>
                </div>
            </div>

            <div className='w-screen h-screen bg-orange-500 page3'>
                <div className='flex justify-center items-center p-16 gap-12 h-screen'>

                    <div className='h-[550px] w-[400px] relative rounded-xl bg-white mt-28 flex flex-col justify-center items-center'>
                        <img src={lemon} loading="lazy" ref={ClemonRef} alt="lemon" className='will-change-transform w-80 z-10 mt-[-340px] relative top-20 ' />
                        <img src={cocacola} loading="lazy" ref={CocacolaRef} alt='cocacola' className='will-change-transform relative w-52 scale-110 z-20 mt-[-90px]' />
                        <div className='absolute bottom-0'>
                            <div className='text-5xl font-bold mb-3'>CocaCola</div>
                            <button className='bg-orange-400 text-white p-4 ml-9 mb-2 cursor-pointer rounded-xl'>Buy Now</button>
                        </div>
                    </div>

                    <div className='h-[550px] w-[400px] relative rounded-xl bg-white mt-28 flex flex-col justify-center items-center'>
                        <div className='absolute bottom-0'>
                            <div className='text-5xl font-bold mb-3'>Fanta</div>
                            <button className='bg-orange-400 text-white p-4 ml-4 mb-2 cursor-pointer rounded-xl'>Buy Now</button>
                        </div>
                    </div>
                    <div className='h-[550px] w-[400px] relative rounded-xl bg-white mt-28 flex flex-col justify-center items-center'>
                        <img src={lemon} loading='lazy' ref={PlemonRef} alt="lemon" className='will-change-transform w-80 z-10 mt-[-340px] relative top-24' />
                        <img src={pepsi} loading="lazy" ref={PepsiRef} alt='pepsi' className='will-change-transform relative w-80 mt-[-100px] scale-110 z-20' />
                        <div className='absolute bottom-0'>
                            <div className='text-5xl font-bold mb-3'>Pepsi</div>
                            <button className='bg-orange-400 text-white p-4 ml-4 mb-2 cursor-pointer rounded-xl'>Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default HomePage