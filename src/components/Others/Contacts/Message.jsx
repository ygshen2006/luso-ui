const ContactMessage = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="form-group col-lg-12">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group col-lg-12">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Leave your message"
          ></textarea>
        </div>
        <div className="form-group col-lg-12">
          <button className="btn btn-outline-primary" type="submit">
            Submit now
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMessage;
