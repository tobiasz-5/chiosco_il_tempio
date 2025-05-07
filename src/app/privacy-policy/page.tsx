// src/app/privacy/page.tsx

export default function PrivacyPolicyPage() {
    return (
      <main className="bg-white max-w-full mx-auto px-6 py-12 text-[#337aff] text-center space-y-350">
        {/* ========================
             SEZIONE ITALIANA
           ======================== */}
        <section className="space-y-6">
          <h1 className="text-3xl font-bold text-center mb-6">Privacy & Cookie Policy</h1>
  
          {/* INTRO */}
          <p>
            La presente informativa è resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679
            (&quot;GDPR&quot;) a coloro che interagiscono con il sito web <em>www.chioscoiltempio.com</em>.
            Descriviamo come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali e come
            esercitare i diritti previsti dalla normativa.
          </p>
  
          {/* TITOLARE */}
          <h2 className="text-xl font-semibold">Titolare del trattamento</h2>
          <p>
            <strong>Chiosco Il Tempio</strong> – Lungarno del Tempio, 50121 Firenze (Italia) – Tel.
            +39 333 369 4137 – e‑mail:{" "}
            <a href="mailto:info@chioscoiltempio.it" className="underline hover:text-blue-700">
              info@chioscoiltempio.it
            </a>
          </p>
  
          {/* DESTINATARI */}
          <h2 className="text-xl font-semibold">Destinatari o categorie di destinatari</h2>
          <p>
            I dati possono essere trattati da soggetti esterni nominati «responsabili del trattamento»
            (art. 28 GDPR) quali: provider di hosting e manutenzione del sito, servizi di posta
            elettronica, consulenti IT, fornitori di piattaforme CDN e, previo tuo consenso, Google LLC
            per la visualizzazione di Google Maps.
          </p>
  
          {/* DATI TRATTATI */}
          <h2 className="text-xl font-semibold">Dati personali trattati</h2>
          <p className="mb-2">Dati raccolti automaticamente:</p>
          <ul className="list-disc list-inside">
            <li>indirizzo IP (con parziale anonimizzazione, se configurata);</li>
            <li>informazioni su browser e sistema operativo;</li>
            <li>log anonimizzati (data/ora, URL visitate);</li>
          </ul>
          <p>Dati forniti volontariamente tramite e‑mail o form di contatto.</p>
  
          {/* FINALITÀ TABELLA */}
          <h2 className="text-xl font-semibold">Finalità, basi giuridiche e tempi di conservazione</h2>
          <table className="w-full text-sm border border-[#337aff]/30">
            <thead>
              <tr className="bg-[#337aff]/10">
                <th className="p-2 border border-[#337aff]/30 text-left">Finalità</th>
                <th className="p-2 border border-[#337aff]/30 text-left">Base giuridica</th>
                <th className="p-2 border border-[#337aff]/30 text-left">Conservazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#337aff]/30">Funzionamento tecnico (cookie tecnici)</td>
                <td className="p-2 border border-[#337aff]/30">Legittimo interesse (art. 6 §1 f)</td>
                <td className="p-2 border border-[#337aff]/30">12 mesi</td>
              </tr>
              <tr className="bg-[#337aff]/5">
                <td className="p-2 border border-[#337aff]/30">Visualizzazione Google Maps</td>
                <td className="p-2 border border-[#337aff]/30">Consenso (art. 6 §1 a)</td>
                <td className="p-2 border border-[#337aff]/30">fino a revoca / 6 mesi</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#337aff]/30">Gestione richieste di contatto</td>
                <td className="p-2 border border-[#337aff]/30">Esecuzione di misure pre‑contrattuali (art. 6 §1 b)</td>
                <td className="p-2 border border-[#337aff]/30">fino a 12 mesi dopo evasione</td>
              </tr>
            </tbody>
          </table>
  
          {/* COOKIE TERZE PARTI */}
          <h2 className="text-xl font-semibold">Cookie e servizi di terze parti</h2>
          <p>
            L&apos;iframe di <strong>Google Maps</strong> viene caricato solo dopo tuo consenso. Google LLC è
            certificata ai sensi dell&apos;<strong>EU‑US Data Privacy Framework</strong> e, in alternativa,
            applica le Standard Contractual Clauses (SCC) approvate dalla Commissione UE. Maggiori
            informazioni:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              privacy Google
            </a>
            .
          </p>
  
          {/* TRASFERIMENTI EXTRA UE */}
          <h2 className="text-xl font-semibold">Trasferimenti di dati verso Paesi extra-UE</h2>
          <p>
            I dati possono essere trasferiti negli Stati Uniti esclusivamente in presenza di adeguate
            garanzie (art. 45‑46 GDPR): adesione del destinatario all&apos;EU‑US DPF o SCC. Puoi ottenere una
            copia di tali garanzie scrivendo al titolare.
          </p>
  
          {/* OBBLIGATORIETÀ DEL CONFERIMENTO */}
          <h2 className="text-xl font-semibold">Conferimento dei dati</h2>
          <p>
            Il conferimento dei dati per scopi tecnici è necessario per la navigazione del sito;
            l&apos;eventuale rifiuto di fornire dati opzionali (es. per contatti) può impedire di ricevere
            risposta. Il mancato consenso ai cookie di terze parti non compromette la fruizione delle
            pagine.
          </p>
  
          {/* DECISIONI AUTOMATIZZATE */}
          <h2 className="text-xl font-semibold">Decisioni automatizzate</h2>
          <p>Non vengono adottate decisioni basate su trattamenti automatizzati né profilazione.</p>
  
          {/* MISURE DI SICUREZZA */}
          <h2 className="text-xl font-semibold">Misure di sicurezza</h2>
          <p>
            Adottiamo misure tecniche e organizzative adeguate quali: connessione cifrata TLS 1.3,
            backup cifrati, accessi limitati al personale autorizzato, aggiornamento periodico del
            software e principio del «least privilege».
          </p>
  
          {/* DIRITTI UTENTE */}
          <h2 className="text-xl font-semibold">Diritti dell&apos;utente</h2>
          <p>
            Puoi esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e
            portabilità (artt. 15‑22 GDPR) nonché il diritto di reclamo al Garante Privacy (Piazza
            Venezia 11, 00187 Roma, <a
              href="https://www.gpdp.it"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >www.gpdp.it</a>) scrivendo a:
            <a href="mailto:info@chioscoiltempio.it" className="underline hover:text-blue-700">
              info@chioscoiltempio.it
            </a>
            .
          </p>
          <p className="text-sm">Ultimo aggiornamento: Maggio 2025</p>
        </section>
  
        {/* ========================
             ENGLISH SECTION
           ======================== */}
        <section className="space-y-6">
          <h1 className="text-3xl font-bold text-center mb-6">Privacy & Cookie Policy (English)</h1>
  
          {/* INTRO */}
          <p>
            This notice is provided pursuant to Article 13 of Regulation (EU) 2016/679 (GDPR) to users
            interacting with <em>www.chioscoiltempio.com</em>. It explains how we collect, use and
            protect personal data and how you can exercise your rights.
          </p>
  
          {/* CONTROLLER */}
          <h2 className="text-xl font-semibold">Controller</h2>
          <p>
            <strong>Chiosco Il Tempio</strong> – Lungarno del Tempio, 50121 Florence (Italy) – Tel.
            +39 333 369 4137 – e‑mail:{" "}
            <a href="mailto:info@chioscoiltempio.it" className="underline hover:text-blue-700">
              info@chioscoiltempio.it
            </a>
          </p>
  
          {/* RECIPIENTS */}
          <h2 className="text-xl font-semibold">Recipients (data processors)</h2>
          <p>
            Data may be processed by external providers acting as «processors» (Art. 28 GDPR),
            including: hosting/maintenance services, e‑mail services, IT consultants, CDN providers and,
            upon your consent, Google LLC for Google Maps display.
          </p>
  
          {/* DATA PROCESSED */}
          <h2 className="text-xl font-semibold">Personal data processed</h2>
          <p className="mb-2">Automatically collected data:</p>
          <ul className="list-disc list-inside">
            <li>IP address (partially anonymised, if configured);</li>
            <li>browser and OS information;</li>
            <li>anonymised logs (date/time, visited URLs);</li>
          </ul>
          <p>Data voluntarily provided via e‑mail or contact forms.</p>
  
          {/* TABLE PURPOSES */}
          <h2 className="text-xl font-semibold">Purposes, legal bases and retention</h2>
          <table className="w-full text-sm border border-[#337aff]/30">
            <thead>
              <tr className="bg-[#337aff]/10">
                <th className="p-2 border border-[#337aff]/30 text-left">Purpose</th>
                <th className="p-2 border border-[#337aff]/30 text-left">Legal basis</th>
                <th className="p-2 border border-[#337aff]/30 text-left">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#337aff]/30">Technical operation (technical cookies)</td>
                <td className="p-2 border border-[#337aff]/30">Legitimate interest (Art. 6 §1 f)</td>
                <td className="p-2 border border-[#337aff]/30">12 months</td>
              </tr>
              <tr className="bg-[#337aff]/5">
                <td className="p-2 border border-[#337aff]/30">Google Maps display</td>
                <td className="p-2 border border-[#337aff]/30">Consent (Art. 6 §1 a)</td>
                <td className="p-2 border border-[#337aff]/30">until consent withdrawal / 6 months</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#337aff]/30">Handling contact requests</td>
                <td className="p-2 border border-[#337aff]/30">Pre‑contractual measures (Art. 6 §1 b)</td>
                <td className="p-2 border border-[#337aff]/30">up to 12 months after closure</td>
              </tr>
            </tbody>
          </table>
  
          {/* COOKIES THIRD PARTY */}
          <h2 className="text-xl font-semibold">Cookies & third‑party services</h2>
          <p>
            We load the <strong>Google Maps</strong> iframe only after your explicit consent. Google LLC
            is certified under the <strong>EU‑US Data Privacy Framework</strong> and, alternatively,
            relies on Standard Contractual Clauses approved by the EU Commission. More info:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              Google Privacy Policy
            </a>
            .
          </p>
  
          {/* TRANSFERS */}
          <h2 className="text-xl font-semibold">Data transfers outside the EEA</h2>
          <p>
            Data may be transferred to the United States only where adequate safeguards under
            Articles 45‑46 GDPR are in place (EU‑US DPF certification or SCC). You can request a copy of
            such safeguards by contacting the controller.
          </p>
  
          {/* MANDATORY NATURE */}
          <h2 className="text-xl font-semibold">Mandatory or voluntary nature of providing data</h2>
          <p>
            Providing data for technical purposes is necessary for browsing the site; refusing to supply
            optional data (e.g., in contact forms) may prevent us from responding. Declining third‑party
            cookies does not hinder basic navigation.
          </p>
  
          {/* AUTOMATED DECISIONS */}
          <h2 className="text-xl font-semibold">Automated decision‑making</h2>
          <p>No automated decision‑making or profiling is carried out.</p>
  
          {/* SECURITY MEASURES */}
          <h2 className="text-xl font-semibold">Security measures</h2>
          <p>
            We implement appropriate technical and organisational measures such as TLS 1.3 encrypted
            connections, encrypted backups, strict access controls, regular software updates and the
            principle of least privilege.
          </p>
  
          {/* USER RIGHTS */}
          <h2 className="text-xl font-semibold">Your rights</h2>
          <p>
            Under Articles 15‑22 GDPR you may request access, rectification, erasure, restriction,
            portability or object to processing. You also have the right to lodge a complaint with the
            Italian Supervisory Authority (Garante per la Protezione dei Dati Personali, Piazza
            Venezia 11, 00187 Rome, <a
              href="https://www.gpdp.it"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >www.gpdp.it</a>). Requests can be sent to:{" "}
            <a href="mailto:info@chioscoiltempio.it" className="underline hover:text-blue-700">
              info@chioscoiltempio.it
            </a>
            .
          </p>
          <p className="text-sm text-center">Last update: May 2025</p>
        </section>
      </main>
    );
  }
  