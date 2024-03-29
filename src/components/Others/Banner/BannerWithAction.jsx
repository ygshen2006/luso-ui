const BannerWithAction = ({
  bgpic,
  headText = "联系我们获取专业的行业解决方案",
  subText = "At LUSO Chemical Industry Get The Most Professional GuidenceWith The Most Talent Professors",
  actionButtonText = "联系我们",
  actionUrl = "/contacts",
}) => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ background: `url(${bgpic})` }}
    >
      <div className="primary-overlay py-5">
        <div className="overlay-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-left mb-4 mb-lg-0">
                <h2 className="text-white mb-2">{headText}</h2>
                <p className="text-white mb-0">{subText}</p>
              </div>
              <div className="col-lg-3 ml-auto text-center text-lg-right">
                <a className="btn btn-outline-light" href={actionUrl}>
                  {actionButtonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWithAction;
