import "../css/404.css";
import FooterLink from "../components/FooterLink";


export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <p>Vous vous êtes perdu dans vos notes...</p>
        <div className="error-logo">
          <img src="../../public/assets/logo404.png" alt="" />
        </div>
      </div>
      <FooterLink /> 
    </div>
  );
}
