'use client';
import Link from 'next/link';
import  {useRouter}  from 'next/router';


const Navbar: React.FC = () => {
    const router = useRouter();

    return (
        <nav>
            <button onClick={() => router.push('/')}>Home</button>
            <Link href="/about"><button>About</button></Link>
            <Link href="/contact"><button>Contact</button></Link>
        </nav>
    );
};

export default Navbar;