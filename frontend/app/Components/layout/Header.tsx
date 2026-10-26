import Link from "next/link";
import {
  Search,
  UserRound,
  ShoppingCart,
  Menu,
} from "lucide-react";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Perfumes", href: "/perfumes" },
  { name: "Femininos", href: "/perfumes/femininos" },
  { name: "Masculinos", href: "/perfumes/masculinos" },
  { name: "Unissex", href: "/perfumes/unissex" },
  { name: "Novidades", href: "/novidades" },
  { name: "Contato", href: "/contato" },
  { name: "Promoções", href: "/promocoes" },
]

export default function Header() {
  return (
    <header className="w-full bg-[#FAF7F2]">

      {/* Barra superior */}
      <div className="bg-[#865A2B] px-6 py-2 text-white">
        <div className="mx-auto flex max-w-7xl justify-between text-xs">
          <span>FRETE GRÁTIS acima de R$ 299,00</span>

          <div className="hidden gap-5 md:flex">
            <Link href="/lojas">Nossas Lojas</Link>
            <Link href="/ajuda">Ajuda</Link>
            <Link href="/minha-conta/pedidos">
              Meus Pedidos
            </Link>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6">

        {/* Logo */}
        <Link href="/" className="shrink-0 text-center">
          <h2 className="font-serif text-3xl text-[#865A2B]">
            ESSENZA
          </h2>
          <p className="text-[9px] tracking-[0.4em] text-[#865A2B]">
            PERFUMARIA
          </p>
        </Link>

        {/* Links desktop */}
        <nav className="hidden items-center gap-5 lg:flex">
            {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-medium uppercase text-[#2B2118] transition-colors hover:text-[#97713D]"> {item.name}</Link>))}
        </nav>

        {/* Ícones */}
        <div className="flex items-center gap-5 text-[#865A2B]">

          <Link href="/busca" aria-label="Buscar perfumes">
            <Search size={21} />
          </Link>

          <Link href="/login" aria-label="Minha conta">
            <UserRound size={21} />
          </Link>

          <Link href="/carrinho" aria-label="Meu carrinho">
            <ShoppingCart size={22} />
          </Link>

          <button
            type="button"
            className="lg:hidden"
            aria-label="Abrir menu"
            disabled
          >
            <Menu size={23} />
          </button>

        </div>
      </div>
    </header>
  );
}