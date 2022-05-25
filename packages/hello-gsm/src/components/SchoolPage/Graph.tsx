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
    labelRadius={90}
    padding={0}
    colorScale={['#42BAFE', '#407AB4']}
  />
);

export default Graph;
