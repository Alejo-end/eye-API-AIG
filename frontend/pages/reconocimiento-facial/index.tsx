import NavBar from '../../components/NavBar'
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

export default FaceRecognition
