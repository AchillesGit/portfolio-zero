const mockUrls = [
  "https://images.unsplash.com/photo-1559163499-413811fb2344",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051",
];

const mockImages = mockUrls.map((url) => ({
  id: url,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (imabe) => (
            <div key={imabe.id} className="w-48">
              <img src={imabe.url} alt="image" />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
