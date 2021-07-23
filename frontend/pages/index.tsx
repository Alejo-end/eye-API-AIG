import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
const faceRec = '/images/face-recognition.svg'
const textRec = '/images/text-recognition.svg'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <NavBar img="/images/aig.png" />
    <div className="text-center">
      <div className="m-10 xl:m-16">
        <h2 className="font-semibold text-lg">
          Bienvenidos al API de Reconocimiento Facial y OCR.
        </h2>
        <p className="text-md">Por favor seleccione que desea inspeccionar.</p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row gap-10">
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={faceRec} title="Reconocimiento Facial" />
          </a>
        </Link>
        <Link href="/reconocimiento-de-texto">
          <a>
            <Card image={textRec} title="Reconocimiento de Texto" />
          </a>
        </Link>
      </div>
      <footer
        className="bg-blue-900
             text-md text-white text-center
             border-t-4 border-red-700
             fixed
             inset-x-0
             bottom-0
             p-3"
      >
        &copy; {new Date().getFullYear()} Autoridad de Innovación Gubernamental
        <small className="uppercase text-xs mt-4 block text-gray-300">
          🚀 Built by Alejandro
        </small>
      </footer>
    </div>
  </>
)

export default Home
