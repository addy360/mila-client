import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <div
          className="
                flex flex-col
                align-middle
                items-center
                justify-items-center
                py-4
              "
        >
          <h2 className="text-gray-800 text-5xl font-thin mb-4">Categories</h2>
          <select
            name=""
            id=""
            className="py-3 w-1/2 px-2 bg-transparent border rounded shadow-md outline-none"
          >
            <option value="">News</option>
            <option value="">Sports</option>
            <option value="">Entertainment</option>
          </select>
        </div>

        {/* posts */}
        <Posts />
      </div>
      <Footer />
    </>
  );
}
