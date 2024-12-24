import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routes"
import { HomePage } from "./pages/HomePage"
import { Container } from "./components/Container"
import { PaymentPage } from "./pages/PaymentPage"
import bg from "./assets/appBackground.png";
import { ProductPage } from "./pages/ProductPage"
import { useEffect, useState } from "react"
import { Button } from "./components/Button"

export const App = () => {
  const [isCookesOpened, setCookiesOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCookiesOpened(true), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }} 
      className="overflow-hidden bg-[100%_auto] bg-fixed bg-left-top bg-no-repeat"
    >
      {isCookesOpened && (
        <div className="fixed bottom-5 right-5 box max-w-[360px] z-20">
          <p className="leading-[120%] mb-2.5 text-sm">
            Агент, для оптимизации твоего опыта мы используем куки. Жми на кнопку и сразу приступим к миссии?          
          </p>
          <Button
            onClick={() => setCookiesOpened(false)} 
            className="!min-h-[50px] !bg-[#fff] !text-black w-full !text-xl"
          >
            Принять Cookie
          </Button>
        </div>        
      )}
      <Container>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />      
          <Route path={ROUTES.PRODUCT} element={<ProductPage />} />      
          <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />      
        </Routes>      
      </Container>      
    </div>
  )
}