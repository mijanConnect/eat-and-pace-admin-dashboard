"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@/components/common/Modal";
import CustomButton from "@/components/common/CustomButton";
import { useState } from "react";

interface CreateTipsProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTip?: (tipData: {
    title: string;
    category: string;
    description: string;
  }) => void;
}

export default function CreateTips({
  isOpen,
  onClose,
  onCreateTip,
}: CreateTipsProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title && category && description) {
      onCreateTip?.({
        title,
        category,
        description,
      });
      handleReset();
    }
  };

  const handleReset = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Create Daily Health Tip"
      width="w-[60%]"
    >
      <div className="space-y-6">
        <div>
          <Label htmlFor="tip-title">Tip Title</Label>
          <Input
            id="tip-title"
            type="text"
            placeholder="Enter tip title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="tip-category">Category</Label>
          <Input
            id="tip-category"
            type="text"
            placeholder="e.g., Nutrition, Fitness, Mental Health, Sleep"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="tip-description">Description</Label>
          <Textarea
            id="tip-description"
            placeholder="Enter detailed health tip description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-32 rounded-xl"
          />
        </div>

        <div className="flex justify-end gap-3">
          <CustomButton variant="outline" onClick={handleReset}>
            Cancel
          </CustomButton>
          <CustomButton variant="default" onClick={handleSubmit}>
            Create Tip
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
}
