import { useState } from "react";
import Book from "../components/Book";
import Header from "../components/Header";
import Form from "../components/Form";

const Home = () => {
  const [book, setBook] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });
  return (
    <div className="p-[4rem]">
      <div className="flex gap-8 justify-center items-end border-b border-b-gray-800 w-[50%] m-auto">
        <Header />
      </div>
      <div className="flex justify-end py-4">
        <button
          className="bg-[#F6F6F6] p-3 rounded-xl border border-gray-500"
          onClick={() => setOpen(true)}
        >
          Added New Book
        </button>
      </div>
      {open && <Form setOpen={setOpen} data={data} setData={setData} setBook={setBook}/>}

      <div className="flex p-10 gap-4">
        {book?.length === 0 ? (
          <div className="p-[10rem]">
            <h1 className="text-3xl text-center text-gray-500 ">
              You haven't added any books yet. Please enter the books you want
              to read!
            </h1>
          </div>
        ) : (
          <Book {...data}/>
        )}
      </div>
    </div>
  );
};

export default Home;
