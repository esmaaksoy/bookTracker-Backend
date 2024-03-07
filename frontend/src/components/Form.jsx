import { input } from "../helpers/Data";
const Form = ({ setOpen, data, setData, setBook }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // if(data._id){
    //   putStock("brands",data)
    // }else{
    //   postStock("brands", data);
    // }
    setOpen(false);
    console.log(data)
    setBook(data)
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
  
      <form
        onSubmit={handleSubmit}
        className="w-[80%] lg:w-[30%] border border-gray-500 flex flex-col gap-4 p-8 sm:p-12 z-20 absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <button
          className="absolute top-0 right-4 text-xl sm:text-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          x
        </button>
        {input.map(({ type, placeholder, name }, index) => (
          <input
            type={type}
            className="border border-gray-500 p-1 sm:p-3"
            placeholder={placeholder}
            key={index}
            name={name}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="bg-[#F6F6F6] p-1 sm:p-3 rounded-xl border border-gray-500"
        >
          Submit
        </button>
      </form>

  );
};

export default Form;
