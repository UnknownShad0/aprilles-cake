// import { useState } from "react";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
// import { Textarea } from "./ui/textarea";
// import { toast } from "sonner@2.0.3";

// interface OrderModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   selectedCake?: {
//     name: string;
//     price: number;
//   } | null;
// }

// export function OrderModal({ isOpen, onClose, selectedCake }: OrderModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     cakeSize: "medium",
//     quantity: "1",
//     deliveryDate: "",
//     specialInstructions: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Mock order submission
//     toast.success("Order placed successfully! We'll contact you shortly.", {
//       description: `Your ${selectedCake?.name} order has been confirmed.`,
//     });
    
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       cakeSize: "medium",
//       quantity: "1",
//       deliveryDate: "",
//       specialInstructions: "",
//     });
    
//     onClose();
//   };

//   const calculateTotal = () => {
//     if (!selectedCake) return 0;
//     const sizeMultiplier = formData.cakeSize === "small" ? 0.8 : formData.cakeSize === "large" ? 1.5 : 1;
//     return selectedCake.price * sizeMultiplier * parseInt(formData.quantity);
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>Order {selectedCake?.name}</DialogTitle>
//           <DialogDescription>
//             Fill in your details to complete your order. We'll contact you to confirm.
//           </DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Full Name *</Label>
//             <Input
//               id="name"
//               required
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               placeholder="John Doe"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email">Email *</Label>
//             <Input
//               id="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               placeholder="john@example.com"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone Number *</Label>
//             <Input
//               id="phone"
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               placeholder="+1 (555) 123-4567"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="address">Delivery Address *</Label>
//             <Textarea
//               id="address"
//               required
//               value={formData.address}
//               onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//               placeholder="123 Main St, City, State, ZIP"
//               rows={3}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="size">Cake Size *</Label>
//               <Select
//                 value={formData.cakeSize}
//                 onValueChange={(value) => setFormData({ ...formData, cakeSize: value })}
//               >
//                 <SelectTrigger id="size">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="small">Small (6")</SelectItem>
//                   <SelectItem value="medium">Medium (8")</SelectItem>
//                   <SelectItem value="large">Large (10")</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="quantity">Quantity *</Label>
//               <Select
//                 value={formData.quantity}
//                 onValueChange={(value) => setFormData({ ...formData, quantity: value })}
//               >
//                 <SelectTrigger id="quantity">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="1">1</SelectItem>
//                   <SelectItem value="2">2</SelectItem>
//                   <SelectItem value="3">3</SelectItem>
//                   <SelectItem value="4">4</SelectItem>
//                   <SelectItem value="5">5</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="date">Preferred Delivery Date *</Label>
//             <Input
//               id="date"
//               type="date"
//               required
//               value={formData.deliveryDate}
//               onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
//               min={new Date().toISOString().split('T')[0]}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="instructions">Special Instructions</Label>
//             <Textarea
//               id="instructions"
//               value={formData.specialInstructions}
//               onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
//               placeholder="Any special requests or dietary requirements?"
//               rows={3}
//             />
//           </div>

//           <div className="pt-4 border-t">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-muted-foreground">Estimated Total:</span>
//               <span className="text-2xl">${calculateTotal().toFixed(2)}</span>
//             </div>
            
//             <div className="flex gap-3">
//               <Button type="button" variant="outline" onClick={onClose} className="flex-1">
//                 Cancel
//               </Button>
//               <Button type="submit" className="flex-1">
//                 Place Order
//               </Button>
//             </div>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
