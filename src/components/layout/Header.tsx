import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <img 
              src="https://pbs.twimg.com/profile_images/1656626983617323010/xzIYc6hK_400x400.png" 
              alt="Starknet Logo" 
              className="w-8 h-8 rounded-full"
            />
            <Link 
              href="/" 
              className="text-white font-semibold text-lg hover:text-blue-400 transition-colors"
            >
              Starknet Agent
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/about" 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="/docs" 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <a 
              href="https://github.com/yourusername/starknet-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;