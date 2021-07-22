import Head from 'next/head'
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
      <div className="flex justify-center gap-10">
        <Card image={faceRec} title="Reconocimiento Facial" />
        <Card image={textRec} title="Reconocimiento de Texto" />
      </div>
    </div>
  </>
)

export default Home
