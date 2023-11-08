import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const Pie = () => {
  const textCenter = {
    id: '583',
    beforeDatasetDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'bolder 50px Space Grotesk sans-serif';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'center';
      ctx.fillText(
        data.datasets[0].data[1],
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  const data = {
    labels: ['Suscribed', 'Visits', 'Signed'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [500, 583, 200],
        backgroundColor: [
          'rgb(42,22,93)',
          'rgba(0, 130, 204, 1)',
          'rgb(61,49,145)',
        ],
        hoverOffset: 4,
        borderRadius: 10,
        borderWidth: 8,
        borderColor: 'rgba(0, 0, 0, 0)',
      },
    ],
  };

  const options = {
    aspectRatio: 0.6,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  return (
    <div className="pie">
      <h1 className="traffic-header pie-header">Conversion Rate</h1>
      <div className="pie-div">
        <Doughnut
          data={data}
          options={options}
          plugins={[textCenter]}
        ></Doughnut>
      </div>
      <div className="pie-stat">
        <div>
          <div className="pie-dash"></div>
          <div>
            <span>Total User Visits</span>
            <h3>2345,3546,4647</h3>
          </div>
        </div>
        <div>
          <div className="pie-dash dash-2"></div>
          <div>
            <span>User Signed Up</span>
            <h3>3345,3546,4565</h3>
          </div>
        </div>
        <div>
          <div className="pie-dash dash-3"></div>
          <div>
            <span>User Subscribed</span>
            <h3>4345,3546,4749</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pie;
