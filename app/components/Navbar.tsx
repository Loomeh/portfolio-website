"use client";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from 'react';

const useIsDesktop = (): boolean => {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    useEffect(() => {
        const MOBILE_BREAKPOINT = 768;

        const checkIsDesktop = () => {
            const viewportWidth = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            setIsDesktop(viewportWidth >= MOBILE_BREAKPOINT);
        };

        checkIsDesktop();

        window.addEventListener('resize', checkIsDesktop);

        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    return isDesktop;
};

export default function Navbar() {
    const isDesktop = useIsDesktop();
    return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
}