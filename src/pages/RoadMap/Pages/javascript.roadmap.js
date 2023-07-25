import React from 'react'
import PDFViewer from '../../../components/PDFViewer';
import JavascriptPDF from '../../../assets/roadmapsPDF/javascript.pdf'
const JavaScriptRoadMap = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={JavascriptPDF}
            />
        </div>
    );
};

export default JavaScriptRoadMap