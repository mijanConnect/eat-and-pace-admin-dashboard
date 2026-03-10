import { DollarSign, FileUser, GraduationCap, UserRound } from "lucide-react";
import AreaChartDemo from "./LineChart";
import SimpleBarChart from "./BarChart";

export default function Overview() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-green-100 inline-block p-1 rounded-md">
            <UserRound className="size-8" stroke="#2BB673" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">Total Users</p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">$11,225</p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="bg-green-500 rounded-[5px] text-white px-1">
                +15%
              </span>{" "}
              vs last month
            </p>
          </div>
        </article>
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-blue-100 inline-block p-1 rounded-md">
            <GraduationCap className="size-8" stroke="#0088FF" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">Total Doctors</p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">400+</p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="bg-red-500 rounded-[5px] text-white px-1">
                -15%
              </span>{" "}
              vs last month
            </p>
          </div>
        </article>
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-[#6155F5]/10 inline-block p-1 rounded-md">
            <FileUser className="size-8" stroke="#6155F5" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">Total Patients</p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">806</p>
            <div className="flex justify-between items-baseline gap-2">
              <p className="text-sm text-gray-500 mt-1">
                <span className="bg-green-500 rounded-[5px] text-white px-1">
                  +10%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-red-500/10 inline-block p-1 rounded-md">
            <DollarSign className="size-8" stroke="red" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">Total Revenue</p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">806</p>
            <div className="flex justify-between items-baseline gap-2">
              <p className="text-sm text-gray-500 mt-1">
                <span className="bg-green-500 rounded-[5px] text-white px-1">
                  +10%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="flex flex-col gap-6">
        <AreaChartDemo />
        <SimpleBarChart />
      </div>
    </section>
  );
}
