import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'Nanum Gothic',
  src: 'https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Nanum Gothic',
    fontSize: 14,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  table: {
    // display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Nanum Gothic',
    fontWeight: 500,
  },
  box: {
    // width: '25%',
    border: '1px solid #000000',
  },
  subject: {
    backgroundColor: '#c4c4c4',
  },
});

const FontText = ({ children, ...props }) => (
  <Text style={styles.text} {...props}>
    {children}
  </Text>
);
const Box = ({ children, ...props }) => (
  <Text style={styles.box} {...props}>
    {children}
  </Text>
);

const Row = ({ children, top, left }) => (
  <View style={{ position: 'absolute', top: top, left: left }}>{children}</View>
);

export default function PdfFile() {
  const applyNumber = 123123;
  return (
    <Document>
      <Page style={styles.body}>
        <FontText>[서식 1]</FontText>
        <Text style={styles.title}>
          광주소프트웨어마이스터고등학교 입학원서
        </Text>
        <Row top={'300px'} left={'300px'}>
          <FontText>2023학년도 신입생 입학전형</FontText>
          <Box>
            <Text style={styles.subject}>접수번호</Text>
            <FontText style={styles.text}>{applyNumber}</FontText>
          </Box>
        </Row>
      </Page>

      <Page style={styles.body}>
        <FontText style={(styles.tableCell, styles.text)}>
          안녕하세요 여러분들
        </FontText>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <FontText style={styles.tableCell}>이름</FontText>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Type</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Period</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Price</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>React-PDF</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>3 User </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>5€</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
