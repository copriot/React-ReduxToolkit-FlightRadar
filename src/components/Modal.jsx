import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../redux/actions";
import Error from "./Error";
import Loader from "./Loader";

const Modal = ({ id, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.info);
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(getInfo(id));
  }, []);
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          info && (
            <div className="info-wrapper">
              <div className="info">
                <h2>{info.aircraft.model.text}</h2>
                <h2>{info.aircraft.model.code}</h2>
              </div>
              <p>
                <span>Registiration Code :</span>
                <span>{info.aircraft.registration}</span>
              </p>
              <p>
                <span>Company Name :</span>
                <span>{info.airline.name}</span>
              </p>
              <img src={info.aircraft.images.large[0].src} alt="planePhoto" />

              <p>
                <span>Departure :</span>
                <a href={info.airport.origin.website} target="_blank">
                  {info.airport.origin.name}
                </a>
              </p>
              <p>
                <span>Destination :</span>
                <a href={info.airport.destination.website} target="_blank">
                  {info.airport.destination.name}
                </a>
              </p>

              <p>Uyarı</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
