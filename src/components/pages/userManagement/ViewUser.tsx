type UserData = {
  userId: number;
  userName: string;
  contact: string;
  email: string;
  location: string;
  status: boolean;
  subscriptionStatus: boolean;
};

export default function ViewUser({ user }: { user: UserData }) {
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
              {user.userName}
            </span>
            <span className="text-lg text-muted-foreground">{user.email}</span>
          </div>
        </div>
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
              <p className="text-sm sm:text-base text-gray-500">Status</p>
              <p className="text-sm sm:text-base text-gray-500">
                Subscription Status
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">
                : {user.userId}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.userName}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.email}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.contact}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.status ? "Active" : "Inactive"}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.subscriptionStatus ? "Subscribed" : "Not Subscribed"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
