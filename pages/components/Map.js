import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pkAmir.eyJ1IjoidGVjaGtpZCIsImEiOiJja3ZxZnJ4M24xa2ljMzNxZnNxMzRhem00In0.ZmYGC7iuunOHG7vTu5uEDgKhan";
function Map(props) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.32784403206921, 13.046485264629496],
      zoom: 7,
    });
    if (props.Pickup) {
      AddtoMap(map, props.Pickup)
    }
    if (props.Drop) {
      AddtoMap(map, props.Drop)
    }
    if (props.Pickup && props.Drop) {
      map.fitBounds([
        props.Drop,
        props.Pickup
      ], {
        padding: 60
      })
    }
  }, [props.Pickup, props.Drop]);
  const AddtoMap = (map, cordinates) => {
    const marker1 = new mapboxgl.Marker({ color: 'black' })
      .setLngLat(cordinates)
      .addTo(map);
  }


  return <Wrapper id="map"></Wrapper>;
}

export default Map;
const Wrapper = tw.div`
  flex-1 h-1/2
`;
