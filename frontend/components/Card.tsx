import Image from 'next/image'

interface CardProps {
  title: string
  image: string
}

export default function Card(props: CardProps) {
  return (
    <button className="py-16 px-20 bg-gray-100 w-auto rounded-xl shadow-md hover:shadow-none hover:bg-gray-50 focus:shadow-inner focus:bg-gray-200 transition duration-500">
      <Image src={props.image} width="280" height="280" alt={props.title} />
      <div className="mt-5">
        <h3 className="card-title font-medium text-xl">{props.title}</h3>
      </div>
    </button>
  )
}
