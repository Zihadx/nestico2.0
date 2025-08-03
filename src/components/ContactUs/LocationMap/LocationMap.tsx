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
import {
  LocateFixedIcon,
  MapPin,
  Phone,
  Clock,
  Mail,
  Building2,
  Globe,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Fix Leaflet icon bug
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://i.ibb.co/PZXJWvDp/location-Icon-min.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Custom icon
const redIcon = new L.Icon({
  iconUrl: "https://i.ibb.co/PZXJWvDp/location-Icon-min.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
  shadowSize: [45, 45],
});

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
    <div className="w-full max-w-7xl mx-auto my-12 bg-white rounded-xl overflow-hidden flex flex-col lg:flex-row border border-gray-200">
      {/* Left content */}
      {/* Info Card */}
      <Card className="lg:w-1/2 p-6 bg-white rounded-lg flex flex-col justify-between shadow-none border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl font-bold">
            <Building2 size={32} className="text-blue-600" />
            Nestico HQ
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Visit our head office or get in touch with us.
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-5 space-y-5 text-gray-700">
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-blue-500" />
            <p>123 Example Street, Rajshahi, Bangladesh</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={24} className="text-green-500" />
            <p>+880 1234-56*****</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={24} className="text-purple-500" />
            <p>nestico@gmail.comcom.loading.....</p>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={24} className="text-orange-500" />
            <p>Mon - Fri: 9:00 AM – 6:00 PM</p>
          </div>

          <div className="flex items-center gap-3">
            <Globe size={24} className="text-teal-500" />
            <p>www.nestico2.0.com.loading.....</p>
          </div>

          <div className="flex items-center gap-3">
            <Users size={24} className="text-pink-500" />
            <p>100+ Team Members</p>
          </div>
        </CardContent>
      </Card>

      {/* Map */}
      <div ref={mapContainerRef} className="relative lg:w-1/2 w-full h-[450px]">
        {showScrollHint && (
          <div className="absolute z-[999] top-4 left-1/2 -translate-x-1/2 bg-white/90 text-black px-4 py-1 text-sm rounded shadow">
            🔍 Press <b>Ctrl</b> + <b>Scroll</b> to zoom
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

          <Marker position={companyLocation} icon={redIcon}>
            <Popup>🏢 Our Company Location</Popup>
          </Marker>

          <LocationPicker onSelect={(pos) => setSelectedLocation(pos)} />
          <CtrlScrollZoomHandler mapContainerRef={mapContainerRef} />
        </MapContainer>

        {/* Button fixed at bottom-left inside map container */}
        <a
          href="https://www.google.com/maps?q=24.3745,88.6042"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 z-[1000] inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#22d3ee] to-[#104b5f] text-white rounded-xl shadow-lg hover:brightness-110 transition"
        >
          <LocateFixedIcon className="text-orange-300" size={18} />
          View Larger Map
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
