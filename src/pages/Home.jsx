import React from 'react'
import { menu, profile, right, more, world,mainbg } from '../assets';
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
  return (
      <div style={style} className='flex flex-col items-center w-full'>
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

        <div className='flex gap-4 items-center ml-4 '>
          {celestialBodies.map((body) => (
            <div key={body.id}>
              <Link to={`/celestial-bodies/${body.id}`}>
                <div className='flex items-center gap-2 rounded-2xl planet-glass px-[14px] py-[12px]'>
                <img src={body.img} className='w-4'/>
                <h2 className='text-white font-[700]'>{body.title}</h2>
              </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    )
}

export default Home;