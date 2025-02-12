import React, { useState } from 'react';
import './mainpage.css';

function Mainpage() {

    const [showTable, setShowTable] = useState(false);

    const toshowTable = () => {
        setShowTable(prevState => !prevState);
    };

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

            <button className='btn1' onClick={toshowTable}>{showTable ? 'Hide S3 Bucket List' : 'View S3 Bucket List'}</button>

            {showTable && (<div className="file-list">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td>250.6 KB</td>
                    </tr>
                </table>
            </div>
            )}
        </div>
    )
}

export default Mainpage
