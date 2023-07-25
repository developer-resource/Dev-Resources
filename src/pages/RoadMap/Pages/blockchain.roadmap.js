import React from 'react'
import PDFViewer from '../../../components/PDFViewer';
import PDF from '../../../assets/roadmapsPDF/blockchain.pdf'
const BlockchainRoadMap = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={PDF}
            />
        </div>
    );
};

export default BlockchainRoadMap