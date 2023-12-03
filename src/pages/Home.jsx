import React,{ useEffect, useRef } from 'react'
import { menu, profile, right, more, world,mainbg, earth } from '../assets';
import celestialBodies from '../components/celestial_bodies';
import { Link } from 'react-router-dom'

const style = {
  backgroundImage: `url(${mainbg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100%',
  width: '100%',
}



const Home = () => {
  const submenuRef = useRef(null);
  const handleScroll = () => {
    if (submenuRef.current) {
      const submenuWidth = submenuRef.current.clientWidth;
      const submenuScrollWidth = submenuRef.current.scrollWidth;
      if (submenuScrollWidth > submenuWidth) {
        submenuRef.current.scrollRight = submenuScrollWidth + submenuWidth;
      } 
      else {
        submenuRef.current.scrollRight = 0;
      }
    }
  };
  
  useEffect(() => {
    handleScroll();
  }, []);

  return (
      <div style={style} className='flex flex-col items-center overflow-x-auto w-full'>
        {/* Navbar */}
        <div className='flex items-center navbar-glass gap-[40px] py-[18px]'>
          {/* Outer Circle for menu */}
          <div className='flex items-center justify-center border-solid border-Black border-[2px] rounded-full bg-transparent w-12 h-12'>
            <img src={menu}/>
          </div>
          <h2 className='text-[24px] text-white font-[900]'>Solar System</h2>
          {/* Outer Circle for profile */}
          <div className='flex items-center justify-center border-solid border-Black border-[2px] rounded-full bg-transparent w-12 h-12'>
            <img src={profile}/>
          </div>
        </div>

        {/* Planet pills */}
          <div className='submenu w-full px-8 mt-5' ref={submenuRef} id="id">
            {celestialBodies.map((body) => (
                <Link key={body.id} to={`/celestial-bodies/${body.id}`}>
                  <div className='flex flex-shrink-0 items-center justify-center gap-2 planet-glass px-[24px] py-[12px]'>
                    <img src={body.image} className='w-6 h-6'/>
                    <h2 className='text-white font-[700] w-fit'>{body.id}</h2>
                  </div>
                </Link>
              
            ))}
          </div>

        {/* Planet of the day */}
        <div className='flex flex-col items-start justify-start py-5 px-6 mx-8 mt-6 main-glass'>
          <h3 className='text-[16px] text-white font-[700] leading-[18px]'>Planet of the day</h3>
          <div className='flex items-start gap-3 mt-5'>
              <img src={earth} className='w-[60px]'/>
              <div className='flex flex-col items-start justify-start'>
                <h3 className='text-[16px] text-Cyan font-[700]'>Earth</h3>
                <p className='text-[12px] text-white font-[300]'>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, only being larger than Mercury. In the English language, Mars is named for the Roman god of war.</p>
              </div>
          </div>
          <div className='flex items-center gap-2 justify-end w-full'>
            <p className='text-[12px] text-white font-[700]'>Details</p>
            <img src={right}/>
          </div>
        </div>

        <div className='flex flex-col gap-[14px] items-start justify-start py-5 px-6 mx-8 mt-7 main-glass'>
          <h3 className='text-[16px] text-white font-[700] leading-[18px]'>Solar System</h3>
          <p className='text-[12px] text-white font-[300]'>The Solar System[c] is the gravitationally bound system of the Sun and the objects that orbit it. It formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority (99.86%) of the system's mass is in the Sun, with most of the remaining mass contained in the planet Jupiter. The four inner system planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being composed primarily of rock and metal. The four giant planets of the outer system are substantially larger and more massive than the terrestrials.</p>
        </div>

      </div>
    )
}

export default Home;