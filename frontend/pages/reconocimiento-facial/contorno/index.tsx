import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import Image from 'next/image'
import { useState } from 'react'

const contour = '/images/contour.svg'

export const Contorno = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [result, setResult] = useState('')

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  const submitHandler = () => {
    if (!isSelected) {
      alert('No hay archivo seleccionado')
      return
    }

    const formData = new FormData()

    formData.append('img', selectedFile)

    fetch('http://localhost:8000/ocr', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => setResult(result.Resultado))
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <NavBar img="/images/aig.png" />
      <div className="text-center ">
        <div className="mt-10 xl:mt-32 mb-10">
          <Image src={contour} width="100" height="100" alt="" />
          <p className="text-md font-semibold mt-5">
            Por favor introduzca una imagen para su procesamiento a texto.
          </p>
          <div className="mt-10 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md mx-64">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-800 hover:text-blue-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-800"
                >
                  <a>Subir archivo</a>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={changeHandler}
                  />
                </label>
                <p className="pl-1">or soltar archivos aquí.</p>
              </div>
              <p className="text-xs text-gray-500">
                soporta formatos PNG y JPG hasta 10MB.
              </p>
            </div>
          </div>

          <button
            className="btn btn-primary p-3 mt-10 transition duration-500 rounded-lg text-white bg-blue-800 hover:bg-blue-900 shadow-md hover:shadow-none btn-block btn-lg"
            onClick={submitHandler}
          >
            Correr
          </button>
        </div>
        <h1 className="text-2xl tracking-tight font-m text-gray-900 md:text-5xl">
          <span className="block text-blue-900 xl:inline">Resultado</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-64">
          {result}
        </p>

        <Footer title="Autoridad de Innovación Gubernamental" />
      </div>
    </>
  )
}

export default Contorno
