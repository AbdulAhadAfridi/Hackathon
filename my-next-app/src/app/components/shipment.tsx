import { useState } from "react";

const ShipEngineComponent = () => {
  const [shipToAddress, setShipToAddress] = useState({
    name: "Michael Smith",
    phone: "+1 555 987 6543",
    addressLine1: "456 Oak Avenue",
    addressLine2: "Suite 200",
    cityLocality: "Los Angeles",
    stateProvince: "CA",
    postalCode: "90001",
    countryCode: "US",
    addressResidentialIndicator: "no",
  });

  const [packages, setPackages] = useState([
    {
      weight: { value: 5, unit: "ounce" },
      dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
    },
  ]);

  const getRates = async () => {
    try {
      const response = await fetch("/api/shipengine/get-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shipToAddress, packages }),
      });

      const data = await response.json();
      console.log("Rates Data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };

  const createLabel = async (rateId: string) => {
    try {
      const response = await fetch("/api/shipengine/create-label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rateId }),
      });

      const data = await response.json();
      console.log("Label Data:", data);
      return data;
    } catch (error) {
      console.error("Error creating label:", error);
    }
  };

  const trackShipment = async (labelId: string) => {
    try {
      const response = await fetch(`/api/shipengine/tracking/${labelId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Tracking Data:", data);
      return data;
    } catch (error) {
      console.error("Error tracking shipment:", error);
    }
  };

  return (
    <div>
      <h1>ShipEngine Operations</h1>
      <button onClick={getRates}>Get Rates</button>
      <button
        onClick={async () => {
          const ratesData = await getRates();
          if (ratesData && ratesData.rateId) {
            await createLabel(ratesData.rateId);
          }
        }}
      >
        Create Label
      </button>
      <button
        onClick={async () => {
          const labelId = "YOUR_LABEL_ID"; // Replace with the actual label ID
          await trackShipment(labelId);
        }}
      >
        Track Shipment
      </button>
    </div>
  );
};

export default ShipEngineComponent;
