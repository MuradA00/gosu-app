import { News } from "../../modules/NewsModule";
import { ProductsCatalog } from "../../modules/ProductModule";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <News />
      <ProductsCatalog />
    </div>
  )
}