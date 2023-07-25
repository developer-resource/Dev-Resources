import React from 'react'
import PDFViewer from '../../../components/PDFViewer';
import devOpsPDF from '../../../assets/roadmapsPDF/devops.pdf'
const DevOpsRoadMap = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={devOpsPDF}
            />
        </div>
    );
};

export default DevOpsRoadMap