import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import { Test } from 'components/test';

Font.register({
  family: 'Nanum Gothic',
  src: 'https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.ttf',
});
const FontText = ({ children, ...props }) => (
  <Text style={styles.text} {...props}>
    {children}
  </Text>
);
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },

  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Nanum Gothic',
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  section: {
    // backgroundColor: '#c4c4c4',
    border: '1px solid #000000',
  },
  subject: {
    backgroundColor: '#c4c4c4',
    border: '1px solid #000000',
  },
});

export function PdfFile() {
  const test = '안녕하세요';
  return (
    <Document>
      <Page style={styles.text}>
        {/* <Text style={styles.title}>
          광주소프트웨어마이스터고등학교 입학원서
        </Text>

        <View style={styles.section}>
          <FontText>2023학년도 신입생 입학전형</FontText>
          <Text style={(styles.subject, { color: 'red' })}>접수번호</Text>
          <Text style={styles.text}>12345</Text>
        </View> */}
        <Test name="yoosion" />
      </Page>
    </Document>
  );
}
