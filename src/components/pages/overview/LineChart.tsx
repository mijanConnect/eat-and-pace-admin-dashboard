/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomSelect from "@/components/common/CustomSelect";

interface ChartData {
  [key: number]: Array<{
    month: string;
    patients: number;
    appointments: number;
  }>;
}

const chartData: ChartData = {
  2024: [
    {
      month: "Jan",
      patients: 2400,
      appointments: 2210,
    },
    {
      month: "Feb",
      patients: 1398,
      appointments: 2108,
    },
    {
      month: "Mar",
      patients: 9800,
      appointments: 2290,
    },
    {
      month: "Apr",
      patients: 3908,
      appointments: 2000,
    },
    {
      month: "May",
      patients: 4800,
      appointments: 2181,
    },
    {
      month: "Jun",
      patients: 3800,
      appointments: 2500,
    },
    {
      month: "Jul",
      patients: 4300,
      appointments: 2100,
    },
    {
      month: "Aug",
      patients: 5100,
      appointments: 2800,
    },
    {
      month: "Sep",
      patients: 4600,
      appointments: 2400,
    },
    {
      month: "Oct",
      patients: 5800,
      appointments: 3100,
    },
    {
      month: "Nov",
      patients: 6200,
      appointments: 3500,
    },
    {
      month: "Dec",
      patients: 7100,
      appointments: 4000,
    },
  ],
  2025: [
    {
      month: "Jan",
      patients: 3200,
      appointments: 2800,
    },
    {
      month: "Feb",
      patients: 2800,
      appointments: 2400,
    },
    {
      month: "Mar",
      patients: 5400,
      appointments: 3200,
    },
    {
      month: "Apr",
      patients: 4600,
      appointments: 2900,
    },
    {
      month: "May",
      patients: 5800,
      appointments: 3400,
    },
    {
      month: "Jun",
      patients: 6500,
      appointments: 3900,
    },
    {
      month: "Jul",
      patients: 7200,
      appointments: 4300,
    },
    {
      month: "Aug",
      patients: 7800,
      appointments: 4600,
    },
    {
      month: "Sep",
      patients: 7100,
      appointments: 4200,
    },
    {
      month: "Oct",
      patients: 8300,
      appointments: 4800,
    },
    {
      month: "Nov",
      patients: 8700,
      appointments: 5100,
    },
    {
      month: "Dec",
      patients: 9500,
      appointments: 5600,
    },
  ],
  2026: [
    {
      month: "Jan",
      patients: 4200,
      appointments: 3100,
    },
    {
      month: "Feb",
      patients: 3800,
      appointments: 2900,
    },
    {
      month: "Mar",
      patients: 5100,
      appointments: 3400,
    },
    {
      month: "Apr",
      patients: 4900,
      appointments: 3200,
    },
    {
      month: "May",
      patients: 5600,
      appointments: 3600,
    },
    {
      month: "Jun",
      patients: 6200,
      appointments: 4000,
    },
    {
      month: "Jul",
      patients: 6800,
      appointments: 4400,
    },
    {
      month: "Aug",
      patients: 7200,
      appointments: 4600,
    },
    {
      month: "Sep",
      patients: 6900,
      appointments: 4300,
    },
    {
      month: "Oct",
      patients: 7600,
      appointments: 4900,
    },
    {
      month: "Nov",
      patients: 8100,
      appointments: 5200,
    },
    {
      month: "Dec",
      patients: 8900,
      appointments: 5800,
    },
  ],
};

export default function SimpleLineChart() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const data = chartData[Number(selectedYear) as 2024 | 2025 | 2026];

  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white shadow-[0_0_15px_4px_rgba(0,0,0,0.1)] p-6 text-card-foreground">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">User Statistics</h2>
          <CustomSelect
            options={yearOptions}
            value={selectedYear}
            onValueChange={setSelectedYear}
            placeholder="Select year"
            className="w-24"
          />
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              // @ts-expect-error
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#2BB673"
              strokeWidth={2.5}
              dot={{ fill: "#2BB673", r: 4 }}
              activeDot={{ r: 6 }}
              name="Patients"
            />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="#a855f7"
              strokeWidth={2.5}
              dot={{ fill: "#a855f7", r: 4 }}
              activeDot={{ r: 6 }}
              name="Appointments"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
