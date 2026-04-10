import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId:bookParamsId} = useParams();
  console.log( bookParamsId, "bookId");

  const books = useLoaderData();
  console.log(books, "books");

  const expectedBook = books.find((book) => book.bookId === Number( bookParamsId));
 
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = expectedBook ;
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 bg-base-100 shadow-sm my-10 container mx-auto">
      <figure className="w-full flex items-center justify-center bg-base-300 rounded-2xl">
        <img
          src={image}
          alt="Album"
          className="p-10 h-[600px] "
        />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-4xl font-bold">{bookName}</h2>
        <h2 className=" text-xl  text-gray-700">By: {author}</h2>
        <p className="text-lg py-2  border-y border-gray-300" >{category}</p>
        <p> <span className="font-bold ">Review:</span> <span className="text-gray-600">{review}</span></p>
        <div className="card-title mb-2 border-b border-gray-300 pb-5">
               {
                tags.map((tag, index) => (
                    <div key={index} className="badge badge-accent badge-soft">tag  {tag}</div>
                ))
               }
                
        </div>
        <div className="space-y-3">
            <p><span className="text-gray-600">Number of Pages:</span> <span className="font-medium">{totalPages}</span></p>
            <p><span className="text-gray-600">Publisher:</span> <span className="font-medium">{publisher }</span></p>
            <p><span className="text-gray-600">Year of Publishing:</span> <span className="font-medium">{yearOfPublishing}</span></p>
            <p><span className="text-gray-600">Rating:</span> <span className="font-medium">{rating}</span></p>
             
        </div>
        <div className="card-actions ">
          <button className="btn ">Read</button>
          <button className="btn btn-accent text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
