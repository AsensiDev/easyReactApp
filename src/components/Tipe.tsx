
export type TipeProps = {
    image: string
}

export default function Tipe({image} : TipeProps) {
  return (
    <div className=" w-80 h-80 cursor-pointer transition-transform hover:-translate-y-1">
        <img src={`../../public/${image}.jpg`}
            className=" w-full h-full relative"
            alt="" 
            />
    </div>
  )
}
