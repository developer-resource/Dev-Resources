import React from 'react'

const index = () => {
    return (
        <div className='flex flex-1 w-screen justify-center h-screen'>
            <PDFViewer
                pdfUrl={BackendPDF}
            />
        </div>
    );
  )
}

export default index