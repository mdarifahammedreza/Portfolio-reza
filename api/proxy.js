const fetch = require("node-fetch");
console.log("ok");
module.exports = async (req, res) => {
  console.log("ok");
  const { studentId } = req.query;
  console.log(studentId);
  const url = `http://software.diu.edu.bd:8189/result/studentInfo?studentId=${studentId}`;
  try {
    console.log("ok");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
