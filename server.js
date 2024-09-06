import Bun, { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);

    // Serve index.html for the root URL
    if (url.pathname === "/") {
      return new Response(Bun.file("./dist/index.html"));
    }

    // Serve other static files (like JS, CSS)
    try {
      return new Response(Bun.file("./dist" + url.pathname));
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  },
  port: 3000,
});

console.log("Server running at http://localhost:3000");