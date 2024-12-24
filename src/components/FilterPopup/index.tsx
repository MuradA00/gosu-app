import clsx from "clsx"
import { useState } from "react"

export const FilterPopup = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  return (
    <div className="box flex flex-col gap-2.5 absolute top-full right-0 !rounded-tr-none">
      <span>Выберите необходимые настройки</span>
      <ul className="flex flex-col gap-2.5">
        {Array.from({length: 5}).map((_, i) => (
          <li
            onClick={() => setSelectedOptionIndex(i)} 
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div
              className={clsx(
                "w-5 h-5 rounded-full transition-colors duration-300",
                selectedOptionIndex === i ? "bg-red" : "bg-[#fff]" 
              )}
            ></div>
            Фильтр {i + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}