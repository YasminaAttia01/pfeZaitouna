import { useEffect, useState } from "react";
import "./Station.css";
import { getActiveStations } from "../../services/ProductsService";
export default function Station() {
  const stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [activeStations, setActiveStations] = useState([]);
  const rx = 150;
  const ry = 100;
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      let data = await getActiveStations(new Date("2023-03-01T18:00:00"));
      console.log(data);
      setActiveStations(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="stations-container">
      {stations.map((element, key) => (
        <div
          key={key}
          className={
            activeStations.includes(element)
              ? "station-active"
              : "station-inactive"
          }
          style={{
            top:
              String(
                ry +
                  -ry * Math.cos((360 / stations.length / 180) * key * Math.PI)
              ) + "px",
            left:
              String(
                rx +
                  rx * Math.sin((360 / stations.length / 180) * key * Math.PI)
              ) + "px",
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
}
