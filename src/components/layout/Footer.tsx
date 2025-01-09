import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsTelegram, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1 - KasarLabs Logo and Terms */}
          <div className="flex flex-col space-y-4">
            <div className="w-[125px]">
              <Image 
                src="https://github.com/KasarLabs/brand/blob/main/kasar/logo/KasarWhiteLogo.png?raw=true"
                width={125} 
                height={40} 
                alt="kasarlabs" 
                className="dark:invert"
              />
            </div>
            <div className="text-neutral-400 text-sm flex flex-wrap gap-1">
              <a 
                href="https://pay.kasar.io/pages/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
              >
                Terms
              </a>
              <span>.</span>
              <a 
                href="https://pay.kasar.io/pages/general-conditions-of-sale"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
              >
                Conditions
              </a>
              <span>.</span>
              <a 
                href="https://pay.kasar.io/pages/legal-information"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
              >
                Legal
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="sm:mt-0">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.starknet.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Starknet
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.starknet.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="sm:mt-0">
            <h3 className="text-white font-semibold mb-4">Contact us</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://twitter.com/kasarlabs" 
                target="_blank" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <BsTwitter size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </Link>
              <Link 
                href="https://t.me/+jZZuOamlUM5lNWNk" 
                target="_blank" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <BsTelegram size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </Link>
              <Link 
                href="https://github.com/kasarlabs" 
                target="_blank" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <BsGithub size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-400 text-sm">
            © {new Date().getFullYear()} KasarLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;