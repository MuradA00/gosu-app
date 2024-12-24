import { Input } from "../../../components/Input"
import { PaymentMethod } from "../PaymentMethod"

import wrapperMethod_first from "../../../assets/Payment/paymentBoxWrapper_first.png";
import wrapperMethod_second from "../../../assets/Payment/paymentBoxWrapper_second.png";
import tBankIcon from "../../../assets/Payment/tBank_Icon.svg";
import piecesBankIcon from "../../../assets/Payment/piecesBank_icon.svg";
import { Button } from "../../../components/Button";
import { Checkbox } from "../../../components/Checkbox";

export const PaymentPanel = () => {
  return (
    <div className="grid xl:grid-cols-[0.725fr_0.275fr] gap-5">
      <div className="box flex flex-col gap-6 !pb-8">
        <div className="flex flex-col gap-1.5">
          <span className="label">* Выберите способ оплаты</span>
          <div className="grid grid-cols-2 gap-2.5">
            <PaymentMethod
              description="Оплачивайте покупки С T‑Pay без пластика"
              icon={tBankIcon}
              wrapperUrl={wrapperMethod_first}
            />
            <PaymentMethod
              description="Откладывайте оплату Но не шопинг"
              icon={piecesBankIcon}
              wrapperUrl={wrapperMethod_second}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-2.5">
          <div className="flex flex-col gap-2">
            <span className="label">* ВВЕДИТЕ ВАШУ ПОЧТУ</span>
            <Input placeholder="googlemail@gmail.com" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="label">* промо-код</span>
            <Input placeholder="googlemail@gmail.com" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="box flex flex-col gap-1.5 after:absolute after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-5 after:-top-2 after:bg-gray relative after:rotate-45 after:rounded-[4px]">
          <div className="flex items-center gap-2 justify-between">
            <span>N Товаров на сумму</span>
            <span>20.000 RUB</span>
          </div>
          <span className="w-full block h-[1px] bg-[rgba(255,255,255,.4)]"></span>
          <div className="flex items-center justify-between gap-1">
            <span className="text-white/40 block w-fit leading-[100%]">
              Итоговая стоимость:
            </span>
            <span className="whitespace-nowrap uppercase text-3xl font-medium">20.000 RUB</span>
          </div>
        </div>
        <Button className="order-2 xl:order-[initial] uppercase !min-h-[60px] !bg-[#fff] w-full !text-xl !text-black">
          оформить заказ
        </Button>
        <div className="flex items-start gap-1.5">
          <Checkbox />
          <p className="text-white/40 text-sm md:text-xl -mt-1 !leading-[120%]">
            Я принимаю условия <br className="hidden xl:inline-block" /> обработки персональных данных и пользовательского соглашения.
          </p>
        </div>        
      </div>
    </div>
  )
}