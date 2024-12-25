import { HTMLAttributes} from "react";

import clsx from "clsx";
import { ProductCardDescription } from "./ProductCardDescription";
import { ProductCardBanner } from "./ProductCardBanner";

interface Props extends HTMLAttributes<HTMLDivElement> {
  banner: string;
  heading?: string;
  price: number;
  description: string;
  href: string;
  isLarge?: boolean;
}

export const ProductCard = ({
  banner,
  price,
  description,
  isLarge,
  heading,
  href,
  ...props
}: Props
) => {
  const {className, ...rest} = props;
  return (
    <div
      {...rest} 
      className={clsx(
        "min-h-[390px] rounded-[10px] overflow-hidden bg-gray transition-all duration-300 border-[#111111] border-[1px] border-solid hover:border-[#FF4655]",
        isLarge && "grid xl:grid-cols-[65%_35%] rounded-[20px]",
        className,
      )}
    >
      <ProductCardBanner 
        isLarge={isLarge} 
        banner={banner} 
      />
      <div className={isLarge ? "p-[14px] xl:p-5" : "p-2.5 xl:p-[14px]"}>
        <ProductCardDescription 
          heading={heading || ""}
          price={price} 
          description={description}
          href={href}
          isLarge={isLarge} 
        />
      </div>
    </div>
  )
}