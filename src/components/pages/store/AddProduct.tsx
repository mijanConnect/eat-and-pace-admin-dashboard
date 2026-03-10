import { Label } from "@/components/ui/label";
import ProductImages from "./ProductImages";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "@/components/common/CustomSelect";
import { useState } from "react";
import CustomButton from "@/components/common/CustomButton";

export default function AddProduct() {
  const navigate = useNavigate();
  const [specialist, setSpecialist] = useState("");

  const specialistOptions = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "gynecology", label: "Gynecology" },
  ];

  return (
    <>
      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/store?tab=products")}
            className="flex items-center gap-2 text-muted-foreground cursor-pointer border p-2 rounded-full hover:bg-muted transition"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-2xl font-semibold mb-0">Add Product</h1>
        </div>
        <div className="flex flex-col gap-6">
          <ProductImages />
          <div>
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              type="text"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <Label>Specialist In</Label>
            <CustomSelect
              options={specialistOptions}
              value={specialist}
              onValueChange={setSpecialist}
              placeholder="Select specialization"
              className="w-full rounded-full px-5 h-12.5 text-[16px]"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="regular-price">Regular Price</Label>
              <Input
                id="regular-price"
                type="text"
                placeholder="Enter regular price"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="offer-price">Offer Price</Label>
              <Input
                id="offer-price"
                type="text"
                placeholder="Enter offer price"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="tax-percentage">Tax Percentage</Label>
            <Input
              id="tax-percentage"
              type="text"
              placeholder="Enter tax percentage"
            />
          </div>
          <div className="w-full space-y-2">
            <Label>Product Description</Label>
            <Textarea
              placeholder="Enter product description"
              className="min-h-50 rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <CustomButton
            variant="outline"
            onClick={() => navigate("/store?tab=products")}
          >
            Cancel
          </CustomButton>
          <CustomButton
            variant="default"
            onClick={() => navigate("/store?tab=products")}
          >
            Add Product
          </CustomButton>
        </div>
      </div>
    </>
  );
}
