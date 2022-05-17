import { VictoryPie } from 'victory';

interface dataType {
  data: {
    x: string;
    y: number;
  }[];
}

const Graph: React.FC<dataType> = ({ data }) => (
  <VictoryPie
    data={data}
    style={{ labels: { fill: 'white', fontSize: 24, fontWeight: 700 } }}
    labelRadius={50}
    padding={0}
    colorScale={['#42BAFE', '#0C4680']}
  />
);

export default Graph;
