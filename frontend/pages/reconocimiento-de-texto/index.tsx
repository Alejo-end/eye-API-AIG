import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Link from 'next/link'
const idcard = '/images/idcard.svg'
const passport = '/images/passport.svg'
const document = '/images/document.svg'

export const TextRecognition = (): JSX.Element => (
  <>
    <NavBar img="/images/aig.png" />
    <div className="text-center">
      <div className="mt-10 xl:mt-32 mb-10">
        <p className="text-md">Por favor seleccione una opción</p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row gap-10">
        <Link href="/reconocimiento-de-texto/pasaporte">
          <a>
            <Card image={passport} title="Lectura de Pasaporte" />
          </a>
        </Link>
        <Link href="/reconocimiento-de-texto/documento">
          <a>
            <Card image={document} title="Lectura de Documento" />
          </a>
        </Link>{' '}
        <Link href="/reconocimiento-de-texto/cedula">
          <a>
            <Card image={idcard} title="Lectura de cédula" />
          </a>
        </Link>
      </div>
      <Footer title="Autoridad de Innovación Gubernamental" />
    </div>
  </>
)

export default TextRecognition
