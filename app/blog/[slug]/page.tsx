import { posts } from "../../content/blog/posts";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================
   SEO – generateMetadata
========================= */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Articol negăsit | Apicultură Naturală",
      description: "Articolul căutat nu există.",
    };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,

    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      url: `https://apicultura-ta.ro/blog/${post.slug}`,
      siteName: "Apicultură Naturală",
      images: [
        {
          url: post.cover,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "ro_RO",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      images: [post.cover],
    },
  };
}

/* =========================
   PAGE COMPONENT
========================= */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Acasă</Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Cover */}
      {post.cover && (
        <div className="relative w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-yellow-700 mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500">
          Publicat la {new Date(post.date).toLocaleDateString("ro-RO")}
        </p>
      </header>

      {/* Content */}
      <section
        className="prose prose-lg max-w-none
          prose-h2:text-yellow-700
          prose-a:text-yellow-600
          prose-ul:list-disc prose-ul:pl-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA */}
      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-yellow-700 mb-4">
          Produse apicole 100% naturale
        </h3>
        <p className="text-gray-600 mb-6">
          Descoperă mierea, propolisul și lăptișorul de matcă direct de la apicultor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/produse"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Vezi produsele
          </Link>
          <Link
            href="/contact"
            className="border border-yellow-500 text-yellow-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
          >
            Contactează-ne
          </Link>
        </div>
      </div>

      {/* Articole similare */}
      {relatedPosts.length > 0 && (
        <section className="mt-20">
          <h3 className="text-2xl font-serif font-bold mb-6 text-yellow-700">
            Articole similare
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
