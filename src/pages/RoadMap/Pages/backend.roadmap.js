import React from 'react'
import PDFViewer from '../../../components/PDFViewer';
import BackendPDF from '../../../assets/roadmapsPDF/backend.pdf'
const BackendRoadMap = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={BackendPDF}
            />
        </div>
    );
};

export default BackendRoadMap