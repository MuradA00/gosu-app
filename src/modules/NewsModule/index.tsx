import { NewsBlock } from "./NewsBlock";

import newsBannerImage_1 from "../../assets/Products/productBanner_first.png";
import newsBannerImage_3 from "../../assets/Products/productBanner_third.png";

export const News = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <h1 className="heading">
          Новости
        </h1>
        <a href="#" className="text-left text-[#303030] font-semibold uppercase leading-[120%] hover:underline">
          Наш <br/> телеграм
        </a>
      </div>
      <div className="flex flex-col lg:grid grid-cols-[0.68fr_0.32fr] gap-x-5 gap-y-2.5">
        <NewsBlock
          className="!p-2.5 h-[180px] lg:h-[334px] lg:!p-6"
          url="#"
          bannerUrl={newsBannerImage_1}
          heading="НАБОР АРКЕЙН 2.0"
          headingClassName="!text-xl xl:!text-5xl"
        />
        <div className="after:absolute after:w-[120px] after:bg-news-block-x lg:after:w-full after:h-full lg:after:bg-news-block after:bottom-0 after:left-0 lg:after:-scale-y-100 after:hidden lg:after:block after:pointer-events-none relative lg:after:h-1/2 -mr-4 after:m-0 after:z-[2]">
          <ul className="flex lg:h-[334px] overflow-y-auto lg:flex-col gap-5 disabled-scrollbar pr-4 lg:pr-0">
            {Array.from({length: 3}).map(() => (
              <NewsBlock
                url="#"
                bannerUrl={newsBannerImage_3}
                heading="НАБОР АРКЕЙН 2.0"
                className="min-h-[120px] lg:min-h-[140px] !p-2.5 min-w-[300px]"
              />
            ))}
          </ul>
        </div>
      </div>        
    </div>
  )
}