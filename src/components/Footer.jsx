import React from 'react';
import { Link } from "react-router-dom";
import InstaIcon from '../assets/instagram.png';
import FacebookIcon from '../assets/facebook.png';
import TwitterIcon from '../assets/twitter.png'
const Footer = () => {
    return (
       <footer className="mt-14 bg-[#234f41] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            KeenKeeper
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
           Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white/90">
            Social Links
          </h3>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#234f41] transition hover:scale-105"
            >
              <img src={InstaIcon} alt="Instagram icon" className='h-7 w-7 object-contain' />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#234f41] transition hover:scale-105"
            >
              <img src={FacebookIcon} alt="Facebook Icon" className='h-7 w-7 object-contain' />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#234f41] transition hover:scale-105"
            >
              <img src={TwitterIcon} alt="Twitter Icon" className='h-7 w-7 object-contain' />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-5 text-sm text-white/70 md:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;