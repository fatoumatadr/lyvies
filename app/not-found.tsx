import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sable flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-garamond font-bold text-6xl uppercase tracking-normal text-cacao mb-4">
          404
        </h1>
        <p className="font-jost text-body-lg font-light text-taupe mb-10">
          Cette page n'existe pas.
        </p>
        <Link
          href="/"
          className="btn-premium inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
