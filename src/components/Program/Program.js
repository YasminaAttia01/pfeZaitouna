import "./Program.css";
export default function Program({ number, pieces, theorique, scum }) {
  return (
    <div className="program-container">
      <div className="program-line">
        <div>Programme : </div>
        <div>{number}</div>
      </div>
      <div className="program-line">
        <div>fabriqués :</div> <div>{pieces}</div>
      </div>
      <div className="program-line">
        <div>théorique : </div>
        <div>{theorique}</div>
      </div>
      <div className="program-line">
        <div>rebut : </div>
        <div>{scum}</div>
      </div>
      <div className="program-line">
        <div>pieces bonnes : </div>
        <div>{pieces - scum}</div>
      </div>
    </div>
  );
}
