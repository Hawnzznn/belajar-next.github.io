import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";

const index = ({data}) => {
    return (
        <>
            <Head>
                <title>About  |  Belajar Next JS</title>
                <meta name="description" content="Belajar Next JS" />
            </Head>
            <Navbar />
            <Image src="/next.png" alt="Logo Vercel" width={400} height={200} />
            <h1>Ini halaman About</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <Link href={`/components/about/${item.id}`}>
                        <a>Detail</a>
                    </Link>
                </div>
            ))}
        </>
    );
}
export default index;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            data,
        },
        
    }
}