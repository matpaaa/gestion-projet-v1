

export default function Privacy() {

    return (
        <section>
            
        </section>
    )
}
<body>
    <head> 
    <header>
     <img src="/assets/Logo.svg" alt="Logo" className="logo" />
      <button className="button" onClick={() => navigation('create-todo')}>Create</button>
     </header>
     <h1>Data Collection</h1>
      <p>Check’It collects only the information necessary for the service to function, such as tasks created by the user and, if applicable, the user’s email address for account creation. No unnecessary or sensitive data is collected without explicit consent.</p><br />
      <h1>Use of Data</h1>
     <p>Stored data is used exclusively to ensure the proper functioning of the service: task display, synchronization, and user experience personalization. Check’It does not sell, share, or rent any data to third parties, except when required by law or a legal request.</p><br />
     <h1>Security and Retention</h1>
     <p>Check’It applies technical measures to protect stored data from unauthorized access. Data is retained only for as long as necessary for the user to utilize the service. The user may request complete deletion of their information at any time through the account settings page or by contacting the support team.</p><br />
      <footer>
                 <FooterLink link="/terms" value="Terms" />
                 <FooterLink link="/privacy-policy" value="Privacy Policy" />
                 <FooterLink link="/rgpd" value="RGPD" />
             </footer>
    </head>
</body>