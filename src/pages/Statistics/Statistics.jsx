import { Helmet } from "react-helmet-async";
import CommonProductBanner from "../../Shared/CommonProductBanner/CommonProductBanner";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useAllProduct from "../../Hooks/useAllProduct";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Statistics = () => {
  const { products } = useAllProduct(); // Fetch products using custom hook
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (products.length) {
      const labels = products.map((product) => product.product_title);
      const prices = products.map((product) => product.price);
      const totals = products.map((product) => product.total);
      const ratings = products.map((product) => product.rating);

      setChartData({
        labels,
        datasets: [
          {
            label: "Price",
            data: prices,
            backgroundColor: "rgba(153, 102, 255, 0.6)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
          {
            label: "Total",
            data: totals,
            backgroundColor: "rgba(255, 159, 64, 0.6)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
          },
          {
            label: "Rating",
            data: ratings,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [products]);
    return (
        <div className="min-h-screen">
           <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
            <CommonProductBanner
        headerTitle={"Statistics"}
        subHeader={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
        
      />
       <div className="mt-20 mb-10 max-w-7xl mx-auto">
        {chartData ? (
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  // position: "top",
                },
                title: {
                  display: true,
                  text: "Product Statistics",
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
        </div>
    );
};

export default Statistics;