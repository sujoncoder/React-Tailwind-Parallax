import React from 'react'
import { Parallax } from 'react-parallax';
import first from './asset/one.jpg'
import second from './asset/two.jpg'
import third from './asset/three.jpg'

function App() {
  return (
    <div className='w-full h-screen'>
     <Parallax className='relative h-screen' bgImage={first} strength={200}>
        <div className='absolute flex justify-center items-center w-full h-screen'>
            <p className='bg-slate-200 uppercase font-medium p-2 px-4 rounded-md'>hello world</p>
        </div>
    </Parallax>


    <Parallax className='relative h-screen' bgImage={second} blur={{ min: -15, max: 15 }} strength={300}>
        <div className='absolute flex justify-center items-center w-full h-screen'>
            <p className='bg-slate-200 uppercase font-medium p-2 px-4 rounded-md'>hello world</p>
        </div>
    </Parallax>


    <Parallax className='relative h-screen' bgImage={third} strength={200}>
        <div className='absolute flex justify-center items-center w-full h-screen'>
            <p className='bg-slate-200 uppercase font-medium p-2 px-4 rounded-md'>hello world</p>
        </div>
    </Parallax>
    </div>
  );
}

export default App;
