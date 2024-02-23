import { Route, Routes } from "react-router-dom"
import App from "../../App"
import Layout from "../Layout/Layout"


const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element = {<Layout/>}>
            <Route index element = {<App />}/>
        </Route>
    </Routes>
    </>
  )
}

export default Router
