import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import Geocode from "react-geocode";
import { useState } from "react";

// Geocode.setApiKey("AIzaSyBbGzH8N4wZYI3haxyktwT0G-QqA13fJyg");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

// Set custom marker icon for Leaflet
L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

const routeDetails = [
  {
    cutomerLocation:
      "College House, 94 Kumaratunga Munidasa Mawatha, Colombo 00700",
    serviceProviderLocation: "no 11 5/4 Nelson Place, Colombo 06",
  },
];

export default function Routing() {
  const map = useMap();
  const [waypoints, setWaypoints] = useState([]);

  useEffect(() => {
    if (!map) return;

    const convertAddressToLatLng = async (address) => {
      try {
        const response = await Geocode.fromAddress(address);
        const { lat, lng } = response.results[0].geometry.location;
        return L.latLng(lat, lng);
      } catch (error) {
        console.error("Error converting address to LatLng:", error);
        return null;
      }
    };

    const convertRouteDetailsToWaypoints = async () => {
      const customerLocation = routeDetails[0].cutomerLocation;
      const serviceProviderLocation = routeDetails[0].serviceProviderLocation;
      const customerLatLng = await convertAddressToLatLng(customerLocation);
      const serviceProviderLatLng = await convertAddressToLatLng(
        serviceProviderLocation
      );
      return [serviceProviderLatLng, customerLatLng];
    };

    convertRouteDetailsToWaypoints().then((waypoints) => {
      setWaypoints(waypoints);
    });
  }, [map]);

  useEffect(() => {
    if (waypoints.length === 0) return;

    const routingControl = L.Routing.control({
      waypoints,
      routeWhileDragging: true,
    }).addTo(map);

    return () => {
      if (map.hasLayer(routingControl)) {
        map.removeControl(routingControl);
      }
    };
  }, [map, waypoints]);

  return null;
}
