import Link from "next/link";
import { posts } from "../content/blog/posts";

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-bold text-yellow-700 mb-12">
        Apicultura Blog
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
          >
            <h2 className="text-xl font-semibold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>

            <span className="text-sm text-yellow-600 font-medium">
              Citeste Articol →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
