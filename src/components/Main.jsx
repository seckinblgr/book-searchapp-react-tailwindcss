import React, { useEffect, useState } from "react";
import {
  UilSearch,
  UilEnvelopeAlt,
  UilInstagram,
  UilGithubAlt,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons"; // adding a icon library

import Card from "./Card";
import axios from "axios";

function Main() {
  const [search, setSearch] = useState("Harry Potter"); // ınput state
  const [bookData, setBookData] = useState([]); // list books state

  // api request with axios
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBi9KdCYNoK1GRhLb94P-JRlCiaq3qGkFU` +
          `&maxResults=25`
      )
      .then((res) => setBookData(res.data.items));
    setSearch("");
  }, []);

  // searchbook funnctions
  const searchBook = (e) => {
    if (search === "") {
      // if input is empty we have a error
      alert("Please fill the search field !");
    }
    e.preventDefault(); // defautlt apge refreesh
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBi9KdCYNoK1GRhLb94P-JRlCiaq3qGkFU` +
          `&maxResults=25`
      )
      .then((res) => setBookData(res.data.items));

    setSearch(""); // clear input after click or submit
  };

  return (
    <>
      <div>
        <div className="header bg-[conic-gradient(var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
          <div className="title flex-col sm:flex-row">
            <h1 className="font-bold font-serif text-7xl  text-cyan-50 px-10 py-10">
              The World's <br /> Most Popular <br /> Online <br /> Book Platform
            </h1>
          </div>
          <div className="search w-3/4 flex-row sm:flex-col  mx-auto ">
            <div className="input flex justify-center items-center  ">
              <form onSubmit={searchBook}>
                <div className="input flex  tracking-normal justify-center items-center mb-6">
                  <input
                    value={search} // input value search state
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="border-2 tracking-wide border-black capitalize  text-center  rounded-full outline-none p-4"
                  />
                  <div className="ml-2 btn flex cursor-pointer hover:scale-125 justify-center items-center  transition-all ">
                    <button type="submit">
                      <UilSearch
                        onClick={searchBook}
                        className=" flex  justify-center items-center"
                        size={34}
                        color={"white"}
                      ></UilSearch>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" gap-6 py-14  w-screen bg-purple-200 max-h-min justify-evenly items-center flex flex-wrap flex-col sm:flex-row mx-auto">
          {bookData && <Card book={bookData} />}
        </div>
        <div className="  bottom-0 h-fitt text-white  bg-gray-900 flex justify-center items-center p-8">
          <div className="social  flex  space-x-5  ">
            <div className="border-2 rounded-full hover:border-white transition-all hover:scale-110 border-gray-500 p-2">
              <a
                href="mailto:secoblgr52@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilEnvelopeAlt size={30} color={"#ecfeff"}></UilEnvelopeAlt>
              </a>
            </div>
            <div className="border-2 border-gray-500 hover:scale-110 transition-all hover:border-white rounded-full p-2">
              <a
                href="https://www.instagram.com/seckinblgr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilInstagram size={30} color={"#ecfeff"}></UilInstagram>
              </a>
            </div>
            <div className="border-2 border-gray-500 hover:scale-110 transition-all hover:border-white rounded-full p-2">
              <a
                href="https://github.com/seckinblgr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilGithubAlt size={30} color={"#ecfeff"}></UilGithubAlt>
              </a>
            </div>
            <div className="border-2 border-gray-500 hover:scale-110  transition-all hover:border-white rounded-full p-2">
              <a
                href="https://twitter.com/seckinbulgur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilTwitter size={30} color={"#ecfeff"}></UilTwitter>
              </a>
            </div>
            <div className="border-2 border-gray-500  hover:scale-110 transition-all  hover:border-white rounded-full p-2">
              <a
                href="https://www.linkedin.com/in/seckinbulgur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilLinkedin size={30} color={"#ecfeff"}></UilLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
