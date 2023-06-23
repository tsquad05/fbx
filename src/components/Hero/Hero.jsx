import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Hero() {
  return (
    <>
      <section className="hero">
        <p className="heroText">
          <h2>Welcome To FBX</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Looking For a Product or Service?"
              aria-label="Looking For a Product or Service?"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              style={{
                borderRadius: "none",
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Search
            </button>
          </div>
        </p>
      </section>
    </>
  );
}

export default Hero;
