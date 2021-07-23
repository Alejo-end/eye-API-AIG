//Nav Bar component
import Link from 'next/link'
import Image from 'next/image'

interface NavProps {
  img: any
}

export default function NavBar(props: NavProps) {
  return (
    <div className="w-auto px-4 sm:px-6 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center py-1 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <Image
              src={props.img}
              alt="logo"
              width="220"
              height="65"
              className="navbar-brand"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-end md:flex-1 lg:w-0">
          <a
            href="/docs"
            className="whitespace-nowrap text-base font-medium px-4 py-2 text-gray-500 hover:text-gray-900"
          >
            Ver Documentación
          </a>
          <Link href="/login">
            <a className="hidden ml-8 whitespace-nowrap md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-800 hover:bg-blue-900">
              Iniciar Sesión
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
