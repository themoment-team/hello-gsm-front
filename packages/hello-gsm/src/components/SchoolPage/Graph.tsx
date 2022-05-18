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
    labelRadius={100}
    padding={0}
    colorScale={['#42BAFE', '#0C4680', '#D6DE05', '#ffffff', '#3D79B5']}
  />
);

export default Graph;
