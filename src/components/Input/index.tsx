import clsx from "clsx"

export const Input = ({
  ...props
}: JSX.IntrinsicElements["input"]) => {
  const {className, ...rest} = props
  return (
    <input 
      className={clsx(
        className,
        "min-h-[50px] px-4 border-white/40 transition-colors border-[2px] border-solid outline-none duration-300 focus-visible:border-white/80 rounded-lg font-medium text-white bg-[transparent] placeholder:text-white"
      )}
      type="text" 
      {...rest} 
    />
  )
}