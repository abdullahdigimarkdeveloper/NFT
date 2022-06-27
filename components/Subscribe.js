export default function Subscribe() {
  return (
    <div>
      <div className="subscribeMain">
        <h1 data-aos="zoom-in" data-aos-duration="1500">
          Never miss a drop!
        </h1>
        <p className="my-3" data-aos="zoom-out-up" data-aos-duration="1500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        <div className="d-sm-flex justify-content-center pt-4 gap-3">
          <input
            data-aos="fade-down-right"
            data-aos-duration="1500"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            className="mt-sm-0 mt-3"
            data-aos="fade-down-left"
            data-aos-duration="1500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
