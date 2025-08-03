"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LocateFixedIcon } from "lucide-react";

// fix Leaflet default icon bug--------------
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://i.ibb.co/PZXJWvDp/location-Icon-min.png",
  shadowUrl: "https://i.ibb.co/PZXJWvDp/location-Icon-min.png",
});

//icon for company location---------------
const redIcon = new L.Icon({
  iconUrl: "https://i.ibb.co/PZXJWvDp/location-Icon-min.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

//Click-to-pick location--------------
const LocationPicker = ({
  onSelect,
}: {
  onSelect: (pos: LatLngExpression) => void;
}) => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng);
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>Picked: {position.toString()}</Popup>
    </Marker>
  ) : null;
};

//zoom control inside map only-------
const CtrlScrollZoomHandler = ({
  mapContainerRef,
}: {
  mapContainerRef: React.RefObject<HTMLDivElement>;
}) => {
  const map = useMap();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const mapEl = mapContainerRef.current;
      if (!mapEl || !mapEl.contains(e.target as Node)) return;

      if (e.ctrlKey) {
        e.preventDefault();
        map.scrollWheelZoom.enable();

        clearTimeout((map as any)._zoomTimeout);
        (map as any)._zoomTimeout = setTimeout(() => {
          map.scrollWheelZoom.disable();
        }, 300);
      } else {
        map.scrollWheelZoom.disable();
      }
    };

    map.scrollWheelZoom.disable();
    map.touchZoom.disable();

    const mapDom = map.getContainer();
    mapDom.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      mapDom.removeEventListener("wheel", handleWheel);
    };
  }, [map, mapContainerRef]);

  return null;
};

const LocationMap = () => {
  const defaultCenter: LatLngExpression = [24.3745, 88.6042];
  const companyLocation: LatLngExpression = [24.3745, 88.6042];

  const [selectedLocation, setSelectedLocation] =
    useState<LatLngExpression | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hideHint = () => setShowScrollHint(false);
    window.addEventListener("click", hideHint);
    window.addEventListener("wheel", hideHint);
    return () => {
      window.removeEventListener("click", hideHint);
      window.removeEventListener("wheel", hideHint);
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="relative w-full h-[400px]">
      {showScrollHint && (
        <div className="absolute z-[999] top-4 left-1/2 -translate-x-1/2 bg-white/90 text-black px-4 py-1 text-sm rounded shadow">
          🔍 Press <b>Ctrl</b> + <b>Scroll</b> to zoom the map
        </div>
      )}

      <MapContainer
        center={defaultCenter}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Company Marker ------*/}
        <Marker position={companyLocation} icon={redIcon}>
          <Popup>🏢 Our Company Location</Popup>
        </Marker>

        {/* User-selected marker------------ */}
        <LocationPicker onSelect={(pos) => setSelectedLocation(pos)} />

        {/*  Scroll handler------------- */}
        <CtrlScrollZoomHandler mapContainerRef={mapContainerRef} />
      </MapContainer>
      {/* View larger map ------------------*/}
      <a
        href="https://www.google.com/maps?q=24.3745,88.6042"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 left-2 z-[999] bg-white/90 text-black text-sm px-3 py-1 rounded shadow hover:bg-white transition flex items-center gap-2"
      >
        <LocateFixedIcon className="text-orange-500" />{" "}
        <span>View larger map</span>
      </a>
    </div>
  );
};

export default LocationMap;
