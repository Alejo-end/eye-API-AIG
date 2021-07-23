import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Link from 'next/link'

const contour = '/images/contour.svg'
const person = '/images/person.svg'
const percent = '/images/percent.svg'

export const FaceRecognition = (): JSX.Element => (
  <>
    <NavBar img="/images/aig.png" />
    <div className="text-center">
      <div className="m-10 xl:m-16">
        <p className="text-md">Por favor seleccione una opción</p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row gap-10">
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={person} title="Reconocimiento de persona" />
          </a>
        </Link>
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={percent} title="Porcentaje de parecido" />
          </a>
        </Link>{' '}
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={contour} title="Reconocimiento de Rostro y Contorno" />
          </a>
        </Link>
      </div>
      <Footer title="Autoridad de Innovación Gubernamental" />
    </div>
  </>
)

export default FaceRecognition
