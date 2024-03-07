import Book from "../components/Book";

const Home = () => {
  return (
    <>
      <div className="flex gap-8 justify-center items-end border-b border-b-gray-800 w-[50%] m-auto">
        <div className="flex items-end">
          <div className="h-[80px] w-[20px] border border-gray-500"></div>
          <div className="h-[50px] w-[20px] border border-gray-500"></div>
          <div className="h-[60px] w-[20px] border border-gray-500"></div>
        </div>
        <h1 className="text-4xl ">
          Books<span className="font-whisper text-5xl pl-2">Read</span>
        </h1>
        <div className="flex items-end">
          <div className="h-[50px] w-[20px] border border-gray-500"></div>
          <div className="h-[80px] w-[20px] border border-gray-500"></div>
        </div>
      </div>
      <div className="flex p-10 gap-4">
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
}

export default Home


