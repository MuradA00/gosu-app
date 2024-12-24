import clsx from "clsx"
import { productsListMocked } from "../../../products.mock"
import { ProductCard } from "../ProductCard"
import { Button } from "../../../components/Button";

interface Props {
  banner: string;
  price: number; 
  description: string; 
  href: string; 
  isTelegram?: boolean; 
}

export const ProductList = ({
  list
}: {
  list: Props[]
}) => {
  return (
    <div className="flex flex-col gap-5">
      <ul className="grid grid-cols-[100%] [@media(min-width:440px)]:grid-cols-2 md:!grid-cols-3 xl:!grid-cols-5 gap-2.5 xl:gap-4 grid-rows-1">
        {list.map((product, i) => (
          product.isTelegram ? (
            <li className="bg-red rounded-[14px] p-[14px] flex flex-col justify-between font-medium">
              <div className="flex flex-col">
                <span className="text-2xl uppercase">Telegram GOSU</span>
                <p className="text-sm leading-[120%]">Подпишитесь на наш телеграм канал чтобы быть в курсе всех последних новостей, акций, и обновлений</p>
              </div>
              <div className="flex items-center flex-col gap-2.5">
                <span>Наш телеграм</span>
                <Button className="!bg-[#fff] w-full !text-black" href="#">
                  Наш телеграм канал
                </Button>
              </div>
            </li>
          ) : (
            <ProductCard 
              key={product.banner}
              className={clsx(
                i === productsListMocked.length - 2 && "md:col-span-2 xl:col-span-1",
                i === productsListMocked.length - 1 && "col-span-1 [@media(min-width:440px)]:col-span-2 md:!col-span-1",
                "min-h-fit [&>img]:h-[190px] xl:[&>img]:h-[252px]"
              )}
              {...product} 
            />            
          )
        ))}
      </ul>   
    </div>
  )
}