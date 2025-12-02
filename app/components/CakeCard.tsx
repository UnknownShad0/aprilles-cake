// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// interface CakeCardProps {
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   onOrder: () => void;
// }

// export function CakeCard({ name, description, price, image, category, onOrder }: CakeCardProps) {
//   return (
//     <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <div className="relative h-64 overflow-hidden">
//         <ImageWithFallback
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//         <Badge className="absolute top-4 right-4">{category}</Badge>
//       </div>
      
//       <CardHeader>
//         <CardTitle>{name}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
      
//       <CardContent>
//         <div className="flex items-baseline gap-2">
//           <span className="text-3xl">${price}</span>
//           <span className="text-muted-foreground">starting from</span>
//         </div>
//       </CardContent>
      
//       <CardFooter>
//         <Button onClick={onOrder} className="w-full">
//           Order Now
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }
