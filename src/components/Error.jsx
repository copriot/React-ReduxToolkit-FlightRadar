import React from "react";

const Error = ({ message }) => {
  return (
    <div className="Loader-wrapper">
      <h2>Üzgünüz bir hata oluştu</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
