import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
function Map(props) {
  //Transform search results into {latitude:,logitude:

  const coordinates = props.searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/elliotalderson/cks0i6y5m1bb317lfd72ny8v4"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {props.searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer animate-bounce "
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
