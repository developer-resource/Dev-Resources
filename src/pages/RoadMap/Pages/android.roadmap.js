import React from 'react'
import PDFViewer from '../../../components/PDFViewer';
import AndroidPDF from '../../../assets/roadmapsPDF/android.pdf'
const AndroidRoadMap = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={AndroidPDF}
            />
        </div>
    );
};

export default AndroidRoadMap