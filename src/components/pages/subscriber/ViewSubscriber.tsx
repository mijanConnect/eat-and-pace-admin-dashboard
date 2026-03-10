type SubscriberData = {
  userId: string;
  date: string;
  userName: string;
  packageName: string;
  type: string;
  price: string;
  status: "pending" | "completed";
};

export default function ViewSubscriber({
  subscriber,
}: {
  subscriber: SubscriberData;
}) {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <div className="size-32 rounded-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {subscriber.userName.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col items-center leading-none">
            <span className="text-xl font-medium text-foreground">
              {subscriber.userName}
            </span>
            <span className="text-lg text-muted-foreground">
              {subscriber.userId}
            </span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
            Subscription Details
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-500">User ID</p>
              <p className="text-sm sm:text-base text-gray-500">Date</p>
              <p className="text-sm sm:text-base text-gray-500">User Name</p>
              <p className="text-sm sm:text-base text-gray-500">Package Name</p>
              <p className="text-sm sm:text-base text-gray-500">Type</p>
              <p className="text-sm sm:text-base text-gray-500">Price</p>
              <p className="text-sm sm:text-base text-gray-500">Status</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">
                : {subscriber.userId}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {subscriber.date}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {subscriber.userName}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {subscriber.packageName}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {subscriber.type}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {subscriber.price}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                :{" "}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    subscriber.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {subscriber.status.charAt(0).toUpperCase() +
                    subscriber.status.slice(1)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
