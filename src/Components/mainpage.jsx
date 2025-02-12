import React from 'react';
import './mainpage.css';

function Mainpage() {
    return (
        <div className="main">
            <div className="text">
                <h1>AWS S3 Bucket.</h1>
                <h2>Store the Files in the AWS S3 Bucket Using the Javacript.</h2>
            </div>

            <div className="upload">
                <h2>Upload Files.</h2>
                <input type="file" id='fileInput' />
                <button id='uploadButton' className='btn'>Upload File</button>
            </div>

            <button className='btn1'>View S3 Bucket List</button>

            <div className="file-list">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Mainpage
