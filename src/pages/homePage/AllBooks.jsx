import React, { use } from "react";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books");
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center m-10"> Books</h2>

      {books.map((book) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm ">
            <figure>
              <img
                src={book.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-accent badge-soft ">Young Adult</div>
                <div className="badge badge-accent badge-soft">Identity</div>
              </h2>
              <h2 className=" font-bold text-xl">  {book.bookName}</h2>
              <p className="font-semibold text-lg">{book.author}</p>
              
              <div className="card-actions justify-end">
                
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBooks;
