interface FooterProps {
  title: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer
      className="bg-blue-900
             text-md text-white text-center
             border-t-3 border-red-800
             fixed
             inset-x-0
             bottom-0
             p-3"
    >
      &copy; {new Date().getFullYear()} {props.title}
    </footer>
  )
}
