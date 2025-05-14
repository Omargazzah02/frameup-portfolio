'use client'
import { useState, useEffect } from 'react'

type Colors = {
  colorA: string
  colorB: string
}

const Navbar = () => {
  const [colors, setColors] = useState<Colors>({
    colorA: '#C0C0C0',
    colorB: '#BF0001',
  })

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-a', colors.colorA)
    root.style.setProperty('--color-b', colors.colorB)
  }, [colors])

  const toggle = () =>
    setColors(({ colorA, colorB }) => ({
      colorA: colorB,
      colorB: colorA,
    }))

  return (
    <div className="w-full relative">
      {/* Toggle color button */}
      <div
        className="w-9 h-9 flex overflow-hidden flex-col cursor-pointer rounded-full fixed z-40 top-2 left-4"
        onClick={toggle}
      >
        <div className="w-full h-1/2 bg-[var(--color-b)] animated-bg" />
        <div className="w-full h-1/2 bg-[var(--color-a)] animated-bg" />
      </div>

      <div className="z-30 lg:absolute fixed lg:w-full flex lg:justify-end max-lg:p-6 max-lg:flex-col  right-0 lg:top-2 items-start -top-4  ">
        {/* Desktop Nav */}
        <nav className="lg:flex basis-2/3 hidden">
          <ul className="flex justify-around w-full">
            <li><a href="#" className="text-white hover:text-gray-300">ABOUT ME</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">MY WORKS</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">MY SERVICES</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">CONTACT ME</a></li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="w-full lg:hidden space-y-3 ">
          <input type="checkbox" id="toggleList" className="hidden peer" />

          <label htmlFor="toggleList" className="cursor-pointer text-2xl text-white">
            <i className="fa-solid peer-checked:fa-caret-up fa-caret-down transition-all"></i>
          </label>

          <nav>
            <ul className="list-container hidden peer-checked:flex flex-col gap-3 ">
              <li className="list-item"><a href="#" className="text-white">ABOUT ME</a></li>
              <li className="list-item"><a href="#" className="text-white">MY WORKS</a></li>
              <li className="list-item"><a href="#" className="text-white">MY SERVICES</a></li>
              <li className="list-item"><a href="#" className="text-white">CONTACT ME</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
