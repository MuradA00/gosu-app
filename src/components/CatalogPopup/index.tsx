import { Button } from "../Button";
import image from "../../assets/Products/productBanner_second.png";

export const CatalogPopup = () => {
  return (
    <div className="box absolute top-full right-0 z-10 min-w-[360px] !rounded-tr-none">
      <div className="flex flex-col gap-2">
        <span className="text-2xl">Корзина товаров</span>
        <span className="h-[1px] w-full bg-[rgba(255,255,255,.4)] block"></span>
      </div>
      <ul className="flex flex-col gap-2 py-2.5">
        {Array.from({length: 4}).map(() => (
          <li className="flex items-center gap-2.5">
            <img 
              className="flex-shrink-0 w-8 h-8 rounded-[4px]"
              src={image} 
              alt="image" 
            />
            <div className="leading-[100%]">
              <span className="blok text-xs line-clamp-1 max-w-[188px]">Два кода на 6350 VP (5350+1000) (РФ | ЕС | СНГ)</span>
              <span className="font-medium text-white/40">1x2000 RUB</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-1.5">
        <span className="h-[1px] w-full bg-[rgba(255,255,255,.4)] block"></span>
        <div className="flex items-center justify-between">
          <div className="leading-[100%] flex flex-col">
            <span className="text-white/40 text-sm">Стоимость</span>
            <span className="text-xl">2000 RUB</span>
          </div>
          <div className="leading-[100%] text-left flex flex-col">
            <span className="text-white/40 text-sm">Всего</span>
            <span className="text-xl">10 товаров</span>
          </div>
        </div>
        <Button className="!bg-[#fff] !text-black !min-h-[50px] !text-xl">
          Приобрести
        </Button>
      </div>
    </div>
  )
}