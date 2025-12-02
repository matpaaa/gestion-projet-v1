import TitleInfo from "../components/TitleInfo"; 
import ContentInfo from "../components/ContentInfo";

export default function Terms() {
    const termsSections = [
        {
            title: "Acceptation des conditions",
            content: "En utilisant notre service, vous acceptez nos conditions d’utilisation. Si vous n’acceptez pas ces conditions, vous ne devez pas utiliser le service."
        },
        {
            title: "Utilisation du service",
            content: "Vous vous engagez à utiliser notre service conformément à la loi et à ne pas effectuer d’activités illégales ou interdites. Vous êtes responsable de la confidentialité de votre compte et de votre mot de passe."
        },
        {
            title: "Propriété intellectuelle",
            content: "Tout le contenu, design, logo, et code de notre service sont protégés par des droits de propriété intellectuelle et ne peuvent être reproduits, modifiés ou distribués sans autorisation."
        },
        {
            title: "Responsabilités et limitations",
            content: "Nous fournissons le service tel quel et ne garantissons pas qu’il sera exempt d’erreurs ou d’interruptions. Nous ne pouvons être tenus responsables de tout dommage direct ou indirect résultant de l’utilisation du service."
        },
        {
            title: "Modification des conditions",
            content: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés de toute modification significative et l’utilisation continue du service vaut acceptation des nouvelles conditions."
        },
        {
            title: "Résiliation",
            content: "Nous pouvons suspendre ou résilier votre compte en cas de violation des présentes conditions ou pour toute raison légale. Vous pouvez également résilier votre compte à tout moment."
        }
    ];

    return (
        <section className="terms-page">
            {/* Titre principal */}
            <TitleInfo title="Conditions d’Utilisation" />

            {/* Sections dynamiques */}
            {termsSections.map((section, index) => (
                <ContentInfo
                    key={index}
                    title={section.title}
                    content={section.content}
                />
            ))}
        </section>
    );
}
