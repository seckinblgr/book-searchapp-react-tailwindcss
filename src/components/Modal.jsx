import React from "react";
import { UilTimesCircle } from "@iconscout/react-unicons";
import "../assets/style.css";

function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }
  let image =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="modal flex  bg-transparent justify-center items-center rounded-md  ml-auto  overflow-y-hidden ">
      <div className="glass  flex  justify-center items-center  p-10 mb-16">
        <div className="left w-9/12 sm:w-6/12 ">
          <img src={image} className="  h-full  sm:w-full rounded-md  " />
        </div>
        <div className=" right  w-9/12 px-3 pt-2 bg-slate-300">
          <div className="flex justify-end ">
            <span
              onClick={onClose}
              className="hover:scale-125 transition-all cursor-pointer"
            >
              <UilTimesCircle size={30}></UilTimesCircle>
            </span>
          </div>
          <div className="title p-2">
            <p className="text-3xl  font-medium">{item.volumeInfo.title}</p>
            <br />
            <p className="text-lg  ">{item.volumeInfo.subtitle}</p>
            <br />
            <p className="text-md   font-medium">{item.volumeInfo.authors}</p>
            <br />
            <p className="text-md  ">{item.volumeInfo.publisher}</p>
            <br />
            <p className="text-md  font-light ">
              {item.volumeInfo.publishedDate}
            </p>
            <br />
            <a href={item.volumeInfo.previewLink} target="_blank">
              <button className="w-32 bg-blue-600 h-10 rounded-md hover:bg-blue-400 transition-all text-white">
                More
              </button>
            </a>
            <br />
            <div className=" mt-10  ">{item.volumeInfo.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
