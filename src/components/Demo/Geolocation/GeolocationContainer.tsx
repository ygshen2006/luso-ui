// This is the container component
import { useEffect, useState } from "react";
import Geolocation from "./Geolocation";

const GeolocationContainer = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longtitude, setLantitude] = useState<number | null>(null);

    const handleSuccess = ({ coords: { latitude, longitude } }: {
        coords: {
            latitude: number,
            longitude: number
        }
    }) => {
        setLatitude(latitude);
        setLantitude(longitude);
    };


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess);
        }
    }, [navigator]);


    return (
        <>
            <Geolocation latitude={latitude} longtitude={longtitude}/>
        </>
    );
};

export default GeolocationContainer;