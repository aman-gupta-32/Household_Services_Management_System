function Card({ src, content, alt }) {
  return (
    <div>
      <div class="card" style={{ width: "18rem", marginTop:"20px" }}>
        <img src={src} class="card-img-top" alt={alt} />
        <div class="card-body">
          <p class="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
