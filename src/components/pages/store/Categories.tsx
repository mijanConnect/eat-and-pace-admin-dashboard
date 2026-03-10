"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import CustomButton from "@/components/common/CustomButton";
import CategoryTable from "./CategoryTable";
import AddCategories from "./AddCategories";

export default function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCategory = (categoryName: string) => {
    console.log("New category added:", categoryName);
    // Here you can add API call to save the category
  };

  return (
    <div className="space-y-4">
      {/* Search + Select Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-end">
        {/* Create Button */}
        <CustomButton
          variant="default"
          size="default"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-5 w-5 white" />
          Add Categories
        </CustomButton>
      </div>

      {/* Table */}
      <CategoryTable />

      {/* Add Categories Modal */}
      <AddCategories
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCategory={handleAddCategory}
      />
    </div>
  );
}
