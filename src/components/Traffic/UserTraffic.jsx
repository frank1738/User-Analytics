import { useEffect, useState } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingLineSeries,
  Tooltip,
  StackingColumnSeries,
} from '@syncfusion/ej2-react-charts';
import {
  stackedCustomUserSeries,
  stackedPrimaryUserXAxis,
  stackedPrimaryUserYAxis,
} from '../../assets/data/dummy';
import userIcon from '../../assets/images/arrow-down.png';

const UserTraffic = () => {
  const [chartWidth, setChartWidth] = useState('80%');

  // Function to update chart width based on screen size
  const updateChartWidth = () => {
    const screenWidth = window.innerWidth;
    // Calculate the width based on the screen size (e.g., 60% of the screen width)
    const widthInPixels = (screenWidth * 0.6).toString() + 'px';
    setChartWidth(widthInPixels);
  };

  useEffect(() => {
    // Add a resize event listener
    window.addEventListener('resize', updateChartWidth);

    // Call the function to set the initial chart width
    updateChartWidth();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateChartWidth);
    };
  }, []);

  return (
    <div className="traffic">
      <div>
        <h1 className="traffic-header">User Traffic</h1>
        <div className="traffic-stats">
          <div>
            <div className="signed" />
            <span>User Sign Up</span>
          </div>
          <div>
            <div className="subbed" />
            <span>User Subscribed</span>
          </div>
          <button className="user-button">
            year <img src={userIcon} alt="year-icon" />
          </button>
        </div>
      </div>
      <ChartComponent
        width={chartWidth} // Set the width dynamically in pixels
        height="350px"
        primaryXAxis={stackedPrimaryUserXAxis}
        primaryYAxis={stackedPrimaryUserYAxis}
        legendSettings={{ enableHighlight: true }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            StackingLineSeries,
            StackingColumnSeries,
            Category,
            Legend,
            Tooltip,
            Highlight,
          ]}
        />
        <SeriesCollectionDirective>
          {stackedCustomUserSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default UserTraffic;
