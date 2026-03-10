interface AppointmentCardProps {
  id: string;
  patientName: string;
  time: string;
  avatar: string;
  initials: string;
  genderAge: string;
  description: string;
}

export default function AppointmentCard({
  patientName,
  time,
  avatar,
  genderAge,
  description,
}: AppointmentCardProps) {
  return (
    <div className="flex gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <img
        src={avatar}
        alt={patientName}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-gray-900 truncate">{patientName}</h3>
          <span className="text-sm text-gray-500 whitespace-nowrap">{time}</span>
        </div>
        <p className="text-sm text-gray-600">{genderAge}</p>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>
      </div>
    </div>
  );
}
