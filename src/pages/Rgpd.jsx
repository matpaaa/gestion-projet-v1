import TitleInfo from "../components/TitleInfo"; 
import ContentInfo from "../components/ContentInfo";

export default function RGPD() {
    return (
        <section className="rgpd-page">

            {/* Titre principal */}
            <TitleInfo title="Politique RGPD" />

            {/* Section 1 */}
            <ContentInfo
                title="Collecte des données"
                content="Nous collectons uniquement les données nécessaires au fonctionnement du service, telles que les tâches créées par l’utilisateur et, le cas échéant, son adresse email pour la création de compte. Aucune donnée sensible ou inutile n’est collectée sans consentement explicite."
            />

            {/* Section 2 */}
            <ContentInfo
                title="Utilisation des données"
                content="Les données collectées sont utilisées exclusivement pour assurer le bon fonctionnement du service : affichage des tâches, synchronisation et personnalisation de l’expérience utilisateur. Aucune donnée n’est vendue, partagée ou louée à des tiers, sauf exigence légale."
            />

            {/* Section 3 */}
            <ContentInfo
                title="Sécurité et conservation"
                content="Nous mettons en place des mesures techniques pour protéger vos données contre tout accès non autorisé. Les données sont conservées uniquement le temps nécessaire à l’utilisation du service. Vous pouvez demander la suppression complète de vos informations à tout moment via les paramètres de votre compte ou en contactant le support."
            />

            {/* Section 4 */}
            <ContentInfo
                title="Droits des utilisateurs"
                content="Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ces droits en vous rendant dans votre espace utilisateur ou en contactant notre équipe support."
            />

            {/* Section 5 */}
            <ContentInfo
                title="Cookies et suivi"
                content="Notre service utilise des cookies pour améliorer votre expérience et analyser l’usage du site. Vous pouvez gérer vos préférences en matière de cookies directement depuis votre navigateur."
            />

        </section>
    );
}
