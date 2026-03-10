/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import {
  BarChart,
  Bar,
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
    earnings: number;
  }>;
}

const chartData: ChartData = {
  2024: [
    { month: "Jan", earnings: 4000 },
    { month: "Feb", earnings: 3000 },
    { month: "Mar", earnings: 2000 },
    { month: "Apr", earnings: 2780 },
    { month: "May", earnings: 1890 },
    { month: "Jun", earnings: 2390 },
    { month: "Jul", earnings: 3490 },
    { month: "Aug", earnings: 4200 },
    { month: "Sep", earnings: 3800 },
    { month: "Oct", earnings: 4500 },
    { month: "Nov", earnings: 5200 },
    { month: "Dec", earnings: 6100 },
  ],
  2025: [
    { month: "Jan", earnings: 5500 },
    { month: "Feb", earnings: 4800 },
    { month: "Mar", earnings: 6200 },
    { month: "Apr", earnings: 5800 },
    { month: "May", earnings: 6500 },
    { month: "Jun", earnings: 7200 },
    { month: "Jul", earnings: 7900 },
    { month: "Aug", earnings: 8200 },
    { month: "Sep", earnings: 7600 },
    { month: "Oct", earnings: 8800 },
    { month: "Nov", earnings: 9200 },
    { month: "Dec", earnings: 10100 },
  ],
  2026: [
    { month: "Jan", earnings: 6800 },
    { month: "Feb", earnings: 6200 },
    { month: "Mar", earnings: 7100 },
    { month: "Apr", earnings: 6900 },
    { month: "May", earnings: 7600 },
    { month: "Jun", earnings: 8300 },
    { month: "Jul", earnings: 8900 },
    { month: "Aug", earnings: 9300 },
    { month: "Sep", earnings: 8700 },
    { month: "Oct", earnings: 9800 },
    { month: "Nov", earnings: 10200 },
    { month: "Dec", earnings: 11100 },
  ],
};

export default function SimpleBarChart() {
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
          <h2 className="text-2xl font-semibold">Earnings Statistics</h2>
          <CustomSelect
            options={yearOptions}
            value={selectedYear}
            onValueChange={setSelectedYear}
            placeholder="Select year"
            className="w-24"
          />
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
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
              //@ts-expect-error
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Bar dataKey="earnings" fill="#2BB673" name="Earnings" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
