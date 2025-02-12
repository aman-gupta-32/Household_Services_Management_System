import Card from "../../components/Card";

function Services() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Services</h1>

      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://media.istockphoto.com/id/1345670559/photo/electrician-fixing-an-electrical-outlet-and-measuring-the-voltage.webp?a=1&b=1&s=612x612&w=0&k=20&c=5lp_iJQfahTtJnv5CluqHagQPgzrAKdumG-L_eI59Qk="
            }
            content={"Repair and maintainence"}
            alt={"Nothing"}
          />
        </a>

        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://media.istockphoto.com/id/1276530099/photo/woman-cleaning-couch-with-vacuum-cleaner-at-home-cleaning-service-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=lrSJEIkX9APbLBtbkHmoLDw67JzO4P6DEwXo7wU1jWA="
            }
            content={"Cleaning"}
            alt={"Cleaning"}
          />
        </a>

        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8fDA%3D"
            }
            content={"Pest Control"}
            alt={"Cleaning"}
          />
        </a>

        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://media.istockphoto.com/id/1331093282/photo/shot-of-a-young-women-in-bathrobe-applying-hand-cream-moisture-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=aoIIVWIRr1DRtPbgywneUakcNtedIG92MIKA6jP_0zY="
            }
            content={"Body Care"}
            alt={"Cleaning"}
          />
        </a>

        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://media.istockphoto.com/id/157613176/photo/dangerous-painting.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcoyKUB_QCyE6ftIwAqPpPmvlO2gP2S3j8G3u20SrtY="
            }
            content={"Painting"}
            alt={"Cleaning"}
          />
        </a>

        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://media.istockphoto.com/id/1185673631/photo/love-has-no-limits.webp?a=1&b=1&s=612x612&w=0&k=20&c=AxP-U2F3joIaxafh_ECstEzc4__joKZHoMbp8CkFTY0="
            }
            content={"Caretaking"}
            alt={"Painting"}
          />
        </a>
        <a
          href="/addtocart"
          style={{ textDecoration: "none", height: "800px" }}
        >
          <Card
            src={
              "https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/7-laundry-tips-and-tricks-for-washing-clothes/LaundryTipsAndTricks_Thumbnail.jpg?wid=1200&fmt=webp"
            }
            content={"Laundry"}
            alt={"Nothing"}
          />
        </a>

        <a href="/addtocart" style={{ textDecoration: "none" }}>
          <Card
            src={
              "https://content.jdmagicbox.com/comp/pune/g6/020pxx20.xx20.201007134621.k8g6/catalogue/home-care-nursing-bureau-hinjewadi-pune-patient-care-taker-services-kn15i15jk4.jpg"
            }
            content={"Medical"}
            alt={"Nothing"}
          />
        </a>
      </div>
    </div>
  );
}

export default Services;
