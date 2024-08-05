import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Heart, Info } from "lucide-react";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);

  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Discover the World of Dogs</h1>
          <p className="text-xl mb-8">Explore, learn, and fall in love with man's best friend</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Start Exploring
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <Card className="mb-8 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
            alt="Cute dog"
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-3xl">Man's Best Friend</CardTitle>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setLikeCount(prev => prev + 1)}
              >
                <Heart className={`h-4 w-4 ${likeCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>
            <CardDescription className="text-lg mb-4">Liked {likeCount} times</CardDescription>
            <p className="mb-4">
              Dogs have been domesticated for thousands of years and are known for their loyalty, 
              companionship, and diverse breeds. They come in various sizes, shapes, and temperaments, 
              making them suitable for different lifestyles and purposes.
            </p>
            <p>
              From working dogs to family pets, these amazing animals have played significant roles 
              in human society, including assisting in hunting, herding, protection, and even therapy.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="breeds" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Dog Breeds</CardTitle>
                <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {popularBreeds.map((breed, index) => (
                    <li key={index} className="flex items-center">
                      <Dog className="mr-2 h-4 w-4" />
                      {breed}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle>Fun Dog Facts</CardTitle>
                <CardDescription>Interesting tidbits about our canine friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Info className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    <span>A dog's sense of smell is 10,000 to 100,000 times stronger than a human's.</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Dogs can understand up to 250 words and gestures.</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    <span>The Basenji is the only breed of dog that can't bark, but they can yodel!</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
