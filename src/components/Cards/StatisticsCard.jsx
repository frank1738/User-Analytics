const StatisticsCard = ({
  image,
  background,
  data,
  percentage,
  backgroundPercentage,
  color,
}) => {
  return (
    <div className="statistic-card">
      <div className="stat-div-icon">
        <div className="icon-div" style={{ backgroundColor: background }}>
          <img src={image} alt="arrow" />
        </div>
        <div>
          <h3 className="visits-header">Total Visits</h3>
          <span className="total-visits">{data}</span>
        </div>
      </div>

      {percentage && (
        <span
          className="stat-percentage"
          style={{
            background: backgroundPercentage,
            color: color,
          }}
        >
          +{percentage}%
        </span>
      )}
    </div>
  );
};

export default StatisticsCard;
