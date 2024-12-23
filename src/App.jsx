import React, { useEffect } from "react";
import Header from "./components/Header";
import List from "./pages/List";
import Map from "./pages/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buttons from "./components/Buttons";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  //tr sınırları içerisindeki uçuşları al ve store aktar
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Buttons />
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
