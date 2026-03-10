import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import ViewSubscriber from "./ViewSubscriber";

type SubscriberData = {
  userId: string;
  date: string;
  userName: string;
  packageName: string;
  type: string;
  price: string;
  status: "pending" | "completed";
};

const sampleData: SubscriberData[] = [
  {
    userId: "U001",
    date: "2024-03-01",
    userName: "John Doe",
    packageName: "Basic Plan",
    type: "Monthly",
    price: "$9.99",
    status: "completed",
  },
  {
    userId: "U002",
    date: "2024-03-02",
    userName: "Jane Smith",
    packageName: "Pro Plan",
    type: "Monthly",
    price: "$19.99",
    status: "pending",
  },
  {
    userId: "U003",
    date: "2024-03-03",
    userName: "Michael Johnson",
    packageName: "Premium Plan",
    type: "Quarterly",
    price: "$49.99",
    status: "completed",
  },
  {
    userId: "U004",
    date: "2024-03-04",
    userName: "Emily Brown",
    packageName: "Enterprise Plan",
    type: "Yearly",
    price: "$99.99",
    status: "completed",
  },
  {
    userId: "U005",
    date: "2024-03-05",
    userName: "David Wilson",
    packageName: "Student Plan",
    type: "Monthly",
    price: "$4.99",
    status: "pending",
  },
  {
    userId: "U006",
    date: "2024-03-06",
    userName: "Sophia Taylor",
    packageName: "Family Plan",
    type: "Monthly",
    price: "$29.99",
    status: "completed",
  },
  {
    userId: "U007",
    date: "2024-03-07",
    userName: "James Anderson",
    packageName: "Basic Plan",
    type: "Monthly",
    price: "$9.99",
    status: "pending",
  },
  {
    userId: "U008",
    date: "2024-03-08",
    userName: "Olivia Thomas",
    packageName: "Pro Plan",
    type: "Monthly",
    price: "$19.99",
    status: "completed",
  },
  {
    userId: "U009",
    date: "2024-03-09",
    userName: "William Martin",
    packageName: "Premium Plan",
    type: "Quarterly",
    price: "$49.99",
    status: "completed",
  },
  {
    userId: "U010",
    date: "2024-03-10",
    userName: "Ava White",
    packageName: "Family Plan",
    type: "Monthly",
    price: "$29.99",
    status: "pending",
  },
];

const handleRowClick = (item: SubscriberData) => {
  console.log("Row clicked:", item);
};

export default function SubscriberTable() {
  const [data, setData] = useState<SubscriberData[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] =
    useState<SubscriberData | null>(null);

  const openModal = (item: SubscriberData) => {
    setSelectedSubscriber(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubscriber(null);
  };

  const columns: Column<SubscriberData>[] = [
    { key: "userId", label: "User ID", width: "12%" },
    { key: "date", label: "Date", width: "12%" },
    { key: "userName", label: "User Name", width: "18%" },
    { key: "packageName", label: "Package Name", width: "18%" },
    { key: "type", label: "Type", width: "12%" },
    { key: "price", label: "Price", width: "12%" },
    {
      key: "status",
      label: "Status",
      width: "16%",
      render: (_, item) => (
        <div className="flex items-center">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              item.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>
      ),
    },
  ];

  const actions: TableAction<SubscriberData>[] = [
    {
      label: "View",
      onClick: (item) => openModal(item),
      variant: "outline",
      size: "sm",
    },
    {
      label: "Delete",
      onClick: (item) => {
        setData(data.filter((d) => d.userId !== item.userId));
        console.log("Delete:", item);
      },
      variant: "destructive",
      size: "sm",
    },
  ];

  return (
    <>
      <DataTable<SubscriberData>
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={actions}
        rowKey="userId"
        onRowClick={handleRowClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Subscriber Details"
        maxWidth="max-w-[1200px]"
        width="w-[60%]"
      >
        {selectedSubscriber && (
          <ViewSubscriber subscriber={selectedSubscriber} />
        )}
      </Modal>
    </>
  );
}
