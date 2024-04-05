// This is the container component
import { useEffect, useState } from "react";
import Geolocation from "./Geolocation";

const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longtitude, setLongtitude] = useState<number | null>(null);

  const handleSuccess = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setLatitude(latitude);
    setLongtitude(longitude);
  };
  useEffect(() => {
    const fetchGelocation = async () => {
      const result = await fetch("http://localhost:5000/geolocation");
      const data = await result.json();
      handleSuccess(data);
    };

    fetchGelocation();
  }, [navigator]);

  return (
    <>
      <Geolocation latitude={latitude} longtitude={longtitude} />
    </>
  );
};

export default GeolocationContainer;
