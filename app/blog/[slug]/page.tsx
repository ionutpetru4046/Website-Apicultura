import { posts } from "../../content/blog/posts";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {/* Cover */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Acasă
        </Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <span className="mx-2">→</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>
      <div className="relative w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg mb-10">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="w-full h-[320px] object-cover rounded-2xl mb-10 shadow"
          priority
        />
      </div>

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
        className="prose prose-lg max-w-none prose-h2:text-yellow-700 prose-a:text-yellow-600 prose-ul:list-disc prose-ul:pl-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA */}
      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
          Produse apicole 100% naturale
        </h3>
        <p className="text-gray-600 mb-6">
          Descoperă mierea, propolisul și lăptișorul de matcă direct de la
          apicultor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/produse"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Vezi produsele
          </a>
          <a
            href="/contact"
            className="border border-yellow-500 text-yellow-700 px-6 py-3 rounded-lg font-medium hover:bg-yellow-100 transition"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </article>
  );
}
