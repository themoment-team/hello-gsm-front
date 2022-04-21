import { Page, Text } from '@react-pdf/renderer';

export function Test({ name }) {
  return name ? (
    <table>
      <th>
        <Text>테이블</Text>
      </th>
      <th>
        <Text>만들기</Text>
      </th>
      <tr>
        <td>
          <Text>첫번째 칸</Text>
        </td>
        <td>
          <Text>두번째 칸</Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text>첫번째 칸</Text>
        </td>
        <td>
          <Text>두번째 칸</Text>
        </td>
      </tr>
      <li>
        <Text>asdas</Text>
      </li>
    </table>
  ) : null;
}
