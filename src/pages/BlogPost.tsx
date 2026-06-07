import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { posts } from '@/data/posts';
import Navbar from '@/components/nio/Navbar';
import Footer from '@/components/nio/Footer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-nio-bg text-nio-muted">
        <div className="text-center">
          <p className="text-2xl font-bold text-nio-heading">Article not found</p>
          <Link to="/blog" className="mt-4 inline-block text-nio-accent hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nio-bg font-sans antialiased">
      <Navbar />
      <div className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-nio-muted hover:text-nio-accent mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-nio-muted">
          <span className="rounded-full border border-nio-line px-3 py-0.5 text-nio-accent">{post.tag}</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readTime} min read
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-nio-heading sm:text-3xl">
          {post.title}
        </h1>

        <p className="mt-6 text-base font-light leading-relaxed text-nio-muted sm:text-lg">{post.excerpt}</p>

        <div
          className="mt-12 prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-nio-heading
            prose-p:text-nio-muted prose-p:leading-relaxed
            prose-strong:text-nio-text
            prose-li:text-nio-muted
            prose-a:text-nio-accent prose-a:no-underline hover:prose-a:underline
            prose-code:text-nio-accent prose-code:bg-nio-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-hr:border-nio-line"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 rounded-2xl border border-nio-accent/30 bg-nio-card p-8 text-center">
          <h3 className="font-display text-xl font-bold text-nio-heading">Need help with your Maximo data?</h3>
          <p className="mt-2 text-nio-muted">I work with asset-heavy organisations across the Nordics. Let's talk.</p>
          <Link
            to="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-nio-accent px-7 py-3.5 text-sm font-semibold text-nio-bg transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
