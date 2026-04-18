'use client';
import { TypeAnimation } from 'react-type-animation';
import AnimatedNetwork from './AnimatedNetwork';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-neutral-light"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-neutral-dark">
            Hi, I'm <span className="text-primary">Akash</span>
          </h1>

          <h2 className="mt-4 text-xl text-gray-600">
            I am a{' '}
            <span className="text-primary font-semibold">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1500,
                  'Backend Developer',
                  1500,
                  'System Designer',
                  1500,
                  'Problem Solver',
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            I craft fast, scalable web apps and enjoy solving real-world
            problems through code.
          </p>

          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
            View Work
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center  rounded-full">
          <AnimatedNetwork/>
          {/* <img
            src="./hero-Photoroom.png"
            alt="developer illustration"
            className=" rotate-90
    opacity-50
    blur-[1px]
    scale-110"
          /> */}
        </div>
      </div>
    </section>

    // <section
    //   id="home"
    //   className="h-screen flex flex-col justify-center items-center text-center bg-neutral-light"
    // >
    //   <h1 className="text-5xl font-bold text-neutral-dark">
    //     Hi, I'm <span className="text-primary">Akash</span>
    //   </h1>

    //   {/* 👇 Typewriter */}
    //   <h2 className="mt-4 text-xl text-gray-600">
    //     I am a{' '}
    //     <span className="text-primary font-semibold">
    //       <TypeAnimation
    //         sequence={[
    //           'Full Stack Developer',
    //           1500,
    //           'Backend Developer',
    //           1500,
    //           'System Designer',
    //           1500,
    //           'Problem Solver',
    //           1500,
    //         ]}
    //         speed={50}
    //         repeat={Infinity}
    //         cursor={true}
    //       />
    //     </span>
    //   </h2>

    //   <p className="mt-4 text-gray-600 max-w-xl">
    //     I craft fast, scalable web apps and enjoy solving real-world problems
    //     through code.
    //   </p>

    //   <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
    //     View Work
    //   </button>
    // </section>
  );
}
