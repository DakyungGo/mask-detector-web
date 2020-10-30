import React, { useEffect, useState } from "react";
import { getCovidNum } from "../function/CovidApi";
import Bar from "react-chartjs-2";
import { findRenderedComponentWithType } from "react-dom/test-utils";

function CovidStatistics() {
  const [covidData, setCovidData] = useState({ labels: [], datasets: [] });
  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
          display: false,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  const today = new Date();
  const pastWeek = new Date().setDate(today.getDate() - 6);
  console.log(today);
  console.log(pastWeek);

  useEffect(() => {
    getCovidNum().then((data) => {
      console.log(data);
    });
    setCovidData({
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Covid Datasets",
          data: [34, 45, 66, 20, 32, 55, 98],
          borderColor: "#ffffff",
          fill: true,
          barPercentage: 0.5,
          //   backgroundColor: "white",
        },
      ],
    });
  }, []);

  return (
    <div className="CovidStatistics__Wrapper">
      <div className="CovidStatistics-box">
        <Bar
          data={covidData}
          type="bar"
          options={options}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}

export default CovidStatistics;
