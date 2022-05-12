import { makeStyles } from "@material-ui/core";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "white",
    minHeight: "100vh",
    margin: 0, 
  }
}));


function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
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