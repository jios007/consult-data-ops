import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { posts } from '@/data/posts';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-nio-bg px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-nio-accent">
          <span className="h-px w-6 bg-nio-accent" /> Insights
        </p>
        <h1 className="text-xl font-extrabold tracking-tight text-nio-heading sm:text-2xl md:text-3xl">
          Maintenance data, in plain language
        </h1>
        <p className="mt-4 text-base font-light text-nio-muted">
          Practical articles on Maximo, CMMS data quality, Power BI reporting and operations analytics.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-nio-line bg-nio-card p-8 transition-colors hover:border-nio-accent/60"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-nio-muted">
                <span className="rounded-full border border-nio-line px-3 py-0.5 text-nio-accent">{post.tag}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {post.readTime} min read
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold leading-snug text-nio-heading group-hover:text-nio-accent transition-colors sm:text-xl">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-nio-muted sm:text-base">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-nio-accent">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-nio-line pt-10 text-center">
          <p className="text-nio-muted">Have a data problem you'd like me to write about?</p>
          <Link
            to="/#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-nio-accent px-7 py-3.5 text-sm font-semibold text-nio-bg transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
