"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@/components/common/Modal";
import CustomButton from "@/components/common/CustomButton";
import CustomSelect from "@/components/common/CustomSelect";
import { useState } from "react";

const packageTypeOptions = [
  { value: "Monthly", label: "Monthly" },
  { value: "Quarterly", label: "Quarterly" },
  { value: "Yearly", label: "Yearly" },
];

interface CreatePackageProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePackage?: (packageData: {
    packageName: string;
    packageType: string;
    price: string;
    facilities: string;
  }) => void;
}

export default function CreatePackage({
  isOpen,
  onClose,
  onCreatePackage,
}: CreatePackageProps) {
  const [packageName, setPackageName] = useState("");
  const [packageType, setPackageType] = useState("");
  const [price, setPrice] = useState("");
  const [facilities, setFacilities] = useState("");

  const handleSubmit = () => {
    if (packageName && packageType && price && facilities) {
      onCreatePackage?.({
        packageName,
        packageType,
        price,
        facilities,
      });
      handleReset();
    }
  };

  const handleReset = () => {
    setPackageName("");
    setPackageType("");
    setPrice("");
    setFacilities("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Create New Package"
      width="w-[30%]"
    >
      <div className="space-y-6">
        <div>
          <Label htmlFor="package-name">Package Name</Label>
          <Input
            id="package-name"
            type="text"
            placeholder="Enter package name"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="package-type">Package Type</Label>
          <CustomSelect
            options={packageTypeOptions}
            value={packageType}
            onValueChange={setPackageType}
            placeholder="Select package type"
            className="w-full rounded-full px-5 h-12.5 text-[16px]"
          />
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="text"
            placeholder="Enter price (e.g., $9.99)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="facilities">Facilities</Label>
          <Textarea
            id="facilities"
            placeholder="Enter facilities (e.g., Basic Access, Email Support)"
            value={facilities}
            onChange={(e) => setFacilities(e.target.value)}
            className="min-h-32 rounded-xl"
          />
        </div>

        <div className="flex justify-end gap-3">
          <CustomButton variant="outline" onClick={handleReset}>
            Cancel
          </CustomButton>
          <CustomButton variant="default" onClick={handleSubmit}>
            Create Package
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
}
