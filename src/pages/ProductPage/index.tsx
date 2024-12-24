import { ProductsCatalog } from "../../modules/ProductModule"
import { ProductCard } from "../../modules/ProductModule/ProductCard"
import bannerLarge from "../../assets/Products/bannerImage_large.png";

export const ProductPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3 justify-between">
          <h1 className="heading">карта товара</h1>
          <a href="#" className="text-left text-[#303030] font-semibold uppercase leading-[120%] hover:underline">
          Наш <br/> телеграм
          </a>
        </div>
        <ProductCard
          isLarge
          banner={bannerLarge}
          heading="Два кода на 6350 VP (5350+1000) (РФ | ЕС | СНГ)"
          description={"Универсальный код активации для регионов: Россия / Европа / СНГ / Турция Получение кода активации Код будет отправлен на адрес электронной почты, указанный при оплате. Пожалуйста, проверьте также папку 'Спам'. Подходящие регионы'"}
          price={2000}
          href="#"
        />        
      </div>
      <ProductsCatalog />
    </div>
  )
}