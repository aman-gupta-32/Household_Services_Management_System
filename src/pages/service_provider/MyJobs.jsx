function MyJobs() {
  return (
    <div>
      <h1>My Jobs</h1>
      <table style={{ marginTop: "10px" }} class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Address</th>
            <th scope="col">service names</th>
            <th scope="col">payment status</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rishi</td>
            <td>Mumbai</td>
            <td>Cleaning</td>
            <td>Pending</td>
            <td>02/05/2025</td>
            <td>12:02</td>
          </tr>
          <tr>
            <td>Ravi</td>
            <td>Pune</td>
            <td>Pest control</td>
            <td>Confirm</td>
            <td>02/04/2025</td>
            <td>12:08</td>
          </tr>
          <tr>
            <td>Tarun</td>
            <td>Kota</td>
            <td>Caretaking</td>
            <td>Confirm</td>
            <td>04/05/2025</td>
            <td>02:20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyJobs;
