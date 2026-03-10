"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Modal from "@/components/common/Modal";
import CustomButton from "@/components/common/CustomButton";
import { useState } from "react";

interface AddCategoriesProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCategory?: (categoryName: string) => void;
}

export default function AddCategories({
  isOpen,
  onClose,
  onAddCategory,
}: AddCategoriesProps) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    if (categoryName.trim()) {
      onAddCategory?.(categoryName);
      handleReset();
    }
  };

  const handleReset = () => {
    setCategoryName("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Add New Category"
      width="w-[25%]"
    >
      <div className="space-y-6">
        <div>
          <Label htmlFor="category-name">Category Name</Label>
          <Input
            id="category-name"
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>

        <div className="flex justify-end gap-3">
          <CustomButton variant="outline" onClick={handleReset}>
            Cancel
          </CustomButton>
          <CustomButton variant="default" onClick={handleSubmit}>
            Add Category
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
}
