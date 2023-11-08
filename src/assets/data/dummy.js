export const stackedChartData = [
  [
    { x: 'Mon', y: 0.5 },
    { x: 'Tue', y: 0.8 },
    { x: 'Wed', y: 1 },
    { x: 'Thur', y: 1.5 },
    { x: 'Fri', y: 1.8 },
    { x: 'Sa', y: 1 },
    { x: 'Su', y: 0.8 },
  ],
  [
    { x: 'Mon', y: 1.5 },
    { x: 'Tue', y: 1.8 },
    { x: 'Wed', y: 2 },
    { x: 'Thur', y: 2.5 },
    { x: 'Fri', y: 2.8 },
    { x: 'Sa', y: 2 },
    { x: 'Su', y: 1.8 },
  ],
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 1 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 1 },
  minimum: 0,
  maximum: 5,
  interval: 1,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '${value}k',
};

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'City',
    type: 'StackingColumn',
    fill: '#FB4540',
    legendShape: 'Circle',
    columnWidth: 0.3,
  },

  {
    dataSource: stackedChartData[1],

    xName: 'x',
    yName: 'y',
    name: 'Country',
    type: 'StackingColumn',
    fill: '#00F2DE',
    legendShape: 'Circle',
    cornerRadius: {
      topLeft: 10,
      topRight: 10,
    },
    columnWidth: 0.3,
  },
];

export const stackedCharUSertData = [
  [
    { x: 'Jan', y: -50 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 0 },
    { x: 'Apr', y: -30 },
    { x: 'May', y: 0 },
    { x: 'Jun', y: 0 },
    { x: 'Jul', y: -75 },
    { x: 'Aug', y: 0 },
    { x: 'Sep', y: 0 },
    { x: 'Oct', y: 0 },
    { x: 'Nov', y: -95 },
    { x: 'Dec', y: 0 },
  ],
  [
    { x: 'Jan', y: 0 },
    { x: 'Feb', y: 0 },
    { x: 'Mar', y: 115 },
    { x: 'Apr', y: 0 },
    { x: 'May', y: 110 },
    { x: 'Jun', y: 75 },
    { x: 'Jul', y: 0 },
    { x: 'Aug', y: 160 },
    { x: 'Sep', y: 85 },
    { x: 'Oct', y: 75 },
    { x: 'Nov', y: 0 },
    { x: 'Dec', y: 100 },
  ],

  [
    { x: 'Jan', y: -60 },
    { x: 'Feb', y: 30 },
    { x: 'Mar', y: 125 },
    { x: 'Apr', y: -40 },
    { x: 'May', y: 120 },
    { x: 'Jun', y: 85 },
    { x: 'Jul', y: -85 },
    { x: 'Aug', y: 170 },
    { x: 'Sep', y: 95 },
    { x: 'Oct', y: 85 },
    { x: 'Nov', y: -100 },
    { x: 'Dec', y: 110 },
  ],
];

export const stackedCustomUserSeries = [
  {
    dataSource: stackedCharUSertData[2],
    xName: 'x',
    yName: 'y',
    name: 'AVG',
    width: 2,
    type: 'StackingLine',
    dashArray: '5,5',
    marker: {
      fill: '#00f2de',
      isFilled: true,
      visible: true,
      shape: 'Circle',
      width: 6,
      height: 6,
    },
    fill: '#00F2DE',
  },

  {
    dataSource: stackedCharUSertData[0],
    xName: 'x',
    yName: 'y',
    name: 'User Subscribed',
    type: 'StackingColumn',
    fill: 'rgba(251, 69, 64, 1)',
    legendShape: 'Rectangle',
    cornerRadius: {
      topLeft: 10,
      topRight: 10,
      bottomLeft: 10,
      bottomRight: 10,
    },
  },

  {
    dataSource: stackedCharUSertData[1],

    xName: 'x',
    yName: 'y',
    name: 'User signed',
    type: 'StackingColumn',
    fill: 'rgba(0, 130, 204, 1',
    legendShape: 'Rectangle',
    cornerRadius: {
      topLeft: 10,
      topRight: 10,
      bottomLeft: 10,
      bottomRight: 10,
    },
  },
];

export const stackedPrimaryUserYAxis = {
  lineStyle: { width: 0 },
  minimum: -100,
  maximum: 200,
  interval: 50,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1, dashArray: '5,5' },
  minorGridLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}%',
};

export const stackedPrimaryUserXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export let data1 = [
  { x: new Date(2002, 0, 1), y: 2.2 },
  { x: new Date(2003, 0, 1), y: 3.4 },
  { x: new Date(2004, 0, 1), y: 2.8 },
  { x: new Date(2005, 0, 1), y: 1.6 },
  { x: new Date(2006, 0, 1), y: 2.3 },
  { x: new Date(2007, 0, 1), y: 2.5 },
  { x: new Date(2008, 0, 1), y: 2.9 },
  { x: new Date(2009, 0, 1), y: 1.1 },
  { x: new Date(2010, 0, 1), y: 1.4 },
  { x: new Date(2011, 0, 1), y: 1.1 },
];
export let data2 = [
  { x: new Date(2002, 0, 1), y: 2 },
  { x: new Date(2003, 0, 1), y: 1.7 },
  { x: new Date(2004, 0, 1), y: 1.8 },
  { x: new Date(2005, 0, 1), y: 2.1 },
  { x: new Date(2006, 0, 1), y: 2.3 },
  { x: new Date(2007, 0, 1), y: 1.7 },
  { x: new Date(2008, 0, 1), y: 1.5 },
  { x: new Date(2009, 0, 1), y: 0.5 },
  { x: new Date(2010, 0, 1), y: 1.5 },
  { x: new Date(2011, 0, 1), y: 1.3 },
];
