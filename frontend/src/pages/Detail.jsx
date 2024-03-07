import { useParams } from "react-router-dom";
import Book from "../components/Book";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBin3Line } from "react-icons/ri";
import { detail } from "../helpers/Data";
const Detail = () => {
  const { id } = useParams();
  return (
    <div className="p-[2rem] ">
      <h1 className="text-4xl text-center">
        Book<span className="font-whisper text-5xl pl-2">Review</span>
      </h1>
      <div className="flex gap-4 text-3xl text-gray-500 justify-end px-[4rem]">
        <RiEditBoxLine />
        <RiDeleteBin3Line />
      </div>
      <div className="flex justify-between p-[4rem]">
        <div className="w-[60%]">
          {detail.map(({ header }, index) => (
            <h1 key={index} className="border border-gray-500 p-2">
              {header} <span className="ml-1">merhaba</span>
            </h1>
          ))}
        </div>
        <Book />
      </div>
      <div className="p-[4rem]">
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          className="border border-gray-500 w-[100%] p-4"
          placeholder="You can enter your notes here"
        ></textarea>
      </div>
    </div>
  );
};

export default Detail;
