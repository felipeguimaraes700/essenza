type ProductCardProps = {
  name: string;
  brand: string;
  price: number;
  volume: string;
};

export default function ProductCard({
  name,
  brand,
  price,
  volume,
}: ProductCardProps) {
  return (
    <article className="rounded-lg border border-[#E8DED2] bg-white p-5">
      <div className="mb-4 flex h-48 items-center justify-center bg-[#FAF7F2]">
        <span className="text-sm text-[#97713D]">
          Imagem do perfume
        </span>
      </div>

      <h3 className="text-xs font-bold uppercase">
        {brand}
      </h3>

      <p className="mt-1 text-sm">{name}</p>

      <p className="mt-1 text-xs text-gray-500">
        {volume}
      </p>

      <p className="mt-3 text-lg font-bold">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <button
        type="button"
        className="mt-4 w-full bg-[#97713D] px-4 py-3 text-xs font-medium text-white"
      >
        ADICIONAR AO CARRINHO
      </button>
    </article>
  );
}