import Tipe from "./Tipe"

export default function Catalogue() {
  return (
    <div className=" grid grid-cols-3 w-3/5 mx-auto h-auto justify-items-center mt-10 rounded-md gap-y-12">
         <Tipe image='colorida'/> 
         <Tipe image='girasol'/> 
         <Tipe image='margarita'/> 
         <Tipe  image='naranja'/> 
         <Tipe image='rosa'/> 
         <Tipe image='violeta'/> 
    </div>
  )
}
