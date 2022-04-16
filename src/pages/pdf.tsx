import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PdfFile } from '../components/pdf';

export default function PdfDocument() {
  const [isClient, setIsClient] = useState(false);
  const [movieDetails, setDetails] = useState([{ movieDetails: 'asdasdas' }]);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <PDFDownloadLink
          document={<PdfFile />}
          fileName="movielist.pdf"
          style={{
            textDecoration: 'none',
            padding: '10px',
            color: '#4a4a4a',
            backgroundColor: '#f2f2f2',
            border: '1px solid #4a4a4a',
          }}
        >
          Download Pdf 나나나나
        </PDFDownloadLink>
      )}
      {isClient && (
        <PDFViewer>
          <PdfFile />
        </PDFViewer>
      )}
    </div>
  );
}
