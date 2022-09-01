import React, { Component } from 'react';
const StudentTable=(props)=>{
    const {id,studentName,studentId,image,timeStamp}=props;
    return(
        <>
        <tr>
            <td>{id}</td>
            <td>{studentName}</td>
            <td>{studentId}</td>
            <td>{timeStamp}</td>
        </tr>
        </>
    )
}
export default StudentTable