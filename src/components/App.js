import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./generics/Body"

import Home from './pages/home/Index'

export default function App() {
  return (
    <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Body>
  )
}