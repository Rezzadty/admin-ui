import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-start md:items-center">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-6">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 text-center grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="bg-gray-200 p-5 rounded hover:bg-blue-300 active:bg-blue-300">
            Basic
            <br />
            Rp 50.000
          </div>
          <div className="bg-blue-200 p-5 rounded hover:bg-blue-300 active:bg-blue-300 transform scale-105 border-2 border-blue-200">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-5 rounded hover:bg-blue-300 active:bg-blue-300">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen grid grid-cols-12 gap-2">
          <header className="col-span-12 bg-gray-300 p-4">Header</header>
          <aside className="col-span-12 md:col-span-3 bg-gray-200 p-4">Sidebar</aside>
          <main className="col-span-12 md:col-span-9 bg-white p-4 border">Content</main>
          <footer className="col-span-12 bg-gray-300 p-4">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border flex flex-col md:flex-row md:items-center space-y-4 md:space-y-2 md:space-x-6">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 mx-auto md:mx-0 flex-shrink-0"
          />
          <div className="flex flex-col text-center md:text-left md:pl-4">
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App