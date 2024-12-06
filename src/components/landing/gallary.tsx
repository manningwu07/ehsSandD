"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Photo {
  imageSrc: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  duration?: number; // Duration in milliseconds
}

export default function PhotoGallery({
  photos = [{ imageSrc: "/ehsBackground.png" }],
  duration = 7000,
}: PhotoGalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, duration);

    return () => clearInterval(intervalId);
  }, [photos, duration]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
            index === currentPhotoIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={photo.imageSrc}
            alt={`Gallery-image-${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
