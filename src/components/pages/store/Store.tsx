import Products from "./Products";
import Categories from "./Categories";
import { useSearchParams } from "react-router-dom";
import CustomButton from "@/components/common/CustomButton";

export default function Store() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "categories";

  const handleTabChange = (tab: "categories" | "products") => {
    setSearchParams({ tab });
  };

  return (
    <div className="space-y-4">
      {/* Toggle Buttons */}
      <div className="flex gap-3">
        <CustomButton
          variant={activeTab === "categories" ? "default" : "outline"}
          onClick={() => handleTabChange("categories")}
        >
          Categories
        </CustomButton>
        <CustomButton
          variant={activeTab === "products" ? "default" : "outline"}
          onClick={() => handleTabChange("products")}
        >
          Products
        </CustomButton>
      </div>

      {/* Table */}
      {activeTab === "categories" && <Categories />}
      {activeTab === "products" && <Products />}
    </div>
  );
}
