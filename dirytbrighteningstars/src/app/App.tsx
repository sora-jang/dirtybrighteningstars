import { StarCharacter } from '@/app/components/StarCharacter';
import { InteractiveStar } from '@/app/components/InteractiveStar';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white font-sunflower">
      {/* Interactive rolling star */}
      <InteractiveStar />
      
      {/* Header */}
      <header className="flex justify-between items-center px-20 py-6">
        <button onClick={() => setCurrentPage('home')} className="text-sm hover:text-yellow-400 transition-colors">dirtybrighteningstars</button>
        <nav className="flex gap-8 text-sm">
          <button 
            onClick={() => setCurrentPage('about')} 
            className={`hover:text-yellow-400 transition-colors ${currentPage === 'about' ? 'text-yellow-400' : ''}`}
          >
            about
          </button>
          <button 
            onClick={() => setCurrentPage('products')} 
            className={`hover:text-yellow-400 transition-colors ${currentPage === 'products' ? 'text-yellow-400' : ''}`}
          >
            products
          </button>
          <button 
            onClick={() => setCurrentPage('contact')} 
            className={`hover:text-yellow-400 transition-colors ${currentPage === 'contact' ? 'text-yellow-400' : ''}`}
          >
            contact
          </button>
        </nav>
      </header>

      {/* About Page */}
      {currentPage === 'about' && (
        <main className="flex items-center justify-center px-20 min-h-[calc(100vh-200px)]">
          <h1 className="text-[24px] font-normal text-center font-indie-flower">
            Our existence is for those with wounded hearts
          </h1>
        </main>
      )}

      {/* Products Page */}
      {currentPage === 'products' && (
        <main className="flex items-center justify-center px-20 min-h-[calc(100vh-200px)]">
          <div className="text-center font-indie-flower text-[24px] font-normal space-y-2">
            <p>Products page content coming soon</p>
          </div>
        </main>
      )}

      {/* Contact Page */}
      {currentPage === 'contact' && (
        <main className="flex items-center justify-center px-20 min-h-[calc(100vh-200px)]">
          <div className="text-center font-indie-flower text-[24px] font-normal space-y-2">
            <p>This initiative is currently run by an individual.</p>
            <p>With the exception of a 10% operational cost, all donations are given to charity.</p>
            <p className="mt-6 text-yellow-400">KB Kookmin Bank | 786101-00-084912</p>
            <p className="text-yellow-400">Seojin Jang</p>
            <p className="text-yellow-400">South Korea</p>
          </div>
        </main>
      )}

      {/* Home Page */}
      {currentPage === 'home' && (
        <main className="px-20 pt-20 pb-48 min-h-[calc(100vh-300px)]">
          <div className="max-w-6xl">
            {/* Main heading */}
            <h1 className="text-8xl mb-16 font-light" style={{ lineHeight: '0.9', fontWeight: 300 }}>
              <div>no matter</div>
              <div className="font-send-flowers text-yellow-400">what</div>
              <div>you're a</div>
              <div className="font-send-flowers text-yellow-400">brightening</div>
              <div>star</div>
            </h1>

            {/* Arrow */}
            <div className="relative inline-block mb-20">
              <svg width="50" height="263" viewBox="0 0 50 263" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-auto">
                <path d="M1.5 0V260L48.5 229.775" stroke="white" strokeWidth="3"/>
              </svg>
            </div>

            {/* Project Section */}
            <div className="max-w-2xl">
              <h2 className="text-3xl mb-6 text-yellow-400">
                project 1. Eye Eye Tooth Tooth (EETT)
              </h2>
              <p className="text-lg leading-relaxed">
                Are you a celebrity affected by malicious comments?<br />
                This Chrome extension identifies users who post malicious comments, adds them to a blacklist, and filters their comments from view.
              </p>
            </div>
          </div>
        </main>
      )}

      {/* Footer with stars */}
      <footer className="fixed bottom-0 left-0 right-0">
        {/* Ground/hill shape */}
        <div className="relative">
          <svg width="1920" height="128" viewBox="0 0 1920 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M199 1.5376L6.5 62.5376L0 128.038H916.5L631 25.5376L482.5 1.5376L348 25.5376L199 1.5376Z" fill="#333333" stroke="#333333" strokeWidth="3"/>
            <path d="M864.5 3.5376L663.5 34.5376L912.5 126.538H1919V78.5376L1822 34.5376L1544.5 3.5376L1296 15.0376L1112 3.5376H864.5Z" fill="#333333" stroke="#333333" strokeWidth="3"/>
          </svg>
        </div>
      </footer>
    </div>
  );
}