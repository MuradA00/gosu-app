import logo from "../../assets/Header/logo.svg";
import { Button } from "../Button";
import { footerLinks } from "./constants";

export const Footer = () => {
  return (
    <footer className="bg-gray p-6 rounded-tl-[10px] rounded-tr-[10px]">
      <div className="xl:flex-row flex-col flex xl:items-center justify-between gap-y-8 gap-x-2">
        <div className="flex flex-col md:flex-row md:items-center xl:gap-24 flex-1 justify-between xl:justify-normal gap-y-2">
          <div className="flex flex-col gap-1.5 text-sm font-medium">
            <img
              className="max-w-[114px]" 
              src={logo} 
              alt="logo" 
            />
            <span>GOSU-Shop © 2024</span>
          </div>   
          <div className="flex flex-col md:flex-row md:items-center gap-y-1.5 gap-x-20 text-sm font-medium">
            {footerLinks.map(({category, links}) => (
              <div className="flex flex-col gap-1.5">
                <span className="text-sm">
                  {category}
                </span>
                <ul className="flex flex-col gap-1.5">
                  {links.map(({text, url}) => 
                    <a 
                      className="text-white/40 text-sm duration-300 transition-colors hover:text-white" 
                      href={url}
                    >
                      {text}
                    </a>
                  )}
                </ul>
              </div>
            ))}
          </div>       
        </div>
        <div className="bg-red p-[14px] rounded-[10px] grid [@media(min-width:440px)]:grid-cols-2 gap-1 text-white max-w-[452px] gap-y-3">
          <div className="[&>*]:leading-[110%]">
            <span className="text-base md:text-xl uppercase">Telegram GOSU</span>
            <p className="text-[8px] md:text-[10px]">
              Подпишитесь на наш телеграм канал чтобы быть в курсе всех последних новостей, акций, и обновлений
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Button className="!bg-[#fff] !text-black text-sm md:text-base px-2">
              Наш Телеграм канал
            </Button>
            <a href="#" className="text-[10px] hover:underline">
              https://t.me/telegramlink
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}