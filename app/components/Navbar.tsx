"use client";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from 'react';

const isDesktop = (): boolean => {
    // Initialize with null or a default value based on a common desktop width
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    
    useEffect(() => {
        const MOBILE_BREAKPOINT = 768;
        
        // Function to check viewport width
        const checkIsDesktop = () => {
            const viewportWidth = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            setIsDesktop(viewportWidth >= MOBILE_BREAKPOINT);
        };
        
        // Check initial window size
        checkIsDesktop();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIsDesktop);
        
        // Cleanup event listener
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []); // Empty dependency array means this effect runs once on mount
    
    return isDesktop;
};

export default function Navbar()
{
    return isDesktop() ? <DesktopNavbar/> : <MobileNavbar/>
}