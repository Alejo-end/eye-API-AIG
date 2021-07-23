import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import Link from 'next/link'
const idcard = '/images/idcard.svg'
const passport = '/images/passport.svg'
const document = '/images/document.svg'

export const TextRecognition = (): JSX.Element => (
  <>
    <NavBar img="/images/aig.png" />
    <div className="text-center">
      <div className="m-10 xl:m-16">
        <p className="text-md">Por favor seleccione una opción</p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row gap-10">
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={passport} title="Lectura de Pasaporte" />
          </a>
        </Link>
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={document} title="Lectura de Documento" />
          </a>
        </Link>{' '}
        <Link href="/reconocimiento-facial">
          <a>
            <Card image={idcard} title="Lectura de cédula" />
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

export default TextRecognition
