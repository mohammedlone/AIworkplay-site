"use client";
import { useState, useMemo } from "react";
import links from "../public/links.json";

export default function Page() {
  const [q, setQ] = useState("");

  const categories = useMemo(() => Object.keys(links as any), []);
  const filtered = useMemo(() => {
    const out: Record<string, any[]> = {};
    categories.forEach((cat) => {
      const items = (links as any)[cat].filter((x: any) =>
        (x.name + " " + x.desc).toLowerCase().includes(q.toLowerCase())
      );
      if (items.length) out[cat] = items;
    });
    return out;
  }, [q, categories]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV / HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
          <span>⚡</span> AI Work & Play
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Discover the top AI tools — ranked & ready to launch.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#tools" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500">
            Explore Tools
          </a>
          <a href="#guide" className="px-5 py-3 rounded-lg bg-white border font-semibold hover:bg-gray-50">
            Free Guide
          </a>
        </div>
      </section>

      {/* SEARCH + LISTS */}
      <section id="tools" className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-xl border bg-white p-5 md:p-6 shadow-sm">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search tools (Ctrl/⌘+K)"
            className="w-full rounded-md border px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {Object.keys(filtered).map((cat) => (
            <div key={cat} className="mb-10">
              <h2 className="text-xl font-bold mb-4">{cat}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {filtered[cat].map((item: any) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-4 rounded-lg border hover:border-blue-400 hover:shadow transition"
                  >
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section id="guide" className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <h3 className="text-3xl font-bold">Get the Free Guide</h3>
        <p className="mt-2 text-gray-600">10 Must-Know AI Tools to 10x Your Workflow</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md border min-w-[260px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500"
          >
            Get Guide
          </button>
        </form>
      </section>

      {/* SPONSOR */}
      <section className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center text-gray-600">
          🚀 Sponsor Banner Here
        </div>
      </section>
    </main>
  );
}
