import { useEffect, useState } from "react";
import Program from "./components/Program/Program";
import "./App.scss";
import Station from "./components/Station/Station";
import { generateAxiosInstance } from "./utils/AxiosInstance";
import { getActiveSessions } from "./services/ProductsService";
generateAxiosInstance();
function App() {
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      let data = await getActiveSessions(
        new Date("2023-03-01T00:00:00"),
        "midi"
      );
      setPrograms(data);
    } catch (error) {
      console.log(error);
    }
  }
  const [programs, setPrograms] = useState({});
  const [totalPieces, setTotalPieces] = useState(0);
  const [totalScum, setTotalScum] = useState(0);
  const [totalTheory, setTotalTheory] = useState(0);
  useEffect(() => {
    let total = 0;
    Object.keys(programs).forEach((element) => {
      total += programs[element].reel;
    });
    setTotalPieces(total);
  }, [programs]);
  useEffect(() => {
    let total = 0;
    Object.keys(programs).forEach((element) => {
      total += programs[element].scum;
    });
    setTotalScum(total);
  }, [programs]);
  useEffect(() => {
    let total = 0;
    Object.keys(programs).forEach((element) => {
      total += programs[element].theorique;
    });
    setTotalTheory(total);
  }, [programs]);
  return (
    <div>
      <div className="indicators">
        <div className="indicators-left">
          <div className="indicator-line">Pieces totales : {totalPieces}</div>
          <div className="indicator-line">Rebut total : {totalScum}</div>
          <div className="indicator-line">
            taux rebut : {((totalScum / totalPieces) * 100).toFixed(2)}%
          </div>
        </div>
        <div className="indicators-right">
          <div className="indicator-line">
            Pieces bonnes : {totalPieces - totalScum}
          </div>
          <div className="indicator-line">
            Productivité : {((totalPieces / totalTheory) * 100).toFixed(2)}%
          </div>
          <div className="indicator-line">
            TRS : {(((totalPieces - totalScum) / totalTheory) * 100).toFixed(2)}
            %
          </div>
        </div>
      </div>
      <div className="stations">
        <Station />
      </div>
      <div className="programs">
        {Object.keys(programs).map((element, key) => (
          <Program
            key={key}
            number={element}
            pieces={programs[element].reel}
            theorique={programs[element].theorique}
            scum={programs[element].scum}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
