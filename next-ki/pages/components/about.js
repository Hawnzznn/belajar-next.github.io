import Head from "next/head";
import Navbar from "./components/navbar";
import Image from "next/image";

const about = ({data}) => {
    return (
        <>
            <Head>
                <title>About  |  Belajar Next JS</title>
                <meta name="description" content="Belajar Next JS" />
            </Head>
            <Navbar />
            <Image src="/next.png" alt="Logo Vercel" width={400} height={200}></Image>
            <h1>Ini halaman About</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </>
    );
};

export default about;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};