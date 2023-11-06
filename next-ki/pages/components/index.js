import image from "next/image";
import Navbar from './components/Navbar'
import head from "next/head";


export default function Home() {
  return (
<>
<Head>
  <title>Home | Belajar Next JS</title>
  <meta name='description' content='Belajar Next JS' />
</Head>
      <><Navbar/></>
      <image src='/vercel.svg' alt='Logo Vercel' width={200} height={100}/>
      <h1>ini halaman Home</h1>
      
      </>
  );
}