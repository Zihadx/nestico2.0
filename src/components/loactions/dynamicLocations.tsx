"use client";

import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        setLocation(data.city || "Unknown Location");
      } catch {
        setLocation("Unable to fetch location");
      }
    };
    fetchLocation();
  }, []);

  return location;
};

export default useLocation;
