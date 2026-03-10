import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import { Switch } from "@/components/ui/switch";
import ViewSubscription from "./ViewSubscription";

type SubscriptionData = {
  sn: string;
  packageName: string;
  packageType: string;
  price: string;
  facilities: string;
  status: boolean;
};

const sampleData: SubscriptionData[] = [
  {
    sn: "01",
    packageName: "Basic Plan",
    packageType: "Monthly",
    price: "$9.99",
    facilities: "Basic Access, Email Support",
    status: true,
  },
  {
    sn: "02",
    packageName: "Pro Plan",
    packageType: "Monthly",
    price: "$19.99",
    facilities: "Full Access, Priority Support",
    status: true,
  },
  {
    sn: "03",
    packageName: "Premium Plan",
    packageType: "Quarterly",
    price: "$49.99",
    facilities: "Full Access, Priority Support, Premium Features",
    status: true,
  },
  {
    sn: "04",
    packageName: "Enterprise Plan",
    packageType: "Yearly",
    price: "$99.99",
    facilities: "Full Access, 24/7 Support, Dedicated Manager",
    status: false,
  },
  {
    sn: "05",
    packageName: "Student Plan",
    packageType: "Monthly",
    price: "$4.99",
    facilities: "Basic Access, Email Support",
    status: true,
  },
  {
    sn: "06",
    packageName: "Family Plan",
    packageType: "Monthly",
    price: "$29.99",
    facilities: "Full Access for 4 Members, Priority Support",
    status: true,
  },
];

const handleRowClick = (item: SubscriptionData) => {
  console.log("Row clicked:", item);
};

export default function UsersTable() {
  const [data, setData] = useState<SubscriptionData[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] =
    useState<SubscriptionData | null>(null);

  const handleStatusToggle = (index: number, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, status: checked } : item,
      ),
    );
  };

  const columns: Column<SubscriptionData>[] = [
    { key: "sn", label: "S.N", width: "10%" },
    { key: "packageName", label: "Package Name", width: "20%" },
    { key: "packageType", label: "Package Type", width: "15%" },
    { key: "price", label: "Price", width: "12%" },
    { key: "facilities", label: "Facilities", width: "30%" },
    {
      key: "status",
      label: "Status",
      width: "13%",
      render: (_, item) => (
        <div className="flex gap-2 items-center justify-start">
          <Switch
            checked={item.status}
            onCheckedChange={(checked) => {
              const index = data.indexOf(item);
              handleStatusToggle(index, checked);
            }}
          />
        </div>
      ),
    },
  ];

  const openModal = (item: SubscriptionData) => {
    setSelectedSubscription(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubscription(null);
  };

  const actions: TableAction<SubscriptionData>[] = [
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
      <DataTable<SubscriptionData>
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={actions}
        rowKey="sn"
        onRowClick={handleRowClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Subscription Details"
        maxWidth="max-w-[1200px]"
        width="w-[40%]"
      >
        {selectedSubscription && (
          <ViewSubscription user={selectedSubscription} />
        )}
      </Modal>
    </>
  );
}
