import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Bangladesh center coordinates
const position = [23.6850, 90.3563];

// Helper component to move map
function FlyToDistrict({ coords }) {
const map = useMap();
if (coords) {
map.flyTo(coords, 14, { duration: 1.5 });
}
return null;
}

const BangladeshMap = ({serviceCenters}) => {

    const [searchText, setSearchText] = useState('');
    const [activeCoords, setActiveCoords] = useState(null);
    const [activeDistrict, setActiveDistrict] = useState(null);
    
    const handleSearch = (e) => {
        e.preventDefault();
        const district = serviceCenters.find(d =>
            d.district.toLowerCase().includes(searchText.toLowerCase())
        );
        if (district) {
            setActiveCoords([district.latitude, district.longitude]);
            setActiveDistrict(district.district);
        };
    }

    return (
        <div>
            {/* Search box (UI only for now) */}
            <form
            onSubmit={handleSearch}
            className='absolute top-4 left-1/2 transform -translate-x-1/2 
            z[1000] w-full max-w-md px-4 flex'
            >
              <input
                    type="text"
                    placeholder="Search district..."
                    className="input input-bordered w-full max-w-md"
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
            </form>
            <div className="flex justify-center mb-8">
                
            </div>

            {/* Map */}
            <div className="h-[800px] w-full rounded-xl overflow-hidden">
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                >
                    {/* Map tiles */}
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <FlyToDistrict coords={activeCoords} />

                    {/* Marker */}
                    {/* <Marker position={position}>
                        <Popup>
                            Our Delivery Coverage <br /> Bangladesh
                        </Popup>
                    </Marker> */}
                    {
                       serviceCenters.map((center, index) =><Marker 
                       key={index}
                       position={[center.latitude, center.longitude]}
                     >
                        <Popup  autoOpen={center.district === activeDistrict}
                        
                        >
                            <strong>{center.district}</strong><p>
                                {center.covered_area.join(',')}
                            </p>
                            Our Delivery Coverage <br /> Bangladesh
                        </Popup>
                    </Marker> ) 
                    }
                </MapContainer>
            </div>
        </div>
        
    );
};

export default BangladeshMap;