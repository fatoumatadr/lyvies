// ══════════════════════════════════════════════
// LYVIES — Page Article Dynamique
// Template [slug] pour le blog/journal
// ══════════════════════════════════════════════

import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import ArticleContent from "./ArticleContent";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

// Générer les chemins statiques
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Metadata dynamique
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <ArticleContent post={post} />;
}
