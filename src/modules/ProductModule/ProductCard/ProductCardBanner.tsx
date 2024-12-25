import clsx from "clsx";

export const ProductCardBanner = ({
  banner, 
  isLarge
}: {
  isLarge?: boolean;
  banner: string;
}) => {
  return (
    <img 
      className={clsx(
        isLarge ? "h-[252px] xl:h-full" : "h-[140px] [@media(min-width:768px)]:h-[252px]",
        "object-cover rounded-[10px]  w-full",
      )}
      src={banner} 
      alt="image" 
    />
  )
}