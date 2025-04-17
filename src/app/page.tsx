import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://images.unsplash.com/photo-1559163499-413811fb2344",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051",
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockUrls, ...mockUrls, ...mockUrls, ...mockUrls].map(
          (image, i) => (
            <div key={image + i} className="w-48">
              <img src={image} alt="image" />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
