import React from "react";
import "../assets/style.css";
import { useState } from "react";
import Modal from "./Modal";
function Card({ book }) {
  const [show, setShow] = useState(false); // modal show state
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item, index) => {
        // map books
        let image = //shorted api ref
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title;
        let author = item.volumeInfo.authors;
        {
          if (image && author != undefined) {
            // image and author check
            return (
              <>
                <div
                  key={index}
                  className="  bg-slate-100  hover:scale-105 glass cursor-pointer  hover:shadow-2xl  flex justify-center  w-[240px]  h-[350px] items-center text-center glass   transition-all card border-2 p-4  space-y-4 "
                >
                  <div
                    className="card"
                    onClick={() => {
                      setShow(true), setItem(item);
                    }}
                  >
                    <div className="image flex justify-center items-center mb-3 ">
                      <img src={image} className="rounded-sm" />
                    </div>
                    <div className="footer">
                      <div className="title mb-3">{title}</div>
                      <div className="author font-light">{author}</div>
                    </div>
                  </div>
                </div>
                <Modal
                  show={show}
                  item={bookItem}
                  onClose={() => setShow(false)}
                />
              </>
            );
          }
        }
      })}
    </>
  );
}

export default Card;
