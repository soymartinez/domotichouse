import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    const router = useRouter();
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/temperatura', label: 'Temperatura' },
        { href: '/humedad', label: 'Humedad' },
        { href: '/aire', label: 'Aire' },
    ]

    return (
        <>
            <nav className={`fixed border-b border-transparent transition-colors duration-300 py-5 top-0 inset-x-0 z-50 ${scroll ? 'scrolled ease-in' : 'ease-out text-white'}`}>
                <div className="container lg:px-32 md:px-12 px-8 flex items-center justify-center max-w-[1200px]">
                    <div className='flex justify-between w-full'>
                        {
                            navLinks.map(({ href, label }) => (
                                <Link href={href} key={label}>
                                    <a className={`uppercase rounded-md px-2 md:px-6 py-2 font-semibold transition-colors duration-100 ${router.pathname === href ? 'text-black bg-neutral-100 hover:text-black' : 'text-neutral-400 hover:text-neutral-300'}`}>{label}</a>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
            <style jsx>{`
                nav {
                    height: 83px;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                }
                .container {
                    height: 42px;
                }
                .scrolled {
                    border-color: rgb(255, 255, 255, .1);
                    background-color: rgb(5, 5, 5, .5);
                    backdrop-filter: blur(4px);
                }
            `}</style>
        </>
    )
};
