import Head from "next/head";
import Navbar from './components/Navbar';
import Image from "next/image";

const contact = () => {
    return (
        <>
        <Head>
            <title>contact | Belajar Next JS</title>
        </Head>
            <Navbar />
            <Image src="/vercel.svg" alt="Logo Vercel" width={300} height={200} />
            <h1>Ini halaman contact</h1>
        </>
    );
};

export default contact;