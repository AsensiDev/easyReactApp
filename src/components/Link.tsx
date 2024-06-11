
export type LinkProps = {
    name: string
}

export default function Link({name} : LinkProps) {
  return (
    <a href="#" className=" text-2xl text-white hover:text-fuchsia-300">
        {name}
    </a>
  )
}
