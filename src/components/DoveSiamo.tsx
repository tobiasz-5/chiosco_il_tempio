export default function DoveSiamo() {
    return (
      <section className="bg-white text-[#337aff] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* <h2 className="text-2xl font-semibold mb-4 text-center">Dove siamo</h2> */}
          <div className="overflow-hidden rounded-xl border border-[#337aff] shadow">
            <iframe
              src="https://www.google.com/maps?q=43.76539,11.27225&hl=it&z=18&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              title="Mappa Chiosco Il Tempio"
            />
          </div>
        </div>
      </section>
    );
  }
  