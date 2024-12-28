import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./pages/List";
import Map from "./pages/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buttons from "./components/Buttons";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();
  //detayı gösterilecek ucusun id si
  const [detailId, setDetailId] = useState(null);
  //tr sınırları içerisindeki uçuşları al ve store aktar
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  // console.log(detailId);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Buttons />
        <Routes>
          <Route path="/" element={<Map setDetailId={setDetailId} />} />
          <Route path="/list" element={<List />} />
        </Routes>

        {/* detay id stateinde eleman varsa ekrana modal bas */}
        {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
      </BrowserRouter>
    </div>
  );
};

export default App;
