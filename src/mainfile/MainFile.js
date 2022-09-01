import React, { Component, useEffect, useState } from "react";
import code from "../assets/images/qr.png";
import StudentTable from "../component/studenttable/StudentTable";

import "./MainFile.css";
const axios = require('axios').default;







const staticUser=  {
    id:'1',
    studentName: "abc",
    studentId: "bc190202899",
    timeStamp: "10.30pm",
  }
const  gettingUserData=(previousData,setArray)=>{
    // axios.get('/user?ID=12345')
    // .then(function (response) {
    //   // handle success set\
    //   setTimeout(()=>{
    // },2000)
    // setArray([...previousData,{...staticUser}])
    //   console.log(previousData,"<=-=");
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    setArray([...previousData,{...staticUser}])

   
}
const MainFile = () => {
  const [studentData, setStudentData] = useState([
  
  ]);

  const handlePress = (e) => {
    e.preventDefault();
    // const newRecord = [
    //   ...studentData,
    //   {
    //     id: studentData.length + 1,
    //   },
    // ];
    // setStudentData(newRecord);

    gettingUserData(studentData,setStudentData);
  };



  return (
    <>
      <section>
        <div className="container-fluid text-center">
          <div className="row mt-4">
            <div className="col-lg-3 col-md-3">
              <img src={code} alt="QR Code" className="img-fluid" />
            </div>
            <div className="col-lg-9 col-md-9 pt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Student Name</th>
                    <th>Student Id</th>
                    <th>Time Stamp</th>
                  </tr>
                </thead>
                <thead>
                  {studentData.map((e, idx) => (
                    <StudentTable
                      key={idx}
                      id={e.id}
                      studentName={e.studentName}
                      studentId={e.studentId}
                      timeStamp={e.timeStamp}
                    />
                  ))}
                </thead>
              </table>
            </div>
          </div>
          <button className="pressMe" onClick={handlePress}>
            Press Me
          </button>
        </div>
      </section>
    </>
  );
};
export default MainFile;
