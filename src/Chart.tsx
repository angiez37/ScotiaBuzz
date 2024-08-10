import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartLine(): JSX.Element {
    return (
        <TEChart
        className="w-[50px]"
            type="line"
            data={{
                labels: [
                    "2PM",
                    "3PM",
                    "4PM",
                    "5PM",
                    "6PM",
                    "7PM",
                    "8PM",
                ],
                datasets: [
                    {
                        label: "Phishing Reports (Toronto)",
                        data: [10, 11, 5, 450, 600, 100, 2],
                    },
                ],
            }}
        />
    );
}