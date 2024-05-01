// import Image from "next/image";
import BSC from "../Component/Education/BSC";
import HSC from "../Component/Education/HSC";
import SSC from "../Component/Education/SSC";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Tabs } from "../components/ui/tabs";
const Education = () => {
  const tabs = [
    {
      title: "Bsc",
      value: "Bsc",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-800">
            <p>Bachelor at Software Engineering</p>
            <BSC />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Hsc",
      value: "Hsc",
      content: (
        <BackgroundGradient>
          {" "}
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-800">
            <p>Higer scondary school certificate</p>
            <HSC />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Ssc",
      value: "Ssc",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-800">
            <p>Secondary school certificate</p>
            <SSC />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Jsc",
      value: "Jsc",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-800">
            <p>Junior school certificate</p>
            <JSC />
          </div>
        </BackgroundGradient>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col  mx-auto w-full md:p-10  items-end justify-end">
      <Tabs tabs={tabs} />
    </div>
  );
};

const JSC = () => {
  return (
    <>
      <div className="bg-transparent  md:mt-10 p-4 rounded-md shadow-md">
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols gap-2">
            <thead>
              <tr>
                <th></th>
                <td>Subject</td>

                <td>GPA</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Bangla</td>
                <td>5.00</td>
                <th>1</th>
              </tr>
              <tr>
                <th>2</th>
                <td>English</td>
                <td>5.00</td>

                <th>2</th>
              </tr>
              <tr>
                <th>3</th>
                <td>Information & Commonication Technology</td>
                <td>5.00</td>

                <th>3</th>
              </tr>
              <tr>
                <th>4</th>
                <td>Physics</td>
                <td>5.00</td>

                <th>4</th>
              </tr>
              <tr>
                <th>5</th>
                <td>Chemistry</td>
                <td>5.00</td>

                <th>5</th>
              </tr>
              <tr>
                <th>6</th>
                <td>Higher Mathematics (main)</td>
                <td>5.00</td>

                <th>6</th>
              </tr>
              <tr>
                <th>7</th>
                <td>Biology (4th)</td>
                <td>5.00</td>

                <th>7</th>
              </tr>
              <tr>
                <th>8</th>
                <td>Bangladesh & Global Study</td>
                <td>5.00</td>

                <th>8</th>
              </tr>
              <tr>
                <th>9</th>
                <td>Islam & Moral Education</td>
                <td>5.00</td>

                <th>9</th>
              </tr>
              <tr>
                <th>10</th>
                <td>Physical Education,Health & sports</td>
                <td>5.00</td>

                <th>10</th>
              </tr>
              <tr>
                <th>11</th>
                <td>Career Education</td>
                <td>5.00</td>

                <th>11</th>
              </tr>
              <tr>
                <th>12</th>
                <td>Average</td>
                <td>5.00</td>

                <th>12</th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <td>Semster</td>
                <td>SGPA</td>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default Education;
