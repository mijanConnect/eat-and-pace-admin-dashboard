type SubscriptionData = {
  sn: string;
  packageName: string;
  packageType: string;
  price: string;
  facilities: string;
  status: boolean;
};

export default function ViewSubscription({ user }: { user: SubscriptionData }) {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <div className="size-32 rounded-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {user.packageName.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col items-center leading-none">
            <span className="text-xl font-medium text-foreground">
              {user.packageName}
            </span>
            <span className="text-lg text-muted-foreground">
              {user.packageType}
            </span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
            Package Details
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-500">S.N</p>
              <p className="text-sm sm:text-base text-gray-500">Package Name</p>
              <p className="text-sm sm:text-base text-gray-500">Package Type</p>
              <p className="text-sm sm:text-base text-gray-500">Price</p>
              <p className="text-sm sm:text-base text-gray-500">Facilities</p>
              <p className="text-sm sm:text-base text-gray-500">Status</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">: {user.sn}</p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.packageName}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.packageType}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.price}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.facilities}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {user.status ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
