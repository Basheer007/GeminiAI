import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import ResultGemini from "./components/ResultGemini"
import Search from "./components/Search"
import Header from "./components/Header"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gemini" element={<ResultGemini />} />
        </Routes>
        <Search />

      </BrowserRouter>


    </>
  )
}

export default App
