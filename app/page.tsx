import { CardCarousel } from "@/components/ui/card-carousel";
import WrapButton from "@/components/ui/wrap-button";
import { Camera } from "lucide-react";
import React from "react";
const page =()=>{

    const images = [
    { src: "/card1.jpg", alt: "Image 1" },
    { src: "/card2.jpg", alt: "Image 2" },
    { src: "/card4.jpg", alt: "Image 3" },
    { src: "/card6.jpg", alt: "Image 4" },
   
  ]
    return(
        <div>
            <CardCarousel images={images}/>
        </div>
      

    )
}
export default page