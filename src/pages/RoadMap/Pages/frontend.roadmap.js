import React from 'react'
import PDFViewer from '../../../components/PDFViewer';
import FrontendPDF from '../../../assets/roadmapsPDF/frontend.pdf'
const FrontendRoadMap = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={FrontendPDF}
            />

        </div>
    );
};

export default FrontendRoadMap