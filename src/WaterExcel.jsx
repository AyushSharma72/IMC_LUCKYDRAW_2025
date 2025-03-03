import React from "react";
import { Button } from "react-bootstrap";

function Generate() {

    const handleDownloadClick = async () => {
        try {
            const response = await fetch('http://localhost:5000/GenerateExcelWater', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to download Excel file');
            }

            // Convert the response to a blob
            const blob = await response.blob();

            // Create a download link for the blob
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'WaterWinners.XLSX'; // Specify the filename
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert("file downloaded succesfully")
        } catch (error) {
            console.error('Error:', error);
            // Handle the error as needed (e.g., show an error message to the user)
        }
    };

    return (
        <div className="Generate">
            <div className="GenerateDiv">
                <h1 className="MainHeading">Click To Generate Winners Report </h1>
                <Button variant="warning" onClick={handleDownloadClick} title="Click to generate winners report" style={{ border: "2px solid black" }}>Generate Report </Button>
            </div>
        </div>
    );
}

export default Generate;
