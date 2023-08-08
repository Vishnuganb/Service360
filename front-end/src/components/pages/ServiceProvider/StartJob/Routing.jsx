import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

// Set custom marker icon for Leaflet
L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

// Routing component using Leaflet Routing Machine
export default function Routing() {
  const map = useMap(); // Get access to the map instance from react-leaflet

  // Effect to add routing control to the map
  useEffect(() => {
    if (!map) return; // Return if map instance is not available

    // Create a routing control with waypoints and options
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(6.9, 79.86), L.latLng(6.91189,79.848)],
      routeWhileDragging: true
    }).addTo(map);

    // Cleanup function to remove routing control when component unmounts
    return () => {
      if (map.hasLayer(routingControl)) {
        map.removeControl(routingControl);
      }
    };
  }, [map]); // Depend on the map instance to trigger the effect

  return null; // This component doesn't render anything itself
}