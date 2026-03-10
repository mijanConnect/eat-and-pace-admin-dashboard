import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type CategoryData = {
  id: number;
  sn: string;
  categoryName: string;
  items: number;
  status: boolean;
};

const initialData: CategoryData[] = [
  {
    id: 1,
    sn: "01",
    categoryName: "Protein",
    items: 50,
    status: true,
  },
  {
    id: 2,
    sn: "02",
    categoryName: "Vitamins",
    items: 45,
    status: true,
  },
  {
    id: 3,
    sn: "03",
    categoryName: "Minerals",
    items: 38,
    status: true,
  },
  {
    id: 4,
    sn: "04",
    categoryName: "Omega-3",
    items: 28,
    status: false,
  },
  {
    id: 5,
    sn: "05",
    categoryName: "Probiotics",
    items: 32,
    status: true,
  },
  {
    id: 6,
    sn: "06",
    categoryName: "Amino Acids",
    items: 25,
    status: true,
  },
  {
    id: 7,
    sn: "07",
    categoryName: "Herbal Supplements",
    items: 42,
    status: true,
  },
  {
    id: 8,
    sn: "08",
    categoryName: "Energy Boosters",
    items: 19,
    status: false,
  },
  {
    id: 9,
    sn: "09",
    categoryName: "Joint Care",
    items: 21,
    status: true,
  },
  {
    id: 10,
    sn: "10",
    categoryName: "Immune Support",
    items: 35,
    status: true,
  },
];

const handleRowClick = (item: CategoryData) => {
  console.log("Row clicked:", item);
};

export default function CategoryTable() {
  const [data, setData] = useState<CategoryData[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(
    null,
  );

  const handleStatusToggle = (id: number, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: checked } : item,
      ),
    );
  };

  const columns: Column<CategoryData>[] = [
    { key: "sn", label: "S.N", width: "10%" },
    { key: "categoryName", label: "Category Name", width: "35%" },
    { key: "items", label: "Items", width: "25%" },
    {
      key: "status",
      label: "Status",
      width: "20%",
      render: (_, item) => (
        <div className="flex gap-2 items-center justify-start">
          <Switch
            checked={item.status}
            onCheckedChange={(checked) => handleStatusToggle(item.id, checked)}
          />
        </div>
      ),
    },
  ];

  const openModal = (item: CategoryData) => {
    setSelectedCategory(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const actions: TableAction<CategoryData>[] = [
    {
      label: "View",
      onClick: (item) => openModal(item),
      variant: "outline",
      size: "sm",
    },
    {
      label: "Delete",
      onClick: (item) => console.log("Delete:", item),
      variant: "destructive",
      size: "sm",
    },
  ];

  return (
    <>
      <DataTable<CategoryData>
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={actions}
        rowKey="id"
        onRowClick={handleRowClick}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Category Details"
        maxWidth="max-w-[1200px]"
        width="w-[40%]"
      >
        {selectedCategory && (
          <div className="space-y-4 p-4">
            <div>
              <label className="font-semibold text-gray-700">
                Category ID:
              </label>
              <p className="text-gray-600">{selectedCategory.id}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
