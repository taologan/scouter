"use client"
    import React from 'react';

    const DownloadCSV = () => {
        const handleDownload = () => {
            const filePath = 'app/documents/out.csv';
            const link = document.createElement('a');
            link.setAttribute('href', filePath);
            link.setAttribute('download', 'out.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        return (
            <button onClick={handleDownload}>Download CSV</button>
        );
    };
    export default DownloadCSV;
