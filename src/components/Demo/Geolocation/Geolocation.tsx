import { FC } from "react";
import { GeolocationInterface } from "types/SystemTypes";

// This is the presentation component
const Geolocation: FC<GeolocationInterface> = ({ latitude, longtitude }) => {
  return (
    <>
      <h4>
        Current location: ({latitude}, {longtitude})
      </h4>
    </>
  );
};

export default Geolocation;
