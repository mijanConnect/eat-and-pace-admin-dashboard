"use client";

import { Label } from "@/components/ui/label";
import { Image, X } from "lucide-react";
import { useState } from "react";

export default function ProductImages() {
  const [images, setImages] = useState<string[]>(["", ""]);

  const handleImageUpload = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImages = [...images];
      newImages[index] = e.target?.result as string;
      setImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages[index] = "";
    setImages(newImages);
  };

  return (
    <div className="">
      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}

        {/* RIGHT SIDE */}
        <div className="w-full">
          <Label>Product Images</Label>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* File Box 1 */}
            <label className="relative flex flex-col bg-[#F7F9FC] items-center justify-center w-full h-50 border rounded-xl cursor-pointer hover:bg-muted transition overflow-hidden group">
              {images[0] ? (
                <>
                  <img
                    src={images[0]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveImage(0);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <Image className="w-6 h-6 mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Add Image
                  </span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleImageUpload(0, e.target.files[0]);
                  }
                }}
              />
            </label>

            {/* File Box 2 */}
            <label className="relative flex flex-col items-center bg-[#F7F9FC] justify-center w-full h-50 border rounded-xl cursor-pointer hover:bg-muted transition overflow-hidden group">
              {images[1] ? (
                <>
                  <img
                    src={images[1]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveImage(1);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <Image className="w-6 h-6 mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Add Image
                  </span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleImageUpload(1, e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
