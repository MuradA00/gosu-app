export const PaymentMethod = ({
  icon,
  description,
  wrapperUrl,
}: {
  icon: string;
  description: string;
  wrapperUrl: string;
}) => {
  return (
    <div 
      style={{
        backgroundImage: `url(${wrapperUrl})`
      }}
      className="box cursor-pointer !p-2.5 min-h-[100px] flex flex-col justify-between bg-fill bg-no-repeat border-[1px] border-[#FF4655] border-solid gap-6 md:gap-1"
    >
      <img
        className="max-w-[70px]" 
        src={icon} 
        alt="icon" 
      />
      <p className="leading-[120%] block text-sm md:text-xl font-medium">
        {description}
      </p>
    </div>
  )
}