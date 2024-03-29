import pic1 from "../../../images/hero-banner-1.jpg";

const BannerWithNav = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-position py-4"
        style={{ background: `url(${pic1})` }}
      >
        <div className="container py-5 index-forward text-white">
          <h1>Contact Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-none mb-0 p-0">
              <li className="breadcrumb-item pl-0">
                <a href="index.html">
                  {" "}
                  <i className="fa fa-home mr-2"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact us
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default BannerWithNav;
