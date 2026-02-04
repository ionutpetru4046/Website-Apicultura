import Link from "next/link";
import { posts } from "../content/blog/posts";
import Image from "next/image";

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 mt-12 py-8 min-h-screen">
      {/* Hero Header */}
      <div className="relative flex flex-col items-center justify-center py-10 mb-14 bg-linear-to-br from-yellow-50 via-yellow-100 to-amber-50 rounded-3xl shadow-sm overflow-hidden">
        {/* Honeycomb BG Accent (decorative SVG) */}
        <svg
          className="absolute -top-10 left-0 opacity-20 blur-sm w-40 h-40 pointer-events-none"
          viewBox="0 0 250 250"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="honeycomb-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#fde68a" />
              <stop offset="1" stopColor="#f59e42" />
            </linearGradient>
          </defs>
          <polygon
            points="125,15 237,72 237,182 125,239 13,182 13,72"
            fill="url(#honeycomb-gradient)"
          />
        </svg>
        <h1 className="text-3xl sm:text-5xl text-center font-extrabold font-serif text-yellow-700 mb-0 tracking-tight drop-shadow-sm">
          Apicultură Blog
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-center text-yellow-800 font-medium">
          Articolele noastre despre apicultura naturală, sănătatea albinelor și beneficiile mierii locale. Inspiră-te să descoperi mai mult!
        </p>
      </div>
      {/* Blog Posts Grid */}
      <div className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-y-10 gap-x-6
        ">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-yellow-200/70 border border-transparent transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-yellow-400"
            tabIndex={0}
          >
            {/* Thumbnail image if post.cover exists */}
            {post.cover && (
              <div className="h-48 w-full relative rounded-t-2xl overflow-hidden bg-yellow-100">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="flex flex-col flex-1 p-5">
              {/* 
                If you want to show post tags, 
                you must add the 'tags' property to your post objects and their type!
                Example:
                tags: string[];
                Otherwise, TypeScript will error.
              */}
              {/* {post.tags?.length
                  ? post.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full uppercase shadow-xs"
                      >{tag}</span>
                    ))
                  : null} */}
              <h2 className="text-lg sm:text-xl font-semibold font-serif mb-2 
              text-yellow-800 group-hover:text-yellow-700 line-clamp-2 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 flex-1 text-sm sm:text-base line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                {post.date && (
                  <span className="text-xs text-yellow-600 font-medium opacity-80">
                    {new Date(post.date).toLocaleDateString("ro-RO", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
                <span className="ml-auto text-sm text-yellow-600 font-semibold group-hover:underline flex items-center gap-1 transition-colors">
                  Citește articol
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* (Optional) Pagination - for future scaling */}
      {/* <div className="flex justify-center mt-12">
        <button className="px-5 py-2 rounded-lg bg-yellow-200 text-yellow-800 font-bold hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
          Mai multe articole
        </button>
      </div> */}
    </section>
  );
}
