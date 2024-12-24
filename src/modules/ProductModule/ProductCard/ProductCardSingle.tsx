import { Button } from "../../../components/Button"
import icon from "../../../assets/icons/bagIcon.svg";
import bannerImage_first from "../../../assets/Products/productBanner_first.png";

export const ProductCardSingle = () => {
  return (
    <div 
      className="grid xl:grid-cols-[65%_35%] bg-gray rounded-[10px] col-span-2 xl:col-span-3 overflow-hidden relative h-[190px] xl:h-auto after:absolute after:w-full after:h-full xl:after:hidden after:bg-[rgba(0,0,0,.5)] after:top-0 after:left-0"
    >
      <img 
        className="absolute xl:relative w-full top-0 left-0 xl:h-[268px] rounded-[10px] object-cover h-full" 
        src={bannerImage_first} 
        alt="banner" 
      />
      <div className="p-[14px] xl:p-4 relative overflow-hidden flex flex-col justify-between z-[1]">
        <div className="flex flex-col gap-2.5">
          <span className="text-2xl xl:text-sm font-medium">
            Два кода на 6350 VP (5350+1000) (РФ | ЕС | СНГ)
          </span>     
          <div className="flex flex-col mb-4 xl:mb-0">
            <span className="text-sm hidden xl:block">Кратко о товаре:</span>
            <p className="text-[11px] hidden xl:block">
            Универсальный код активации для регионов: Россия / Европа / СНГ / Турция Получение кода активации Код будет отправлен на адрес электронной почты, указанный при оплате. Пожалуйста, проверьте также папку "Спам". Подходящие регионы
            </p>
          </div>     
        </div>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex flex-col leading-[150%]">
            <span className="xl:text-white/40 text-xs">Стоимость</span>
            <span className="font-medium text-xl leading-[100%]">2000 RUB</span>
          </div>
          <Button 
            href="#" 
            className="min-h-10 xl:min-h-9 xl:self-stretch xl:px-3 whitespace-nowrap"
          >
            <img src={icon} alt="icon" />
            В корзину
          </Button>
        </div>             
      </div>         
    </div>    
  )
}