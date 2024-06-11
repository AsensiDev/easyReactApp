import Catalogue from "./components/Catalogue"
import Contacts from "./components/Contacts"
import Navbar from "./components/Navbar"
import Packs from "./components/Packs"

function App() {

  return (
    <>
      <header className=" flex items-center w-full bg-black h-20"> 
        <div className="flex justify-around items-center h-20 w-4/5 mx-auto">
          <h1 className=" text-5xl font-bold text-white">Floristería</h1>
          <Navbar />
        </div>
      </header>

      <section className=" relative w-full h-80 bg-cover bg-center opacity-80 flex items-center justify-center" 
               style={{backgroundImage: "url('../public/banner.jpg')"}}
               >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className=" text-8xl text-white font-bold z-10">
          "Colores que pintan emociones"
        </h1>
      </section>
      
      <section className=" flex items-center w-full bg-fuchsia-400 h-auto">
        <Catalogue />
      </section>

      <section className=" bg-fuchsia-600 w-full h-auto mt-10 p-10 flex gap-x-10">
        <Packs />
      </section>

      <footer className=" bg-black w-full h-32 flex items-center justify-center gap-x-44">
       <Contacts /> 
      </footer>

      
    </>
  )
}

export default App
