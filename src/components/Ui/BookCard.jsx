import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const BookCard = ({book}) => {
    return (
         <Link to={`/bookDetails/${book.bookId}`} className="card-body card bg-base-100 w-96 shadow-lg space-y-3 ">
           
              <figure className="p-7 rounded-xl bg-base-300">
              <img
                src={book.image}
                alt= {book.bookName}
                className=" h-[245px] rotate-10"
              />
            </figure>
           
            <div className="">
              <h2 className="card-title mb-2">
               {
                book.tags.map((tag, index) => (
                    <div key={index} className="badge badge-accent badge-soft">{tag}</div>
                ))
               }
                
              </h2>
              <h2 className=" font-bold text-xl">  {book.bookName}</h2>
              <p className="font-semibold text-lg">{book.author}</p>
              
              <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl mt-4">

                <div className="font-semibold ">{book.category}</div>
                <div className=" font-semibold flex gap-2 items-center">{book.rating} <FaRegStar /></div>

              </div>
            </div>
          </Link>
    );
};

export default BookCard;