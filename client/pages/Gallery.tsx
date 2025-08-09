import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Camera, Image, Users, Building, Trophy, Calendar, Play, ZoomIn, Filter } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Image, count: 48 },
  { id: "campus", name: "Campus Life", icon: Building, count: 16 },
  { id: "events", name: "Events & Functions", icon: Calendar, count: 12 },
  { id: "students", name: "Student Activities", icon: Users, count: 10 },
  { id: "achievements", name: "Achievements", icon: Trophy, count: 8 },
  { id: "facilities", name: "Facilities & Labs", icon: Building, count: 12 }
];

const galleryItems = [
  // Campus Life
  {
    id: 1,
    category: "campus",
    title: "Main College Building",
    description: "Government Polytechnic College main academic building with modern architecture",
    type: "image",
    thumbnail: "campus-1"
  },
  {
    id: 2,
    category: "campus",
    title: "College Campus Aerial View",
    description: "Beautiful aerial view of our 17.35 acres campus",
    type: "image",
    thumbnail: "campus-2"
  },
  {
    id: 3,
    category: "campus",
    title: "College Garden",
    description: "Lush green gardens providing a peaceful environment for students",
    type: "image",
    thumbnail: "campus-3"
  },
  {
    id: 4,
    category: "campus",
    title: "Library Building",
    description: "State-of-the-art library with extensive collection of books and digital resources",
    type: "image",
    thumbnail: "campus-4"
  },

  // Events & Functions
  {
    id: 5,
    category: "events",
    title: "Annual Day Celebration",
    description: "Students showcasing their talents during annual day cultural programs",
    type: "image",
    thumbnail: "event-1"
  },
  {
    id: 6,
    category: "events",
    title: "Technical Symposium",
    description: "Inter-college technical symposium with project exhibitions",
    type: "image",
    thumbnail: "event-2"
  },
  {
    id: 7,
    category: "events",
    title: "Graduation Ceremony",
    description: "Proud moment as students receive their diplomas",
    type: "image",
    thumbnail: "event-3"
  },
  {
    id: 8,
    category: "events",
    title: "Independence Day Celebration",
    description: "Patriotic celebration with flag hoisting and cultural programs",
    type: "video",
    thumbnail: "event-4"
  },

  // Student Activities
  {
    id: 9,
    category: "students",
    title: "Study Groups",
    description: "Students collaborating in group study sessions",
    type: "image",
    thumbnail: "student-1"
  },
  {
    id: 10,
    category: "students",
    title: "Sports Day",
    description: "Athletic competitions and sports activities",
    type: "image",
    thumbnail: "student-2"
  },
  {
    id: 11,
    category: "students",
    title: "Cultural Club Performance",
    description: "Students performing traditional dance and music",
    type: "video",
    thumbnail: "student-3"
  },
  {
    id: 12,
    category: "students",
    title: "Student Council Meeting",
    description: "Student representatives discussing college matters",
    type: "image",
    thumbnail: "student-4"
  },

  // Achievements
  {
    id: 13,
    category: "achievements",
    title: "Inter-College Competition Winners",
    description: "Our students winning prestigious inter-college competitions",
    type: "image",
    thumbnail: "achievement-1"
  },
  {
    id: 14,
    category: "achievements",
    title: "Best Project Award",
    description: "Final year students receiving awards for innovative projects",
    type: "image",
    thumbnail: "achievement-2"
  },
  {
    id: 15,
    category: "achievements",
    title: "Placement Success Stories",
    description: "Students celebrating their placement offers from top companies",
    type: "image",
    thumbnail: "achievement-3"
  },

  // Facilities & Labs
  {
    id: 16,
    category: "facilities",
    title: "Computer Lab",
    description: "Modern computer laboratory with latest systems and software",
    type: "image",
    thumbnail: "lab-1"
  },
  {
    id: 17,
    category: "facilities",
    title: "Electronics Lab",
    description: "Well-equipped electronics laboratory for practical learning",
    type: "image",
    thumbnail: "lab-2"
  },
  {
    id: 18,
    category: "facilities",
    title: "Mechanical Workshop",
    description: "Comprehensive mechanical workshop with modern machinery",
    type: "image",
    thumbnail: "lab-3"
  },
  {
    id: 19,
    category: "facilities",
    title: "Virtual Lab Tour",
    description: "Take a virtual tour of our state-of-the-art laboratories",
    type: "video",
    thumbnail: "lab-4"
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: any) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our vibrant campus life, memorable events, and academic achievements through this visual journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`flex items-center space-x-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "hover:shadow-md hover:border-purple-300"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <Badge variant={selectedCategory === category.id ? "secondary" : "outline"} className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-700"
              onClick={() => openLightbox(item)}
            >
              <div className="relative aspect-square">
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 dark:from-purple-800 dark:via-pink-800 dark:to-purple-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    {item.type === "video" ? (
                      <Play className="h-12 w-12 text-purple-600 dark:text-purple-300 mb-2" />
                    ) : (
                      <Image className="h-12 w-12 text-purple-600 dark:text-purple-300 mb-2" />
                    )}
                    <p className="text-sm text-purple-700 dark:text-purple-200 font-medium">
                      {item.thumbnail}
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View {item.type === "video" ? "Video" : "Image"}</p>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90 text-purple-700">
                    {item.type === "video" ? (
                      <Play className="h-3 w-3 mr-1" />
                    ) : (
                      <Image className="h-3 w-3 mr-1" />
                    )}
                    {item.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">48+</div>
                <div className="text-purple-100">Photos & Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-purple-100">Events Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="text-purple-100">Facility Showcases</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-purple-100">Years of Memories</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <CardContent className="p-8 text-center">
            <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Share Your Memories
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Have photos or videos from college events? We'd love to feature them in our gallery! 
              Contact us to share your memorable moments.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Camera className="h-4 w-4 mr-2" />
              Submit Photos
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-semibold">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 p-6 pt-0">
            <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 dark:from-purple-800 dark:via-pink-800 dark:to-purple-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                {selectedItem?.type === "video" ? (
                  <Play className="h-24 w-24 text-purple-600 dark:text-purple-300 mb-4 mx-auto" />
                ) : (
                  <Image className="h-24 w-24 text-purple-600 dark:text-purple-300 mb-4 mx-auto" />
                )}
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-200 mb-2">
                  {selectedItem?.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-300 max-w-md mx-auto">
                  {selectedItem?.description}
                </p>
                <p className="text-sm text-purple-500 dark:text-purple-400 mt-4">
                  Placeholder for: {selectedItem?.thumbnail}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
