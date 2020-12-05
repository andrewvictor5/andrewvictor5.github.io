import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import Resume from '../ResumeFall2020.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function ResumeContent() {
 
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);
 
    function onDocumentLoadSuccess({ numPages }) {
     setNumPages(numPages);
    }
   
    return (
      <div style={{ width: 1100 }}>
        <Document
          file={Resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
             <Page pageNumber={pageNumber} />
        </Document>
      <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }

export default ResumeContent; 
