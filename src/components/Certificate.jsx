import '../styles/Certificate.css';
import { certificateData } from '../data/certificateData';
import logo from '../assets/logo-academia-x.webp';

function Certificate() {
  const {
    academyName,
    studentName,
    certificateTitle,
    tools
  } = certificateData;

  return (
    <div className="certificate-container">
      <div className="certificate">
        <img src={logo} alt="Academy Logo" className="logo" />
        <h1 className="academy-name">{academyName}</h1>
        <h2 className="title">Certificate</h2>
        <p className="text">
        This certifies that <strong>{studentName}</strong>has successfully completed the training corresponding to the role of:
        </p>
        <h3 className="certificate-title">{certificateTitle}</h3>
        <p className="text">Acquiring knowledge in the following tools:</p>
        <ul className="tools-list">
          {tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>

        {/* Botón de impresión */}
        <div style={{ marginTop: '2rem' }}>
          <button onClick={() => window.print()} className="print-button">
          Print
          </button>
        </div>

        <p className="signature">_____________________<br />Academic Office</p>
      </div>
    </div>
  );
}

export default Certificate;
