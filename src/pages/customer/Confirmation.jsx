import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your bookings are done!!!</h1>
      <br />
      <br />
      <h3>Contact Details</h3>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        class="btn btn-primary"
        onClick={() => navigate("/payment")}
      >
        Next
      </button>
    </div>
  );
}

export default Confirmation;
