import { useState } from "react";

interface Props {
  images: string[];
}

export const GridImages = ({ images }: Props) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className="flex-1 flex flex-col gap-3 relative">
      <div className="bg-[#f2f2f2] h-[500px] p-4">
        <img
          src={activeImage}
          alt="Imagen de producto"
          className="h-full w-full object-contain"
        />
      </div>
      {/** Miniaturas */}
      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className={`w-16 h-16 p-1 border ${
              activeImage === image ? "border-black" : "border-transparent"
            } rounded-lg hover:border-black focus:outline-none`}
          >
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
