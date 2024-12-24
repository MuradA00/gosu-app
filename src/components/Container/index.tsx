import { HTMLAttributes, ReactNode } from "react"
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({
  children,
  ...props
}: Props) => {

  return (
    <div
      {...props} 
      className="px-4 md:px-5 w-full mx-auto max-w-[1400px] pt-8 md:pt-[3.375rem] flex flex-col gap-10 min-h-[100dvh]"
    >
      <Header />
      <div className="flex-1 pb-24">
        {children}
      </div>
      <Footer />
    </div>
  )
}