import React, { useState } from "react";
import code from "../assets/images/qr.png";
import StudentTable from "../component/studenttable/StudentTable";

import "./MainFile.css";
const axios = require("axios").default;

const staticUser = {
  id: "1",
  studentName: "abc",
  studentId: "bc190202899",
  timeStamp: "10.30pm",
};
const gettingUserData = (previousData, setArray) => {
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
  setArray([...previousData, { ...staticUser }]);
};
const MainFile = () => {
  const [value, setValue] = useState("");
  const [QRcode, setQRcode] = useState(
    "https://chart.googleapis.com/chart?chs=300x200&cht=qr&chl=input&choe=UTF-8"
  );
  const [studentData, setStudentData] = useState([]);

  const handlePress = (e) => {
    e.preventDefault();
    // const newRecord = [
    //   ...studentData,
    //   {
    //     id: studentData.length + 1,
    //   },
    // ];
    // setStudentData(newRecord);

    gettingUserData(studentData, setStudentData);
  };
  const handleStopLogin = (e) => {
    e.preventDefault();
    const random = Math.random();
    const qrcodesrc =
      "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" +
      random +
      "&choe=UTF-8";
    setQRcode(qrcodesrc);
    setValue("");
  };


  return (
    <>
      <section>
        <div className="container-fluid text-center">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-4 qrsection">
              <form onSubmit={handleStopLogin}>
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <img src={QRcode} alt="qr code" />
                  <label>Please Enter Value to Generate New QR</label>
                  {/* <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className="mb-4"
                    type="number"
                  /> */}
                </div>

                <button className="pressMe">Generate QR Code</button>
              </form>
            </div>
            <div className="col-lg-8 col-md-8 pt-4">
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
          <div>
            <button className="pressMe" onClick={handlePress}>
              Press Me
            </button>
            <button type="submit" className="pressMe m-3">Refresh</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainFile;
