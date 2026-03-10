import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import { Switch } from "@/components/ui/switch";
import ViewDoctor from "./ViewDoctor";

type DoctorData = {
  doctorId: string;
  regDate: string;
  name: string;
  email: string;
  gender: string;
  specialization: string;
  dniNumber: string;
  experience: string;
  patients: string;
  rating: string;
  status: boolean;
};

const sampleData: DoctorData[] = [
  {
    doctorId: "#1001",
    regDate: "12/10/25",
    name: "John Doe",
    email: "sample@gmail.com",
    gender: "Male",
    specialization: "Medicine",
    dniNumber: "12345678",
    experience: "5 Years",
    patients: "400+",
    rating: "4.5(400+)",
    status: true,
  },
  {
    doctorId: "#1002",
    regDate: "15/09/25",
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    gender: "Female",
    specialization: "Cardiology",
    dniNumber: "87654321",
    experience: "8 Years",
    patients: "550+",
    rating: "4.8(550+)",
    status: true,
  },
  {
    doctorId: "#1003",
    regDate: "20/11/25",
    name: "Michael Johnson",
    email: "michael.j@gmail.com",
    gender: "Male",
    specialization: "Orthopedics",
    dniNumber: "11223344",
    experience: "6 Years",
    patients: "480+",
    rating: "4.6(480+)",
    status: false,
  },
  {
    doctorId: "#1004",
    regDate: "05/08/25",
    name: "Sarah Williams",
    email: "sarah.w@gmail.com",
    gender: "Female",
    specialization: "Pediatrics",
    dniNumber: "44332211",
    experience: "4 Years",
    patients: "320+",
    rating: "4.4(320+)",
    status: true,
  },
  {
    doctorId: "#1005",
    regDate: "18/10/25",
    name: "David Brown",
    email: "david.b@gmail.com",
    gender: "Male",
    specialization: "Dermatology",
    dniNumber: "55667788",
    experience: "7 Years",
    patients: "420+",
    rating: "4.7(420+)",
    status: true,
  },
  {
    doctorId: "#1006",
    regDate: "22/09/25",
    name: "Emily Davis",
    email: "emily.d@gmail.com",
    gender: "Female",
    specialization: "Neurology",
    dniNumber: "99887766",
    experience: "9 Years",
    patients: "600+",
    rating: "4.9(600+)",
    status: true,
  },
  {
    doctorId: "#1007",
    regDate: "30/07/25",
    name: "James Martinez",
    email: "james.m@gmail.com",
    gender: "Male",
    specialization: "Surgery",
    dniNumber: "33445566",
    experience: "10 Years",
    patients: "700+",
    rating: "5.0(700+)",
    status: false,
  },
  {
    doctorId: "#1008",
    regDate: "12/11/25",
    name: "Olivia Taylor",
    email: "olivia.t@gmail.com",
    gender: "Female",
    specialization: "Psychiatry",
    dniNumber: "77889900",
    experience: "6 Years",
    patients: "350+",
    rating: "4.5(350+)",
    status: true,
  },
  {
    doctorId: "#1009",
    regDate: "14/10/25",
    name: "Daniel Wilson",
    email: "daniel.w@gmail.com",
    gender: "Male",
    specialization: "Gastroenterology",
    dniNumber: "66554433",
    experience: "7 Years",
    patients: "410+",
    rating: "4.6(410+)",
    status: true,
  },
  {
    doctorId: "#1010",
    regDate: "02/09/25",
    name: "Sophia Anderson",
    email: "sophia.a@gmail.com",
    gender: "Female",
    specialization: "Gynecology",
    dniNumber: "22334455",
    experience: "8 Years",
    patients: "520+",
    rating: "4.7(520+)",
    status: true,
  },
  {
    doctorId: "#1011",
    regDate: "25/08/25",
    name: "William Thomas",
    email: "william.t@gmail.com",
    gender: "Male",
    specialization: "Urology",
    dniNumber: "99882211",
    experience: "9 Years",
    patients: "610+",
    rating: "4.8(610+)",
    status: false,
  },
  {
    doctorId: "#1012",
    regDate: "18/07/25",
    name: "Isabella Moore",
    email: "isabella.m@gmail.com",
    gender: "Female",
    specialization: "Endocrinology",
    dniNumber: "44556677",
    experience: "5 Years",
    patients: "300+",
    rating: "4.4(300+)",
    status: true,
  },
];

const handleRowClick = (item: DoctorData) => {
  console.log("Row clicked:", item);
};

export default function DoctorsTable() {
  const [data, setData] = useState<DoctorData[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorData | null>(null);

  const handleStatusToggle = (doctorId: string, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.doctorId === doctorId ? { ...item, status: checked } : item,
      ),
    );
  };

  const columns: Column<DoctorData>[] = [
    { key: "doctorId", label: "Dr ID", width: "5%" },
    { key: "regDate", label: "Reg Date", width: "8%" },
    { key: "name", label: "Name", width: "12%" },
    { key: "email", label: "Email", width: "15%" },
    { key: "gender", label: "Gender", width: "8%" },
    { key: "specialization", label: "Specialization", width: "12%" },
    { key: "dniNumber", label: "DNI Number", width: "10%" },
    { key: "experience", label: "Experience", width: "10%" },
    { key: "patients", label: "Patients", width: "8%" },
    { key: "rating", label: "Ratings & Review", width: "15%" },
    {
      key: "status",
      label: "Status",
      width: "8%",
      render: (_, item) => (
        <div className="flex gap-2 items-center justify-start">
          <Switch
            checked={item.status}
            onCheckedChange={(checked) =>
              handleStatusToggle(item.doctorId, checked)
            }
          />
        </div>
      ),
    },
  ];

  const openModal = (item: DoctorData) => {
    setSelectedDoctor(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const actions: TableAction<DoctorData>[] = [
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
      <DataTable<DoctorData>
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={actions}
        rowKey="doctorId"
        onRowClick={handleRowClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Doctor Details"
        maxWidth="max-w-[1200px]"
        width="w-[40%]"
      >
        {selectedDoctor && <ViewDoctor doctor={selectedDoctor} />}
      </Modal>
    </>
  );
}
