import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMenuAlt4 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { FiThermometer } from 'react-icons/fi';
import { BiDroplet } from 'react-icons/bi';
import { TiWeatherWindy } from 'react-icons/ti';
import { ImHistory } from 'react-icons/im';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    function menuEvent() {
        setMenu(!menu);
    }

    const router = useRouter();
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/temperatura', label: 'Temperatura' },
        { href: '/humedad', label: 'Humedad' },
        { href: '/aire', label: 'Aire' },
        { href: '/logs', label: 'Logs' },
    ]

    const iconLinks = [
        { href: '/', Icon: BiHomeAlt, label: 'Home' },
        { href: '/temperatura', Icon: FiThermometer, label: 'Temperatura' },
        { href: '/humedad', Icon: BiDroplet, label: 'Humedad' },
        { href: '/aire', Icon: TiWeatherWindy, label: 'Aire' },
        { href: '/logs', Icon: ImHistory, label: 'Logs' },
    ]

    return (
        <>
            <nav className={`fixed border-b border-transparent transition-colors duration-300 py-5 top-0 inset-x-0 z-50 
            ${scroll ? 'scrolled ease-in' : 'ease-out text-white'}`}>
                <div className="container h-[42px] lg:px-32 md:px-12 px-8 flex items-center justify-center max-w-[1200px]">
                    <div className='text-3xl sm:hidden items-center flex justify-between w-full z-10 text-[#0b0d0e]'>
                        <div>
                            {
                                iconLinks.map(({ href, Icon, label }) => (
                                    href === router.pathname ?
                                        <Icon className={` ${scroll ? 'text-white' : ''}`} key={label} />
                                        : ''
                                ))
                            }
                        </div>
                        <span className='cursor-pointer' onClick={menuEvent}>
                            <HiMenuAlt4 className={`${menu ? 'hidden' : 'block'} ${scroll ? 'text-white' : ''}`} />
                            <GrFormClose className={`${menu ? 'block' : 'hidden'} ${scroll ? 'text-white' : ''}`} />
                        </span>
                    </div>
                    <div className={`sm:flex justify-between w-full sm:h-auto sm:relative absolute sm:top-0
                                  bg-white sm:bg-transparent px-8 sm:opacity-100 opacity-0 -top-[100vh] 
                                  transition-all ease-in duration-300 items-center
                                  ${menu ? 'opacity-100 top-[83px] h-screen' : ''}`}>
                        {
                            navLinks.map(({ href, label }) => (
                                <div className={`py-3 sm:py-0 max-w-max`} key={label} onClick={menuEvent}>
                                    <Link href={href}>
                                        <a className={`bg-transparent uppercase cursor-pointer m-0 text-lg rounded-md md:px-6 sm:py-2 sm:px-4 
                                                    font-semibold transition-colors duration-300 
                                        ${router.pathname === href
                                                ? 'text-[#0b0d0e] hover:text-[#0b0d0ed3] sm:bg-neutral-100'
                                                : 'text-neutral-400 hover:text-neutral-300'}`}>{label}</a>
                                    </Link>
                                </div>
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
                .scrolled {
                    border-color: rgb(255, 255, 255, .1);
                    background-color: rgb(5, 5, 5, .5);
                    backdrop-filter: blur(4px);
                }
            `}</style>
        </>
    )
};
