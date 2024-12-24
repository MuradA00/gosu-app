import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  url: string;
  bannerUrl: string;
  heading: string;
  headingClassName?: string;
}

export const NewsBlock = ({
  url,
  bannerUrl,
  heading,
  headingClassName,
  ...props
}: Props) => {
  const {className, ...rest} = props;
  return (
    <a 
      style={{
        backgroundImage: `url(${bannerUrl})`, 
      }}
      {...rest}
      href={url}
      className={clsx(
        "bg-cover relative overflow-hidden rounded-[10px] border-[2px] border-solid border-[#FF4655] p-5 flex items-end bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-news-block after:pointer-events-none [&>*]:relative bg-center after:-scale-y-100 after:transition-all after:duration-300 after:opacity-60 hover:after:opacity-100 bg-no-repeat",
        className,
      )} 
    > 
      <span className={clsx(
        "font-semibold text-xl relative z-[1]",
        headingClassName
      )}>
        {heading}
      </span>
    </a>
  )
}