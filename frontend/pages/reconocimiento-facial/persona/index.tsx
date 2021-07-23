import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import Image from 'next/image'
const person = '/images/person.svg'

export const Persona = (): JSX.Element => (
  <>
    <NavBar img="/images/aig.png" />
    <div className="text-center">
      <div className="m-10 xl:m-16">
        <Image src={person} width="100" height="100" alt="" />
        <p className="text-md">
          Por favor introduzca la imagen para su procesamiento
        </p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row gap-10"></div>
      <Footer title="Autoridad de Innovación Gubernamental" />
    </div>
  </>
)

export default Persona
