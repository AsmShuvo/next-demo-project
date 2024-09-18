"use client"

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const session = useSession();
    // console.log("session: ", session)

    // if (pathname == "/dashboard") {
    //     return (
    //         <ul className='bg-[#212121]'>
    //             <li>dashboard</li>
    //             <li>cart</li>
    //             <li>payments</li>
    //         </ul>
    //     )
    // }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/about"}>About</Link></li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                            <li><Link href={"/posts"}>posts</Link></li>
                            <li><Link href={"/meals"}>meals</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                        <li><Link href={"/posts"}>posts</Link></li>
                        <li><Link href={"/meals"}>meals</Link></li>
                    </ul>
                </div>
                {
                    !session?.data ?
                        <div className="navbar-end">
                            <Link href={"/api/auth/signin"}>
                                <button className="btn btn-xs">
                                    Login
                                </button>
                            </Link>
                        </div>
                        :
                        <div className="navbar-end flex gap-2">
                            <h6>{session?.data?.user?.name}</h6>
                            <h6 className="text-gray-600 text-sm">{session?.data?.user?.type}</h6>
                            <Image className="rounded-full" src={session?.data?.user?.image} alt="user image" width={30} height={30} />
                            <button onClick={() => signOut()} className="btn btn-sm bg-red-700">logout</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;