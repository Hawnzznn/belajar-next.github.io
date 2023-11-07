import Head from "next/head";
import Navbar from "/.../components/Navbar";
import Image from "next/image";



const portofolio = () => {
    return (
        <>
         <Head>
            <title>portofolio | Belajar Next JS</title>
        </Head>
            <Navbar />
            <Image src="next.png" alt="Logo Vercel" width={300} height={200} />
            <h1>Ini halaman portofolio</h1>
        </>
    );
};

export default portofolio;