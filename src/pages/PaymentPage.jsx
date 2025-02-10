import my_images from "../assets/wallet.jpg";
import credit_card_image from "../assets/credit_card.jpg";
import upi_icon_image from "../assets/upi_icon_image.png";



function PaymentPage() {
  return (
    <div>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </nav>
      </div>
      <br />
      <div style={{ justifyContent: "center" }}>
        <h1>Thanks for using our service</h1>
        <br />
        <h3>How are you going to make the payment</h3>
      </div>
      <div style={{ padding: "10%" }}>
        <table className="table border table-borderless">
          <tbody>
            
            <tr>
              
              <a href="/feedback" style={{textDecoration:"none",display:"inline"}}>
              
              <td>Cash</td>
              </a>
              <td>
                <img src={my_images} alt="Cash img" width="50px" />
              </td>
            </tr>
            <tr>
            <a href="/feedback" style={{textDecoration:"none",display:"inline"}}>
              <td>UPI</td>
              </a>
              <td>
                <img src={upi_icon_image} alt="UPI img" width="50px" />
              </td>
            </tr>
            <tr>
            <a href="/feedback" style={{textDecoration:"none",display:"inline"}}>
              <td>Credit Card</td>
              </a>
              <td>
                <img
                  src={credit_card_image}
                  alt="Credit Card img"
                  width="50px"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentPage;
