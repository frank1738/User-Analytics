import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../assets/data/dummy';

const Location = () => {
  return (
    <div className="location">
      <div>
        <h1 className="traffic-header">Location</h1>
        <div className="traffic-stats">
          <div>
            <div className="signed" />
            <span>Country</span>
          </div>
          <div>
            <div className="subbed" />
            <span>City</span>
          </div>
        </div>
      </div>
      <ChartComponent
        width="300px"
        height="300px"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: '#211745' }}
      >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Location;
