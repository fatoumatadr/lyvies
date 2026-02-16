import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sable flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-jost font-medium text-6xl uppercase tracking-normal text-noir-900 mb-4">
          404
        </h1>
        <p className="font-jost text-body-lg font-light text-noir-900/60 mb-10">
          Cette page n'existe pas.
        </p>
        <Link
          href="/"
          className="inline-block font-jost text-body-sm uppercase tracking-[0.15em] border border-noir-900 text-noir-900 px-8 py-4 hover:bg-noir-900 hover:text-sable transition-all duration-500"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
