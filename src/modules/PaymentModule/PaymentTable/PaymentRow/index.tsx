import { Button } from "../../../../components/Button";

import productImage from "../../../../assets/Products/productBanner_second.png";
import closeIcon from "../../../../assets/icons/closeIcon.svg";
import plusIcon from "../../../../assets/icons/plusIcon.svg";
import minusIcon from "../../../../assets/icons/minuseIcon.svg";
import trashcanIcon from "../../../../assets/icons/trashcanIcon.svg";
import clsx from "clsx";
import { cols } from "../../constants";

interface Props {
  productName: string;
  price: number;
  initialAmount: number;
  total: number;
}
export const PaymentRow = ({
  productName,
  price,
  initialAmount,
  total
}: Props) => {
  return (
    <ul className={clsx(
      "text-center text-xl !items-start lg:!items-center font-medium uppercase !flex lg:!grid flex-wrap gap-y-3",
      cols,
    )}
    >
      <li className="text-left flex items-center gap-5 mb-2.5 lg:mb-0">
        <img 
          className="w-10 lg:w-[60px] aspect-square rounded-[10px]" 
          src={productImage} 
          alt="icon" 
        />
        <span className="text-base lg:text-xl font-medium uppercase">
          {productName}
        </span>
      </li>    
      <li className="w-1/2 lg:w-full text-left lg:text-center">
        {price.toFixed(3)} rub
      </li>    
      <li className="flex items-center gap-2.5 w-1/2 lg:w-full justify-end lg:justify-center">
        <button className="bg-[rgba(255,255,255,.4)] flex justify-center items-center rounded-[4px] w-5 h-5">
          <img src={minusIcon} alt="" />
        </button>
        {initialAmount}
        <button className="bg-[rgba(255,255,255,.4)] flex justify-center items-center rounded-[4px] w-5 h-5">
          <img src={plusIcon} alt="" />
        </button>
      </li>    
      <li className="w-1/2 flex flex-col lg:w-full text-left lg:text-center leading-[100%]">
        <span className="!text-base block lg:hidden text-white/40 capitalize">Стоимость</span>
        {total.toFixed(3)} rub
      </li>    
      <li className="w-1/2 lg:w-full flex justify-center items-center">
        <button className="bg-[transparent] text-white outline-none hidden lg:flex">
          <img src={closeIcon} alt="" />
        </button>
        <Button className="flex lg:hidden !bg-[#fff] !text-black ml-auto !min-h-11">
          <img src={trashcanIcon} alt="icon" />
          Удалить
        </Button>
      </li>    
    </ul>
  )
}