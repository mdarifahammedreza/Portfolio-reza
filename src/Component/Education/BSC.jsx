const BSC = () => {
  return (
    <div className="bg-transparent  md:mt-10 p-4 rounded-md shadow-md">
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Semster</td>

              <td>SGPA</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Spring-2022</td>
              <td>3.94</td>
              <th>1</th>
            </tr>
            <tr>
              <th>2</th>
              <td>Summer-2022</td>
              <td>3.68</td>
              
              <th>2</th>
            </tr>
            <tr>
              <th>3</th>
              <td>Fall-2022</td>
              <td>3.71</td>
              
              <th>3</th>
            </tr>
            <tr>
              <th>4</th>
              <td>Spring-2023</td>
              <td>3.94</td>
              
              <th>4</th>
            </tr>
            <tr>
              <th>5</th>
              <td>Fall-2023</td>
              <td>3.68</td>
              
              <th>5</th>
            </tr>
            <tr>
              <th>6</th>
              <td>Spring-2024</td>
              <td>running</td>
              
              <th>6</th>
            </tr>
            <tr>
              <th>7</th>
              <td>--</td>
              <td>--</td>
              
              <th>7</th>
            </tr>
            <tr>
              <th>8</th>
              <td>--</td>
              <td>--</td>
              
              <th>8</th>
            </tr>
            <tr>
              <th>9</th>
              <td>--</td>
              <td>--</td>
              
              <th>9</th>
            </tr>
            <tr>
              <th>10</th>
              <td>Average</td>
              <td>3.79</td>
              
              <th>10</th>
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
  );
};

export default BSC;
