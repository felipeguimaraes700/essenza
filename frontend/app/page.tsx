
  import ProductCard from "./Components/products/ProductCard";
  
  export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm tracking-[0.3em] text-[#97713D]">
          ESSENZA PERFUMARIA
        </p>

        <h1 className="mb-6 text-5xl font-semibold text-[#2B2118]">
          Descubra sua essência
        </h1>

        <p className="mb-8 max-w-lg text-lg text-[#65594E]">
          Perfumes que contam histórias e despertam emoções.
        </p>

        <a
          href="/perfumes"
          className="inline-block bg-[#97713D] px-8 py-4 text-white"
        >
          EXPLORAR COLEÇÃO
        </a>
      </section>

    <section className="mx-auto max-w-7xl px-6 py-12">
  <h2 className="mb-8 font-serif text-3xl">
    Destaques da ESSENZA
  </h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <ProductCard
      name="Coco Mademoiselle"
      brand="Chanel"
      price={799.90}
      volume="100 ml"
    />

    <ProductCard
      name="Sauvage"
      brand="Dior"
      price={699.90}
      volume="100 ml"
    />

    <ProductCard
      name="Libre"
      brand="Yves Saint Laurent"
      price={749.90}
      volume="90 ml"
    />
  </div>
</section>

    </main>
  );
}
