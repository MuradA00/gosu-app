import clsx from "clsx";
import { cols } from "../constants";
import { PaymentRow } from "./PaymentRow";

export const PaymentTable = () => {
  const headings = ["Наименование товара", "Цена", "Кол-во", "Сумма", "Удалить"];

  return (
    <div>
      <ul className={clsx(
        "min-h-[60px] items-center bg-red px-5 rounded-tl-xl rounded-tr-xl",
        cols
      )}>
        {headings.map((head, i) => (
          <li
            key={i} 
            className={clsx(
            "text-xl",
            i === 0 ? "text-left block" : "text-center hidden lg:block"
          )}
          >
            {head}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-5 px-5 py-2.5 bg-gray rounded-bl-xl rounded-br-xl">
          {Array.from({length: 2}).map((_, i) => (
            <PaymentRow
              key={i}
              initialAmount={10}
              total={200}
              productName="Два кода на 6350 VP (5350+1000) (РФ | ЕС | СНГ)"
              price={20}
            />
          ))}     
      </div>
    </div>
  )
}