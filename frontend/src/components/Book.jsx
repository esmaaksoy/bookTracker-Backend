import { useNavigate } from 'react-router-dom';

const Book = ({title}) => {
  const navigate = useNavigate();
  const truncatedTitle = title?.length > 12 ? title?.substring(0, 12) + ' ...' : title;
  return ( 
    <div className="h-[200px] w-[150px] border border-gray-500 flex items-end gap-3 cursor-pointer" onClick={()=>navigate("/:id")}>
      <div className="h-[100%] w-[10px] border border-gray-500"></div>
      <div className="h-[30px] w-[80%] rounded-lg mb-4 border border-gray-500 px-2 text-sm overflow-hidden whitespace-nowrap">{truncatedTitle}</div>
    </div>
  );
};

export default Book;
