import React, { useState } from 'react';
import axios from 'axios';
import './mainpage.css';

function Mainpage() {

    const [showTable, setShowTable] = useState(false);
    const [selectFile, setSelectFile] = useState(null);
    const [fileList, setFileList] = useState([]);

    const toshowTable = async () => {
        setShowTable(prevState => !prevState);

        if (!showTable) {
            try {
                const response = await axios.get("http://localhost:3001/list");
                setFileList(response.data);
            } catch (error) {
                console.error("Error fetching file list:", error);
            }
        }
    };

    const handleFileChange = (event) => {
        setSelectFile(event.target.files[0]);
    };

    const handleUploadFiles = async () => {
        if (!selectFile) {
            alert("Please Select a File First.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectFile);


        try {
            const response = await axios.post("http://localhost:3001/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("File Upload Successfully.");
            console.log(response.data)
            setSelectFile(null);
        } catch (error) {
            console.error("Upload error:", error);
            alert("File Upload failed!");
        }
    };
    return (
        <div className="main">
            <div className="text">
                <h1>AWS S3 Bucket.</h1>
                <h2>Store the Files in the AWS S3 Bucket Using the Javacript.</h2>
            </div>

            <div className="upload">
                <h2>Upload Files.</h2>
                <input type="file" id='fileInput' onChange={handleFileChange} />
                <button id='uploadButton' className='btn' onClick={handleUploadFiles}>Upload File</button>
            </div>

            <button className='btn1' onClick={toshowTable}>{showTable ? 'Hide S3 Bucket List' : 'View S3 Bucket List'}</button>

            {showTable && (
                <div className="file-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fileList.length > 0 ? (
                                fileList.map((file, index) => (
                                    <tr key={index}>
                                        <td>{file.name}</td>
                                        <td>{file.size}KB</td>
                                        <td><button className='btn2'>Delete</button></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No Files Found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Mainpage
