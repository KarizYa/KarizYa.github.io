// Mengunduh gambar contoh dari desain Figma ke public/images.
// URL dari Figma bersifat sementara (7 hari). Jika gagal, ekspor ulang gambar dari Figma
// atau ganti dengan tangkapan layar proyek Anda sendiri dengan nama file yang sama.
import { mkdir, writeFile } from "node:fs/promises";

const base = "https://www.figma.com/api/mcp/asset/";
const files = {
  "work-app.png": "928d78c2-6a91-4fed-ab8d-371081578344.png",
  "work-uiux.png": "e577103d-5001-4628-ac4c-222f68cecfda.png",
  "work-code.png": "21c8509d-7985-4e04-8d92-0f93f7d87ef0.png",
  "work-blog.png": "151dc5dd-9aea-44f4-bd83-72a0ea8f6b2e.png",
  "work-mentor.png": "fab7e815-705e-4c2a-abbc-8206575cd296.png",
};

await mkdir("public/images", { recursive: true });
for (const [name, id] of Object.entries(files)) {
  try {
    const res = await fetch(base + id);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(`public/images/${name}`, Buffer.from(await res.arrayBuffer()));
    console.log("OK  ", name);
  } catch (err) {
    console.error("GAGAL", name, String(err));
  }
}
