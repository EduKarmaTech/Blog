import Navbar from "../components/Navbar"
import Largeblog from "../components/largeblog"
import Blog from "../components/blog"
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
        <div className='bg-[url("/blog-cover.png")] bg-cover bg-no-repeat py-24 px-96 text-center'>
          <div className="flex flex-col justify-center items-center px-20">
            <h1 className="text-4xl font-bold text-white my-2">
              Inclusion, diversity and innovation
            </h1>
            <span className="text-white text-sm font-normal">
              A collection of stories about our people, our capabilities, our
              research, and the ever-changing face of our firm.
            </span>
          </div>
        </div>

        <div className="first-part px-16 my-4">
          <div>
            <Largeblog />
          </div>

          <div>{/*<Blog />*/}</div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
