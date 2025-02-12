import { useNavigate } from "react-router-dom";



function Cart() {
  const navigate = useNavigate(); 


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <br />
      <h3>Your bookings</h3>

      <br />
      <br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Provider Name</th>
            <th scope="col">Slot</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>50</td>
            
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>50</td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>empty</td>
            <td>@twitter</td>
            <td>50</td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>

          </tr>
          <tr>
            <th scope="row">4</th>
            <td>cleaning</td>
            <td>Ramesh</td>
            <td>4PM</td>
            <td>50</td>

            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>

          <tr>
            <td></td>
            
            <td></td>
            <td></td>
            <th>Total price</th>
            <td>455</td>
          </tr>
        </tbody>
      </table>

      <button type="button" class="btn btn-primary" onClick={()=> navigate("/confirmation")}>Confirm</button>

    </div>
  );
}

export default Cart;
