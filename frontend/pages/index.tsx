import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import Footer from '../components/Footer'
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
      <div className="mt-10 xl:mt-32 mb-10">
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
      <Footer title="Autoridad de Innovación Gubernamental" />
    </div>
  </>
)

export default Home
