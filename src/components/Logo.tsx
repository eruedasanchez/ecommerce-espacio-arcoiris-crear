import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href={"/"} className="tabletL:mx-auto">
            <Image
                src={"/logo-esp-arcoiris-crear.png"}
                alt="logo-espacio-arcoiris-crear"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
                priority
            />
        </Link>
    );
}

export default Logo;