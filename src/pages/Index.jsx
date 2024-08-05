import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
          alt="Cute dog"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Man's Best Friend</CardTitle>
            <CardDescription>Learn about our canine companions</CardDescription>
          </CardHeader>
          <CardContent>
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

        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
            <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed, index) => (
                <li key={index} className="mb-2">{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
