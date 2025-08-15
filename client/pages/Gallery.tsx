import { Card } from "@/components/ui/card";
import { Camera, Image } from "lucide-react";

const galleryItems = [
  { id: 1, src: "/images/gallery/1.png", alt: "Gallery Image 1" },
  { id: 2, src: "/images/gallery/2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/images/gallery/3.png", alt: "Gallery Image 3" },
  { id: 4, src: "/images/gallery/4.jpg", alt: "Gallery Image 4" },
  { id: 5, src: "/images/gallery/5.png", alt: "Gallery Image 5" },
  { id: 6, src: "/images/gallery/6.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/images/gallery/7.png", alt: "Gallery Image 7" },
  { id: 8, src: "/images/gallery/8.jpg", alt: "Gallery Image 8" },
  { id: 9, src: "/images/gallery/9.png", alt: "Gallery Image 9" },
  { id: 10, src: "/images/gallery/10.jpg", alt: "Gallery Image 10" },
  { id: 11, src: "/images/gallery/11.png", alt: "Gallery Image 11" },
  { id: 12, src: "/images/gallery/12.jpg", alt: "Gallery Image 12" },
  { id: 13, src: "/images/gallery/13.png", alt: "Gallery Image 13" },
  { id: 14, src: "/images/gallery/14.jpg", alt: "Gallery Image 14" },
  { id: 15, src: "/images/gallery/15.png", alt: "Gallery Image 15" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Photo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Gallery
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our vibrant campus life, memorable events, and academic
            achievements through this visual journey
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
