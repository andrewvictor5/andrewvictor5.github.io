import React, { useState } from 'react';
import { Document, pdfjs } from "react-pdf";
import Resume from '../ResumeFall2020.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function ResumeContent() {
    const numPages = useState(null);
    const setNumPages = useState(null); 
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
   
    return (
      <div style={{ width: 900 }}>
        <Document
          file={Resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
        </Document>

      </div>
    );
  }

export default ResumeContent; 
