import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  SplineAreaSeries,
  Legend,
} from '@syncfusion/ej2-react-charts';
import { data1, data2 } from '../../assets/data/dummy';
import { TiTick } from 'react-icons/ti';

const Websites = () => {
  return (
    <div className="websites">
      <div>
        <h1 className="traffic-header">Website Analysis</h1>
        <h4>Based on your perfrmance</h4>
        <div className="web-btn-div">
          <button>weekly</button>
          <button className="btn-active">monthly</button>
          <button>yearly</button>
        </div>
      </div>
      <ChartComponent
        width="320px"
        height="250px"
        primaryXAxis={{
          valueType: 'DateTime',
          majorGridLines: { width: 1, dashArray: '5,5' },
          intervalType: 'Years',
          minimum: new Date(2001, 0, 1),
          maximum: new Date(2012, 0, 1),
          edgeLabelPlacement: 'Shift',
        }}
        primaryYAxis={{
          labelPlacement: 'None',
          lineStyle: { width: 1 },
          majorGridLines: { width: 1, dashArray: '5,5' },
          maximum: 4,
          interval: 1,
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
        }}
        legendSettings={{ enableHighlight: true }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[SplineAreaSeries, DateTime, Tooltip, Legend, Highlight]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data1}
            xName="x"
            yName="y"
            name="US"
            marker={{
              visible: false,
            }}
            opacity={0.5}
            fill="#250a57"
            type="SplineArea"
            width={1}
            border={{ width: 1, color: '#251c86' }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data2}
            xName="x"
            yName="y"
            name="France"
            marker={{
              visible: false,
              isFilled: true,
              height: 7,
              width: 7,
              shape: 'Diamond',
            }}
            fill="rgba(0, 0, 0, 0.25)"
            opacity={0.5}
            type="SplineArea"
            width={1}
            border={{ width: 1, color: '#597b5f' }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
      <div className="web-stat">
        <div>
          <div className="tick-box">
            <TiTick />
          </div>
          <span>Visits</span>
        </div>
        <div>
          <div className="tick-box tick-box-2">
            <TiTick />
          </div>
          <span>Sessions</span>
        </div>
      </div>
    </div>
  );
};

export default Websites;
