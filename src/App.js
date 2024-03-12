import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./pages/coinpage";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";





function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header color="transparent" />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage/>}  exact/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;