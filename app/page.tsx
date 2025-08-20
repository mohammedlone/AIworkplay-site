import Script from "next/script";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-4">
        AI Work & Play
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl">
        Discover the best AI tools for work and play—handpicked and categorized for you.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="#useful"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore AI Tools
        </a>
        <a
          href="#fun"
          className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Try Fun AI Apps
        </a>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe for Weekly AI Picks 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Get the best AI tools delivered straight to your inbox.
        </p>

        {/* ConvertKit Embed */}
        <div id="ck_embed">
          <Script
            async
            data-uid="86ea159175"
            src="https://aiworkplay.kit.com/86ea159175/index.js"
          />
        </div>
      </div>
    </main>
  );
}
