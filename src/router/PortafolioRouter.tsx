import { Route, Routes } from "react-router-dom"
import { ScrollTopBehavior } from "../components"
import { NotFound } from "../view"


export const PortafolioRouter = () => {
  return (
    <>
            <ScrollTopBehavior />
        <Routes>
            <Route path="/" element={<NotFound />}></Route>
            <Route path="marvel" element={ <NotFound/> } ></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </>
  )
}