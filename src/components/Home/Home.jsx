import UserTraffic from '../traffic/userTraffic';
import Location from '../Location/Location';
import Websites from '../Websites/Websites';
import Pie from '../Pies/Pie';
import StatisticsCard from '../Cards/StatisticsCard';
import arrowRight from '../../assets/images/arrow-up.png';
import arrowLeft from '../../assets/images/arrow-left.png';
import vector from '../../assets/images/vector.png';
import group from '../../assets/images/group.png';

import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="section middle-section">
        <div>
          <StatisticsCard
            image={arrowLeft}
            background="#3f46f7"
            data={6300}
            percentage={1.29}
            backgroundPercentage="rgba(2, 177, 90, 0.15)"
            color="rgba(0, 202, 101, 1)"
          />
          <StatisticsCard
            image={arrowRight}
            background="rgba(254, 135, 67, 1)"
            data={32}
            percentage={1.29}
            backgroundPercentage="rgba(232, 0, 27, 0.15)"
            color="rgba(228, 20, 20, 1)"
          />
          <StatisticsCard
            image={vector}
            background="rgba(0, 197, 67, 1)"
            data={20}
            percentage={false}
          />
          <StatisticsCard
            image={group}
            background="rgba(137, 35, 217, 1)"
            data={199}
            percentage={false}
          />
        </div>
        <UserTraffic />
      </section>
      <section className="lowerSection section ">
        <Location />
        <Pie />
        <Websites />
      </section>
    </div>
  );
};

export default Home;
