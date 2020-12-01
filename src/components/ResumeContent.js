import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import Resume from '../ResumeFall2020.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function ResumeContent() {
    const [setNumPages] = useState(null);
    const [numPages, pageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
   
    return (
      <div style={{ width: 900 }}>
        <Document
          file={Resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={900} />
        </Document>

      </div>
    );
  }

export default ResumeContent; 
