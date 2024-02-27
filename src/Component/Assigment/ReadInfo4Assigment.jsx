import React, { useState } from "react";
import DatePicker from "react-datepicker";

const ReadInfo4Assigment = ({ setstudent }) => {
  const [startDate, setStartDate] = useState(new Date());
  const url = "http://software.diu.edu.bd:8189/result/studentInfo?studentId=";
  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      StudentSection: e.target.StudentSection.value,
      CourseName: e.target.CourseName.value,
      CourseCode: e.target.CourseCode.value,
      CourseTeacherName: e.target.CourseTeacherName.value,
      courseTeacherDesignation: e.target.courseTeacherDesignation.value,
    };
    console.log(object);
    const URL = `${url}${e.target.StudentID.value}`;
    fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setstudent({ ...data, ...object, Submissiondate: startDate });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="mt-10 p-3 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Md Arif Ahammed Reza"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="StudentName"
              id="StudentName"
              required
            />
          </label> */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your student ID?</span>
            </div>
            <input
              type="text"
              placeholder="221-35-951"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="StudentID"
              id="StudentID"
              required
            />
          </label>
          {/* <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your batch code?</span>
            </div>
            <input
              type="text"
              placeholder="37"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="StudentBatch"
              id="StudentBatch"
              required
            />
          </label> */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your section name?</span>
            </div>
            <input
              type="text"
              placeholder="D"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="StudentSection"
              id="StudentSection"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your course name?</span>
            </div>
            <input
              type="text"
              placeholder="Introduction to Robotics"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="CourseName"
              id="CourseName"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your course code?</span>
            </div>
            <input
              type="text"
              placeholder="SE213"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="CourseCode"
              id="CourseCode"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your course teacher name?</span>
            </div>
            <input
              type="text"
              placeholder="Md Imran hasimi"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="CourseTeacherName"
              id="CourseTeacherName"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Input teacher designation</span>
            </div>
            <select
              className="select select-bordered"
              name="courseTeacherDesignation"
              id="courseTeacherDesignation">
              <option disabled selected>
                Pick one
              </option>
              <option>Teaching Assistant (TA)</option>
              <option>Lecturer</option>
              <option>Senior Lecturer</option>
              <option>Assistant Professor</option>
              <option>Associate Professor</option>
              <option>Professor</option>
              <option>Adjunct Professor</option>
              <option>Visiting Professor</option>
              <option>Emeritus/Emerita Professor</option>
              <option>Emeritus/Emerita Professor</option>
              <option>Research Professor</option>
              <option>Assistant Dean</option>
              <option>Dean</option>
            </select>
          </label>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Input Submission date?</span>
          </div>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
          />
        </label>

        <div className="w-full flex justify-center">
          <button type="submit" className="btn btn-primary mt-5 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReadInfo4Assigment;
