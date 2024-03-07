

const Header = () => {
  return (
    <>
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

    </>
  )
}

export default Header