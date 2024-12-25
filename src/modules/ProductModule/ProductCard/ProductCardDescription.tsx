import icon from "../../../assets/icons/bagIcon.svg";
import { Button } from "../../../components/Button";

export const ProductCardDescription = ({
  price, 
  description,
  heading,
  href,
  isLarge,
}: {
  price: number, 
  description: string,
  heading: string,
  href: string,
  isLarge?: boolean
}) => {
  return (
    isLarge ? (
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-medium hidden xl:block">
            {heading}
          </span>     
          <div className="flex flex-col gap-1 mb-4 xl:mb-0">
            <span className="text-base xl:text-2xl">Кратко о товаре:</span>
            <p className="text-white/40 text-xs xl:text-base xl:max-w-[340px]">{description}</p>
          </div>     
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center gap-4 justify-between">
          <div className="flex flex-col leading-[150%] gap-2">
            <span className="text-white/40 text-xl hidden xl:block">Стоимость</span>
            <span className="font-medium text-[2rem]">{price} RUB</span>
            <span className="block xl:hidden text-white/40 text-sm">{heading}</span>
          </div>
          <Button 
            href={href} 
            className="min-h-11 xl:self-stretch xl:text-xl [&>img]:w-[30px] [&>img]:h-[30px]"
          >
            <img src={icon} alt="icon" />
            В корзину
        </Button>
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-medium uppercase leading-[100%] block">{price} RUB</span>
          <p className="text-white/40 text-sm font-medium leading-[120%]">
            {description}
          </p>
        </div>
        <Button href={href} className="[@media(max-width:768px)]:min-h-10 !px-3">
            <img src={icon} alt="icon" />
            В корзину
        </Button>
      </div>      
    )
  )
}