import { Link } from "react-router-dom";
import { headerNavLinks } from "./constants";
import { Button } from "../Button";

import logo from "../../assets/Header/logo.svg";
import { useState } from "react";
import { CatalogPopup } from "../CatalogPopup";
import clsx from "clsx";
import { ChartSVG } from "../SVG/ChartSVG";

export const Header = () => {
  const [isCatalogOpened, setCatalogOpened] = useState(false);

  return (
    <div className="flex items-center justify-between relative">
      <img 
        className="max-w-[100px] md:max-w-[174px] w-full"
        src={logo} 
        alt="logo" 
      />
      <ul className="flex items-center gap-11">
        {headerNavLinks.map(({name, href}) => (
          href ? (
            <Link to={href} className="hidden md:flex text-xl font-medium">
            {name}
          </Link>
          ) : (
            <Button
              style={{
                backgroundColor: !isCatalogOpened ? "#303030" : "#fff"
              }}
              onClick={() => setCatalogOpened(prev => !prev)} 
              className={clsx(
                "!min-h-11 text-xl font-medium gap-2.5",
                isCatalogOpened && "!text-black !rounded-bl-none rounded-br-none"
              )}
            >
              <ChartSVG
                className="[&>path]:transition-all [&>path]:duration-300" 
                fill={isCatalogOpened ? "#000" : "#fff"} 
              />
              {name}
            </Button>
          )
        ))}            
      </ul>
      {isCatalogOpened && <CatalogPopup />}
    </div>
  )
}