import CustomButton from "@/components/common/CustomButton";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Protein Powder",
    price: 45,
    oldPrice: 60,
    image: "https://picsum.photos/200/150?random=1",
  },
  {
    id: 2,
    name: "Vitamin C",
    price: 25,
    oldPrice: 35,
    image: "https://picsum.photos/200/150?random=2",
  },
  {
    id: 3,
    name: "Fish Oil",
    price: 30,
    oldPrice: 40,
    image: "https://picsum.photos/200/150?random=3",
  },
  {
    id: 4,
    name: "Creatine",
    price: 50,
    oldPrice: 70,
    image: "https://picsum.photos/200/150?random=4",
  },
  {
    id: 5,
    name: "Mass Gainer",
    price: 65,
    oldPrice: 85,
    image: "https://picsum.photos/200/150?random=5",
  },
  {
    id: 6,
    name: "Multivitamin",
    price: 20,
    oldPrice: 30,
    image: "https://picsum.photos/200/150?random=6",
  },
  {
    id: 7,
    name: "Calcium Tablets",
    price: 18,
    oldPrice: 25,
    image: "https://picsum.photos/200/150?random=7",
  },
  {
    id: 8,
    name: "Omega 3",
    price: 28,
    oldPrice: 38,
    image: "https://picsum.photos/200/150?random=8",
  },
  {
    id: 9,
    name: "BCAA",
    price: 40,
    oldPrice: 55,
    image: "https://picsum.photos/200/150?random=9",
  },
  {
    id: 10,
    name: "Whey Protein",
    price: 55,
    oldPrice: 75,
    image: "https://picsum.photos/200/150?random=10",
  },
  {
    id: 11,
    name: "Zinc Supplement",
    price: 15,
    oldPrice: 22,
    image: "https://picsum.photos/200/150?random=11",
  },
  {
    id: 12,
    name: "Electrolyte Drink",
    price: 12,
    oldPrice: 18,
    image: "https://picsum.photos/200/150?random=12",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-end mb-5">
          {/* Create Button */}
          <CustomButton
            variant="default"
            size="default"
            onClick={() => navigate("/store/add")}
          >
            <Plus className="h-5 w-5 white" />
            Add Product
          </CustomButton>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 p-2 rounded-xl shadow-[0_0_1px_1px_rgba(0,0,0,0.1)]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 object-cover rounded-lg"
              />

              <h2 className="text-[18px] font-semibold mt-2">{product.name}</h2>

              <div className="mb-2">
                <h3 className="text-[16px] font-medium text-yellow-500">
                  ${product.price.toFixed(2)}
                  <span className="text-[12px] text-gray-500 ml-1 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </h3>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-white rounded-md"
              >
                Edit
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
