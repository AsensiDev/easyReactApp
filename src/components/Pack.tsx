export type PackProps = {
    event: string
}

export default function Pack({event} : PackProps) {
  return (
    <div className=" w-3/5 mx-auto h-auto">
          <div style={{backgroundImage: "url('../public/banner.jpg')"}}
               className=" w-full h-60 bg-cover bg-center rounded-lg flex items-center justify-center">
                <h2 className=" font-bold text-8xl text-fuchsia-600 bg-white p-3 rounded-2xl">{event}</h2>
          </div>
    </div>
  )
}
