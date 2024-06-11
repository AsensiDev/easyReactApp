import Link from "./Link"

export default function Navbar() {
  return (
    <nav className="flex gap-x-8">
        <Link  name='Catálogo' />
        <Link  name='Packs' />
        <Link  name='Contacto' />
    </nav>
  )
}
