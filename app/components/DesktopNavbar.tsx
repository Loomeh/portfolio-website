import Link from 'next/link';
import { Raleway } from 'next/font/google';
import { JSX } from 'react';

const raleway = Raleway({ weight: ['500'], subsets: ['latin'] });

const navItems: { [label: string]: string } = {
  "Home": "/",
  "Programming Projects": "/programming_projects",
  "Game Projects": "/game_projects",
  "Extra": "/extra",
  "Contact": "/contact",
};

export default function DesktopNavbar(): JSX.Element {
  return (
    <nav className={raleway.className}>
      <div className="flex justify-center py-1">
        <div className="rounded-3xl px-1 py-5 bg-[#292929] text-white text-xl">
          {Object.entries(navItems).map(([name, url]) => (
            <Link
              key={name}
              href={url}
              className="
                p-5 
                rounded-3xl 
                transition-colors duration-200 ease-in-out 
                hover:bg-white 
                hover:text-black
              "
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}