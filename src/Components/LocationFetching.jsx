
import React ,{useState}from "react";

import Map, { Marker } from "react-map-gl";
import { useParams } from "react-router-dom";

const LocationFetching = () => {
  const apiKey =
    "pk.eyJ1IjoiZW1pbGxzaGlqdSIsImEiOiJjbHdkcXQwcXMwN2oyMmlxanpxeHV0MnpvIn0.RNUnWz60Xtvl26z65jOISw";

  const { first, second } = useParams();

  const longitude = parseFloat(first);
  const latitude = parseFloat(second);

  const [viewState, setViewState] = useState({
    longitude: longitude,
    latitude: latitude,
    zoom: 16,
  });

  const changeMap = (evt) => {
    setViewState(evt.viewState);
  };

  return (
    <>
      <Map
        initialViewState={{ ...viewState }}
        mapboxAccessToken={apiKey}
        onMove={changeMap}
        style={{ width: "100%", height: "1000px" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <img
            className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
            style={{ width: "100px", height: "100px" }}
            src={
              "http://res.cloudinary.com/dwqtoz0ig/image/upload/v1723803458/nearbychat/zvtkwdp8ztjquqfpa0wt.png"
            }
            alt="Bordered avatar"
          />
        </Marker>
      </Map>
    </>
  );
};

export default LocationFetching;
