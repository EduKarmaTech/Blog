import Navbar from "../components/Navbar"
import Largeblog from "../components/largeblog"
import Miniblog from "@/components/miniblog"
import Footer from "../components/Footer"

const Home = ({}) => {
  return (
    <>
      <div>
        <div className="px-16">
          <Navbar
            className="text-black "
            logo={"/Logo-black.png"}
            show={""}
            theme={"text-black"}
          />
        </div>
        <div className='bg-[url("/blog-cover.png")] bg-cover bg-no-repeat py-24 px-96 text-center md:px-6'>
          <div className="flex flex-col justify-center items-center px-20 md:px-2">
            <h1 className="text-4xl font-bold text-white my-2">
              Inclusion, Innovation and Diversity 
            </h1>
            <span className="text-white text-sm font-normal">
              A collection of scrolls about our people, capabilities,
              research, and the ever-changing experiences we create.
            </span>
          </div>
        </div>

        <div className="first-part px-16 my-4">
          <div>
            <Largeblog />
          </div>

          <div className="grid grid-cols-3 my-6 md:grid-cols-1">
          <Miniblog />
          <Miniblog />
          <Miniblog />
          <Miniblog />
          <Miniblog />
          <Miniblog />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
