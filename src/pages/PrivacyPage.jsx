function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-[var(--color-dark)]">
      <h1 className="mb-8 text-4xl font-bold text-[var(--color-primary)]">
        Privacy Policy
      </h1>

      <section className="space-y-5 text-sm leading-7">
        <p>
          La presente informativa descrive le modalità di trattamento dei dati
          personali degli utenti che visitano il sito web di Grano e Gusto
          Pizzeria Ristorante.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Titolare del trattamento
        </h2>
        <p>
          Grano e Gusto Pizzeria Ristorante
          <br />
          Via Torino, 27 - 10050 Sant&apos;Antonino di Susa (TO)
          <br />
          Email:{" "}
          <a href="mailto:info@granoegusto.it" className="underline">
            info@granoegusto.it
          </a>
          <br />
          Telefono:{" "}
          <a href="tel:+390114918422" className="underline">
            011 4918422
          </a>
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Tipologie di dati trattati
        </h2>
        <p>
          Questo sito può trattare dati tecnici di navigazione, come indirizzo
          IP, informazioni sul browser, dispositivo utilizzato e dati necessari
          al corretto funzionamento del sito.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Finalità del trattamento
        </h2>
        <p>
          I dati sono trattati per consentire la navigazione del sito, fornire
          informazioni sull’attività, permettere il contatto tramite telefono,
          email, WhatsApp o Instagram e indirizzare l’utente verso servizi
          esterni, come Google Maps e la piattaforma di prenotazione Lasersoft.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Servizi di terze parti
        </h2>
        <p>
          Il sito incorpora Google Maps per mostrare la posizione del locale.
          Google potrebbe raccogliere dati relativi all’utilizzo della mappa.
        </p>
        <p>
          Le prenotazioni online sono gestite tramite piattaforma esterna
          Lasersoft. Cliccando sul pulsante di prenotazione, l’utente viene
          reindirizzato a un sito terzo, soggetto alla relativa informativa
          privacy.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Base giuridica
        </h2>
        <p>
          Il trattamento si basa sull’interesse legittimo del titolare a
          garantire il funzionamento del sito e a fornire informazioni
          sull’attività. Per eventuali cookie o strumenti non tecnici, il
          trattamento avviene solo previo consenso dell’utente.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Diritti dell’utente
        </h2>
        <p>
          L’utente può richiedere accesso, rettifica, cancellazione, limitazione
          o opposizione al trattamento dei propri dati personali scrivendo a{" "}
          <a href="mailto:info@granoegusto.it" className="underline">
            info@granoegusto.it
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Aggiornamenti
        </h2>
        <p>
          La presente informativa può essere aggiornata nel tempo. Ultimo
          aggiornamento: giugno 2026.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPage;
