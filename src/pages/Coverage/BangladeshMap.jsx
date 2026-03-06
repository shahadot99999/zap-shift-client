import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Bangladesh center coordinates
const position = [23.6850, 90.3563];

const BangladeshMap = () => {
    return (
        <div>
            {/* Search box (UI only for now) */}
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search district..."
                    className="input input-bordered w-full max-w-md"
                />
            </div>

            {/* Map */}
            <div className="h-[500px] w-full rounded-xl overflow-hidden">
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                >
                    {/* Map tiles */}
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Marker */}
                    <Marker position={position}>
                        <Popup>
                            Our Delivery Coverage <br /> Bangladesh
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        
    );
};

export default BangladeshMap;