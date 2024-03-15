export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <div className="w-full flex flex-col items-center mb-12">
        <section className='narrow-container'>
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            About Corentin Corporation
          </h1>

          <p className="mt-6 md:text-xl">
            Une description ici
          </p>

          <p className="mt-6 md:text-xl">
            Je suis Corentin Grégoire. Etudiant au CNAM, voici mon site
          </p>
        </section>
      </div>
    </div>
  );
}
