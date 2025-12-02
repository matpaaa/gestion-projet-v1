import "../css/footer.css"
import FooterLink from "../components/FooterLink"

export default function Footer() {

    return (
        <footer>
            <FooterLink link="/terms" value="Terms" />
            <FooterLink link="/privacy-policy" value="Privacy Policy" />
            <FooterLink link="/rgpd" value="RGPD" />
        </footer>
    )
}

