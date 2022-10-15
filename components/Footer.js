import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-40">
        <footer className="flex flex-col items-center justify-center w-full h-24">
            <ul className="flex flex-row items-center">
                <li className="mr-10">
                    <Link href="/about">
                        <a className="text-lg font-n">About</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/contact">
                        <a className="text-lg font-n">Contact</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/privacy">
                        <a className="text-lg font-n">Privacy</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/help">
                        <a className="text-lg font-n">Help</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/faq">
                        <a className="text-lg font-n">FAQ</a>
                    </Link>
                </li>
            </ul>
        </footer>
        <div className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    © 2022 RunAsh{' '} All rights reserved
                </a>
            </div>
        </div>
        
            
    );
    }
