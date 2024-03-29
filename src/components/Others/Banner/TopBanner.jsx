const TopBanner = ({ pic, homeText = "主页", currentPageText }) => {
  return (
    <section
      className="hero bg-cover bg-position py-4"
      style={{ background: `url(${pic})` }}
    >
      <div className="container py-5 index-forward text-white">
        <h1>{homeText}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-none mb-0 p-0">
            <li className="breadcrumb-item pl-0">
              <a href="/">
                <i className="fa fa-home mr-2"></i>Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {currentPageText}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default TopBanner;
