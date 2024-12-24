import { Button } from "../../components/Button"
import { ProductCard } from "./ProductCard"
import { ProductList } from "./ProductList"
import bannerImage_first from "../../assets/Products/productBanner_first.png";

import { productsListMocked, productsListMockedSecond } from "../../products.mock";
import { ProductCardSingle } from "./ProductCard/ProductCardSingle";
import { useState } from "react";
import { FilterPopup } from "../../components/FilterPopup";

export const ProductsCatalog = () => {
  const [isFilterPopupOpened, setFilterPopupOpened] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-2 justify-between mb-2 relative">
        <h2 className="heading">
          товары
        </h2>
        <Button
          style={{
            backgroundColor: !isFilterPopupOpened ? "#303030" : "#fff"
          }}
          onClick={() => setFilterPopupOpened(prev => !prev)} 
          className={isFilterPopupOpened ? "text-black rounded-b-none" : "text-white"}
        >
          Фильтры
        </Button>
        {isFilterPopupOpened && <FilterPopup />}
      </div>
        <div className="flex flex-col gap-2.5 xl:gap-4">
          <ProductList list={productsListMocked} />        
          <ul className="grid grid-cols-2 xl:grid-cols-5 gap-2.5 xl:gap-5">
            <ProductCardSingle />
            {Array.from({length: 2}).map(() => 
              <ProductCard
                banner={bannerImage_first}
                href="#"
                price={2000}
                className="[&>img]:h-[134px] min-h-fit"
                description="Продажа кода на 475 VP (РФ | ЕС | СНГ)"
              />
            )}
        </ul>
        <ProductList list={productsListMockedSecond} />               
      </div>      
    </div>
  )
}