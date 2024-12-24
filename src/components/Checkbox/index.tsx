export const Checkbox = ({...props}: JSX.IntrinsicElements["input"]) => {

  return (
    <label className="flex items-center cursor-pointer relative w-fit" htmlFor="check-2">
      <input
        {...props} 
        type="checkbox" 
        className="peer h-[30px] w-[30px] cursor-pointer transition-all appearance-none border-[#FF4655] border-solid border-[1px] rounded-lg bg-gray" 
        id="check-2"
      />
      <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red w-5 h-5 transition-opacity duration-200 rounded-md"></span>
      </label>
  )
}