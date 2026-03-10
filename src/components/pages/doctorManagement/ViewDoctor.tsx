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

export default function ViewDoctor({ doctor }: { doctor: DoctorData }) {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="User profile"
            className="size-32 rounded-full object-cover"
          />
          <div className="flex flex-col items-center leading-none">
            <span className="text-xl font-medium text-foreground">
              {doctor.name}
            </span>
            <span className="text-lg text-muted-foreground">
              {doctor.email}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
              Basic information
            </h2>
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base text-gray-500">User ID</p>
                <p className="text-sm sm:text-base text-gray-500">Full Name</p>
                <p className="text-sm sm:text-base text-gray-500">Email</p>
                <p className="text-sm sm:text-base text-gray-500">Gender</p>
                <p className="text-sm sm:text-base text-gray-500">
                  Date of Birth
                </p>
                <p className="text-sm sm:text-base text-gray-500">Contact</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base font-semibold">
                  : {doctor.doctorId}
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  : {doctor.name}
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  : {doctor.email}
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  : {doctor.gender}
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  : 06/15/1980
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  : +88 123 456 789
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
              Professional information
            </h2>
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base text-gray-500">
                  Medical Degree
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Specialization
                </p>
                <p className="text-sm sm:text-base text-gray-500">Experience</p>
                <p className="text-sm sm:text-base text-gray-500">
                  Medical License Number
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Issuing Authority
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Practicing In
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base font-semibold">: MBBS</p>
                <p className="text-sm sm:text-base font-semibold">
                  : Cardiology
                </p>
                <p className="text-sm sm:text-base font-semibold">: 10 years</p>
                <p className="text-sm sm:text-base font-semibold">
                  : 1001010100
                </p>
                <p className="text-sm sm:text-base font-semibold">: SMEC</p>
                <p className="text-sm sm:text-base font-semibold">
                  : Apollo Hospital, Dhaka
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
              Packages
            </h2>
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base text-gray-500">
                  Package - A
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Package - B
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base font-semibold">
                  : $80.00
                  <span className="text-[10px] text-gray-400">/30 Min</span>
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  : $120.00
                  <span className="text-[10px] text-gray-400">/30 Min</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
              Documents
            </h2>

            <div className="flex flex-wrap gap-2 sm:gap-4 mt-6">
              <img
                src="https://picsum.photos/200/150?random=1"
                alt="progress-1"
                className="w-full sm:w-35 h-16 sm:h-25 object-cover rounded-lg"
              />
              <img
                src="https://picsum.photos/200/150?random=2"
                alt="progress-2"
                className="w-full sm:w-35 h-16 sm:h-25 object-cover rounded-lg"
              />
              <img
                src="https://picsum.photos/200/150?random=3"
                alt="progress-3"
                className="w-full sm:w-35 h-16 sm:h-25 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
