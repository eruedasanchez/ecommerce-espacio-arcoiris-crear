import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src='/logo-esp-arcoiris-crear.png'
                alt="logo-espacio-arcoiris-crear"
                width={100}
                height={100}
                priority
            />
        </Link>
    );
}

export default Logo;