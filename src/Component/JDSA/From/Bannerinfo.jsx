import { useState } from "react";

const Bannerinfo = () => {
  const [student, setstudent] = useState([]);
  const url = "http://software.diu.edu.bd:8189/result/studentInfo?studentId=";
  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      JpAdreess: e.target.UpazilaName.value,
      Diuadress: e.target.Diuadress.value,
      EmergencyContact: e.target.EmergencyContact.value,
      UpazilaName: e.target.UpazilaName.value,
    };
    console.log(object);
    const URL = `${url}${e.target.StudentID.value}`;
    fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        const temp = { ...data, ...object };
        setstudent(temp);
        console.log(student);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="mt-10 p-3 md:p-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your student ID?</span>
            </div>
            <input
              type="text"
              placeholder="221-35-XXX"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="StudentID"
              id="StudentID"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick Upazila name?</span>
            </div>
            <select
              className="select select-bordered"
              name="UpazilaName"
              id="UpazilaName">
              <option disabled selected>
                Pick one
              </option>
              <option>Alumni</option>
              <option>President</option>
              <option>Vice President</option>
              <option>General secretary</option>
              <option>Assistant General secretary</option>
              <option>Organizationer secretary</option>
              <option> Public Relations secretary</option>
              <option>Office secretary</option>
              <option>Sports secretary</option>
              <option>Finance secretary</option>
              <option>Executive Member</option>
              <option>Genaral Member</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick Upazila name?</span>
            </div>
            <select
              className="select select-bordered"
              name="UpazilaName"
              id="UpazilaName">
              <option disabled selected>
                Pick one
              </option>
              <option>Joypurhat Sadar</option>
              <option>Akkelpur</option>
              <option>Kalai</option>
              <option>Khetlal</option>
              <option>Panchabibi</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Enter your full address?(joypurhat)
              </span>
            </div>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="JpAdreess"
              id="JpAdreess"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter your full address?(DIU)</span>
            </div>
            <input
              type="text"
              placeholder="address"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="Diuadress"
              id="Diuadress"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Emergncy contact number?</span>
            </div>
            <input
              type="text"
              placeholder="01729318xxx"
              className="input input-bordered  w-full max-w-xs placeholder-opacity-5"
              name="EmergencyContact"
              id="EmergencyContact"
              required
            />
          </label>
        </div>

        <div className="w-full flex justify-center">
          <button type="submit" className="btn btn-primary mt-5 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bannerinfo;
