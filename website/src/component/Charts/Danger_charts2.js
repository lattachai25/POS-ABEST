import React, { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const Danger_charts2 = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["สาขา 1", "สาขา 2", "สาขา 8", "สาขา 11", "สาขา 17"],
      datasets: [
        {
          labels: ["Red", "Yellow", "Blue", "Red", "Yellow"],
          data: [80, 20, 10, 15, 15],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          //   borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div class="card-header">
          <i class="fas fa-chart-area mr-1"></i>5 อันดับสาขา ส่งสินค้าคืนมากสุด
        </div>
        <div class="card-body">
          {/* <Pie data={chartData} options={{ responsive: true }} /> */}
          <Doughnut data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Danger_charts2;
