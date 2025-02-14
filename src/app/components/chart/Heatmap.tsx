"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// @ts-ignore
import L from "leaflet";
import "leaflet.heat";
import { useEffect, useState } from "react";

// Komponen HeatLayer untuk menangani heatmap setelah data didapat
const HeatLayer = ({ data }: { data: [number, number, number?][] }) => {
  const map = useMap();

  useEffect(() => {
    if (data.length > 0) {
      const heatLayer = L.heatLayer(data, {
        radius: 10,
        blur: 15,
        maxZoom: 10,
      }).addTo(map);

      return () => {
        map.removeLayer(heatLayer);
      };
    }
  }, [data, map]);

  return null;
};

const Heatmap = () => {
  const [heatmapData, setHeatmapData] = useState<[number, number, number?][]>([]);

  useEffect(() => {
    const fetchHeatmapData = async () => {
      try {
        const res = await fetch("/api/heatmap-pos");
        const data = await res.json();
        setHeatmapData(data);
      } catch (error) {
        console.error("Error fetching heatmap data:", error);
      }
    };

    fetchHeatmapData();
  }, []);

  return (
    <MapContainer
      // @ts-ignore
      center={[-7.1000, 107.6000]}
      zoom={9}
      minZoom={10}
      maxZoom={15}
      maxBounds={[
        [-7.40, 107.30],
        [-6.85, 107.85],
      ]}
      maxBoundsViscosity={1.0}
      className="w-full h-[500px] rounded-lg shadow-lg"
    >
      {/* @ts-ignore */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
      <HeatLayer data={heatmapData} />
    </MapContainer>
  );
};

export default Heatmap;
