import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

export const getFlights = createAsyncThunk(
  "flight/getFlights",

  async () => {
    //parametreleri belirle
    const params = {
      bl_lat: "34.480238",
      bl_lng: "24.594651",
      tr_lat: "43.914447",
      tr_lng: "47.662137",
    };
    //api istegi
    const response = await api.get("/flights/list-in-boundary", { params });

    //apiden gelen dizi icindeki dizileri nesneye cevir
    const formatted = response.data.aircraft.map((item) => ({
      id: item[0],
      code: item[1],
      lat: item[2],
      lng: item[3],
    }));
    //  console.log(formatted);

    //aksiyonun payloadını belirler
    return formatted;
  }
);

export const getInfo = createAsyncThunk("info/getInfo", async (id) => {
  // api'dan uçuş detaylarını al
  const res = await api.get(`/flights/detail?flight=${id}`);

  // aksiyonun payload'Inı return et
  return res.data;
});
