import TitleInfo from "../components/TitleInfo";
import ContentInfo from "../components/ContentInfo";

export default function Terms() {
    return (
        <section className="terms-page">

            {/* Titre principal */}
            <TitleInfo title="Terms & Privacy" />

            {/* Section 1 */}
            <ContentInfo
                title="Data Collection"
                content="Check’It collects only the information necessary for the service to function, such as tasks created by the user and, if applicable, the user’s email address for account creation. No unnecessary or sensitive data is collected without explicit consent."
            />

            {/* Section 2 */}
            <ContentInfo
                title="Use of Data"
                content="Stored data is used exclusively to ensure the proper functioning of the service: task display, synchronization, and user experience personalization. Check’It does not sell, share, or rent any data to third parties, except when required by law or a legal request."
            />

            {/* Section 3 */}
            <ContentInfo
                title="Security and Retention"
                content="Check’It applies technical measures to protect stored data from unauthorized access. Data is retained only for as long as necessary for the user to utilize the service. The user may request complete deletion of their information at any time through the account settings page or by contacting the support team."
            />

        </section>
    );
}
