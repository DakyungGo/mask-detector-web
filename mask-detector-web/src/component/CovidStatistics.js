import React, { useEffect, useState } from "react";
import { getCovidNum } from "../function/CovidApi";
import Bar from "react-chartjs-2";
import moment from "moment";

function CovidStatistics() {
  const [covidData, setCovidData] = useState({ labels: [], datasets: [] });
  const today = moment().format("YYYYMMDD");
  const today_minus7 = moment().subtract(7, "days").format("YYYYMMDD");
  const [item, setItem] = useState([]);
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

  useEffect(() => {
    getCovidNum(today, today_minus7).then((datas) => {
      setItem(datas.data.body.items.item);
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

  useEffect(() => {
    console.log(item);
    let tmp = 0;
    item.forEach((element) => {
      console.log(tmp - element.decideCnt); // 첫 번째 값 당연히 버려야 함
      console.log(element.stateDt);
      tmp = element.decideCnt;
    });
  }, [item]);

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
