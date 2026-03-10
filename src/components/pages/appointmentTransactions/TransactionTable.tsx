import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";

type BookingData = {
  bookingId: string;
  userName: string;
  contact: string;
  doctorName: string;
  bookingDate: string;
  bookingTime: string;
  package: string;
  price: string;
  status: "Completed" | "Incomplete";
};

const sampleData: BookingData[] = [
  {
    bookingId: "#B001",
    userName: "John Smith",
    contact: "+8801712345678",
    doctorName: "Dr. John Doe",
    bookingDate: "15/03/26",
    bookingTime: "10:00 AM",
    package: "General Checkup",
    price: "$50",
    status: "Completed",
  },
  {
    bookingId: "#B002",
    userName: "Sarah Johnson",
    contact: "+8801812345678",
    doctorName: "Dr. Jane Smith",
    bookingDate: "16/03/26",
    bookingTime: "2:30 PM",
    package: "Cardiac Checkup",
    price: "$150",
    status: "Completed",
  },
  {
    bookingId: "#B003",
    userName: "Michael Brown",
    contact: "+8801912345678",
    doctorName: "Dr. Michael Johnson",
    bookingDate: "17/03/26",
    bookingTime: "11:00 AM",
    package: "Orthopedic Consultation",
    price: "$80",
    status: "Incomplete",
  },
  {
    bookingId: "#B004",
    userName: "Emily Davis",
    contact: "+8801612345678",
    doctorName: "Dr. Sarah Williams",
    bookingDate: "18/03/26",
    bookingTime: "3:00 PM",
    package: "Pediatric Checkup",
    price: "$60",
    status: "Completed",
  },
  {
    bookingId: "#B005",
    userName: "David Wilson",
    contact: "+8801512345678",
    doctorName: "Dr. David Brown",
    bookingDate: "19/03/26",
    bookingTime: "9:30 AM",
    package: "Skin Treatment",
    price: "$100",
    status: "Incomplete",
  },
  {
    bookingId: "#B006",
    userName: "Sophia Taylor",
    contact: "+8801312345678",
    doctorName: "Dr. Emily Davis",
    bookingDate: "20/03/26",
    bookingTime: "1:00 PM",
    package: "Neurological Assessment",
    price: "$120",
    status: "Completed",
  },
  {
    bookingId: "#B007",
    userName: "James Anderson",
    contact: "+8801212345678",
    doctorName: "Dr. James Martinez",
    bookingDate: "21/03/26",
    bookingTime: "4:00 PM",
    package: "Surgical Consultation",
    price: "$200",
    status: "Completed",
  },
  {
    bookingId: "#B008",
    userName: "Olivia Thomas",
    contact: "+8801112345678",
    doctorName: "Dr. Olivia Taylor",
    bookingDate: "22/03/26",
    bookingTime: "10:30 AM",
    package: "Mental Health Session",
    price: "$90",
    status: "Incomplete",
  },
  {
    bookingId: "#B009",
    userName: "William Martin",
    contact: "+8801012345678",
    doctorName: "Dr. Daniel Wilson",
    bookingDate: "23/03/26",
    bookingTime: "2:00 PM",
    package: "Digestive System Checkup",
    price: "$110",
    status: "Completed",
  },
  {
    bookingId: "#B010",
    userName: "Ava White",
    contact: "+8801711122233",
    doctorName: "Dr. Sophia Anderson",
    bookingDate: "24/03/26",
    bookingTime: "11:30 AM",
    package: "Women's Health Checkup",
    price: "$85",
    status: "Completed",
  },
];

const handleRowClick = (item: BookingData) => {
  console.log("Row clicked:", item);
};

export default function TransactionsTable() {
  const [data] = useState<BookingData[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(
    null,
  );

  const columns: Column<BookingData>[] = [
    { key: "bookingId", label: "Booking ID", width: "10%" },
    { key: "userName", label: "User Name", width: "12%" },
    { key: "contact", label: "Contact", width: "12%" },
    { key: "doctorName", label: "Doctor Name", width: "12%" },
    { key: "bookingDate", label: "Booking Date", width: "10%" },
    { key: "bookingTime", label: "Booking Time", width: "10%" },
    { key: "package", label: "Package", width: "14%" },
    { key: "price", label: "Price", width: "8%" },
    {
      key: "status",
      label: "Status",
      width: "12%",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
            value === "Completed"
              ? "bg-green-100 text-green-800 border border-green-300"
              : value === "Pending"
                ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {String(value)}
        </span>
      ),
    },
  ];

  const openModal = (item: BookingData) => {
    setSelectedBooking(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  const actions: TableAction<BookingData>[] = [
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
      <DataTable<BookingData>
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={actions}
        rowKey="bookingId"
        onRowClick={handleRowClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Booking Details"
        maxWidth="max-w-[1200px]"
        width="w-[40%]"
      >
        {selectedBooking && (
          <div className="space-y-4 p-4">
            <div>
              <label className="font-semibold text-gray-700">Booking ID:</label>
              <p className="text-gray-600">{selectedBooking.bookingId}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">User Name:</label>
              <p className="text-gray-600">{selectedBooking.userName}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Contact:</label>
              <p className="text-gray-600">{selectedBooking.contact}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Doctor Name:
              </label>
              <p className="text-gray-600">{selectedBooking.doctorName}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Booking Date:
              </label>
              <p className="text-gray-600">{selectedBooking.bookingDate}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Booking Time:
              </label>
              <p className="text-gray-600">{selectedBooking.bookingTime}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Package:</label>
              <p className="text-gray-600">{selectedBooking.package}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Price:</label>
              <p className="text-gray-600">{selectedBooking.price}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Status:</label>
              <p
                className={`text-sm font-semibold w-fit px-3 py-1 rounded-full ${
                  selectedBooking.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {selectedBooking.status}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
