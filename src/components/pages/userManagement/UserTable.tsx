import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import { Switch } from "@/components/ui/switch";
import ViewUser from "./ViewUser";

type UserData = {
  userId: number;
  userName: string;
  contact: string;
  email: string;
  location: string;
  status: boolean;
  subscriptionStatus: boolean;
};

const sampleData: UserData[] = [
  {
    userId: 1,
    userName: "John Doe",
    contact: "+8801712345678",
    email: "john@example.com",
    location: "Dhaka",
    status: true,
    subscriptionStatus: true,
  },
  {
    userId: 2,
    userName: "Jane Smith",
    contact: "+8801812345678",
    email: "jane@example.com",
    location: "Chittagong",
    status: false,
    subscriptionStatus: false,
  },
  {
    userId: 3,
    userName: "Michael Johnson",
    contact: "+8801912345678",
    email: "michael@example.com",
    location: "Sylhet",
    status: true,
    subscriptionStatus: false,
  },
  {
    userId: 4,
    userName: "Emily Brown",
    contact: "+8801612345678",
    email: "emily@example.com",
    location: "Khulna",
    status: true,
    subscriptionStatus: true,
  },
  {
    userId: 5,
    userName: "David Wilson",
    contact: "+8801512345678",
    email: "david@example.com",
    location: "Rajshahi",
    status: false,
    subscriptionStatus: true,
  },
  {
    userId: 6,
    userName: "Sophia Taylor",
    contact: "+8801312345678",
    email: "sophia@example.com",
    location: "Barisal",
    status: true,
    subscriptionStatus: false,
  },
  {
    userId: 7,
    userName: "James Anderson",
    contact: "+8801212345678",
    email: "james@example.com",
    location: "Rangpur",
    status: true,
    subscriptionStatus: true,
  },
  {
    userId: 8,
    userName: "Olivia Thomas",
    contact: "+8801112345678",
    email: "olivia@example.com",
    location: "Mymensingh",
    status: false,
    subscriptionStatus: false,
  },
  {
    userId: 9,
    userName: "William Martin",
    contact: "+8801012345678",
    email: "william@example.com",
    location: "Dhaka",
    status: true,
    subscriptionStatus: true,
  },
  {
    userId: 10,
    userName: "Ava White",
    contact: "+8801711122233",
    email: "ava@example.com",
    location: "Sylhet",
    status: false,
    subscriptionStatus: true,
  },
  {
    userId: 11,
    userName: "Daniel Harris",
    contact: "+8801719988776",
    email: "daniel@example.com",
    location: "Dhaka",
    status: true,
    subscriptionStatus: false,
  },
  {
    userId: 12,
    userName: "Isabella Clark",
    contact: "+8801714455667",
    email: "isabella@example.com",
    location: "Chittagong",
    status: true,
    subscriptionStatus: true,
  },
];

const handleRowClick = (item: UserData) => {
  console.log("Row clicked:", item);
};

export default function UsersTable() {
  const [data, setData] = useState<UserData[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const handleStatusToggle = (userId: number, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.userId === userId ? { ...item, status: checked } : item,
      ),
    );
  };

  const columns: Column<UserData>[] = [
    { key: "userId", label: "User ID", width: "10%" },
    { key: "userName", label: "User Name", width: "20%" },
    { key: "contact", label: "Contact", width: "20%" },
    { key: "email", label: "Email", width: "20%" },
    { key: "location", label: "Location", width: "20%" },
    {
      key: "status",
      label: "Status",
      width: "10%",
      render: (_, item) => (
        <div className="flex gap-2 items-center justify-start">
          <Switch
            checked={item.status}
            onCheckedChange={(checked) =>
              handleStatusToggle(item.userId, checked)
            }
          />
        </div>
      ),
    },
  ];

  const openModal = (item: UserData) => {
    setSelectedUser(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const actions: TableAction<UserData>[] = [
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
      <DataTable<UserData>
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
        title="User Details"
        maxWidth="max-w-[1200px]"
        width="w-[40%]"
      >
        {selectedUser && <ViewUser user={selectedUser} />}
      </Modal>
    </>
  );
}
