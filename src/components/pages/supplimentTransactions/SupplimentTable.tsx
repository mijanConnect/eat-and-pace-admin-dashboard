import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";

type OrderData = {
  orderId: string;
  productName: string;
  userName: string;
  contact: string;
  deliveryAddress: string;
  deliveryDate: string;
  price: string;
  quantity: string;
  deliveryStatus: "Pending" | "Shipped" | "Delivered";
};

const sampleData: OrderData[] = [
  {
    orderId: "#ORD001",
    productName: "Vitamin D3 Supplement",
    userName: "John Smith",
    contact: "+8801712345678",
    deliveryAddress: "123 Main St, Dhaka",
    deliveryDate: "20/03/26",
    price: "$25",
    quantity: "2",
    deliveryStatus: "Delivered",
  },
  {
    orderId: "#ORD002",
    productName: "Omega-3 Fatty Acids",
    userName: "Sarah Johnson",
    contact: "+8801812345678",
    deliveryAddress: "456 Oak Ave, Chittagong",
    deliveryDate: "21/03/26",
    price: "$40",
    quantity: "1",
    deliveryStatus: "Shipped",
  },
  {
    orderId: "#ORD003",
    productName: "Multivitamin Complex",
    userName: "Michael Brown",
    contact: "+8801912345678",
    deliveryAddress: "789 Pine Rd, Sylhet",
    deliveryDate: "22/03/26",
    price: "$35",
    quantity: "3",
    deliveryStatus: "Pending",
  },
  {
    orderId: "#ORD004",
    productName: "Calcium & Magnesium",
    userName: "Emily Davis",
    contact: "+8801612345678",
    deliveryAddress: "321 Elm St, Khulna",
    deliveryDate: "23/03/26",
    price: "$30",
    quantity: "2",
    deliveryStatus: "Delivered",
  },
  {
    orderId: "#ORD005",
    productName: "Probiotics Supplement",
    userName: "David Wilson",
    contact: "+8801512345678",
    deliveryAddress: "654 Maple Dr, Rajshahi",
    deliveryDate: "24/03/26",
    price: "$45",
    quantity: "1",
    deliveryStatus: "Shipped",
  },
  {
    orderId: "#ORD006",
    productName: "Iron Supplement",
    userName: "Sophia Taylor",
    contact: "+8801312345678",
    deliveryAddress: "987 Birch Ln, Barisal",
    deliveryDate: "25/03/26",
    price: "$20",
    quantity: "2",
    deliveryStatus: "Pending",
  },
  {
    orderId: "#ORD007",
    productName: "Vitamin C Booster",
    userName: "James Anderson",
    contact: "+8801212345678",
    deliveryAddress: "135 Cedar Ct, Rangpur",
    deliveryDate: "26/03/26",
    price: "$15",
    quantity: "4",
    deliveryStatus: "Delivered",
  },
  {
    orderId: "#ORD008",
    productName: "Zinc & Selenium",
    userName: "Olivia Thomas",
    contact: "+8801112345678",
    deliveryAddress: "246 Spruce St, Mymensingh",
    deliveryDate: "27/03/26",
    price: "$28",
    quantity: "1",
    deliveryStatus: "Shipped",
  },
  {
    orderId: "#ORD009",
    productName: "B-Complex Vitamins",
    userName: "William Martin",
    contact: "+8801012345678",
    deliveryAddress: "369 Willow Ave, Dhaka",
    deliveryDate: "28/03/26",
    price: "$32",
    quantity: "2",
    deliveryStatus: "Pending",
  },
  {
    orderId: "#ORD010",
    productName: "Collagen Powder",
    userName: "Ava White",
    contact: "+8801711122233",
    deliveryAddress: "741 Ash St, Sylhet",
    deliveryDate: "29/03/26",
    price: "$50",
    quantity: "1",
    deliveryStatus: "Delivered",
  },
];

const handleRowClick = (item: OrderData) => {
  console.log("Row clicked:", item);
};

export default function SupplimentTable() {
  const [data] = useState<OrderData[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  const columns: Column<OrderData>[] = [
    { key: "orderId", label: "Order ID", width: "8%" },
    { key: "productName", label: "Product Name", width: "14%" },
    { key: "userName", label: "User Name", width: "12%" },
    { key: "contact", label: "Contact", width: "12%" },
    { key: "deliveryAddress", label: "Delivery Address", width: "18%" },
    { key: "deliveryDate", label: "Delivery Date", width: "10%" },
    { key: "price", label: "Price", width: "8%" },
    { key: "quantity", label: "Quantity", width: "8%" },
    {
      key: "deliveryStatus",
      label: "Delivery Status",
      width: "12%",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
            value === "Delivered"
              ? "bg-green-100 text-green-800 border border-green-300"
              : value === "Shipped"
                ? "bg-blue-100 text-blue-800 border border-blue-300"
                : "bg-yellow-100 text-yellow-800 border border-yellow-300"
          }`}
        >
          {String(value)}
        </span>
      ),
    },
  ];

  const openModal = (item: OrderData) => {
    setSelectedOrder(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const actions: TableAction<OrderData>[] = [
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
      <DataTable<OrderData>
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={actions}
        rowKey="orderId"
        onRowClick={handleRowClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Order Details"
        maxWidth="max-w-[1200px]"
        width="w-[40%]"
      >
        {selectedOrder && (
          <div className="space-y-4 p-4">
            <div>
              <label className="font-semibold text-gray-700">Order ID:</label>
              <p className="text-gray-600">{selectedOrder.orderId}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Product Name:
              </label>
              <p className="text-gray-600">{selectedOrder.productName}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">User Name:</label>
              <p className="text-gray-600">{selectedOrder.userName}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Contact:</label>
              <p className="text-gray-600">{selectedOrder.contact}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Delivery Address:
              </label>
              <p className="text-gray-600">{selectedOrder.deliveryAddress}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Delivery Date:
              </label>
              <p className="text-gray-600">{selectedOrder.deliveryDate}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Price:</label>
              <p className="text-gray-600">{selectedOrder.price}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Quantity:</label>
              <p className="text-gray-600">{selectedOrder.quantity}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Delivery Status:
              </label>
              <p
                className={`text-sm font-semibold w-fit px-3 py-1 rounded-full ${
                  selectedOrder.deliveryStatus === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : selectedOrder.deliveryStatus === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {selectedOrder.deliveryStatus}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
