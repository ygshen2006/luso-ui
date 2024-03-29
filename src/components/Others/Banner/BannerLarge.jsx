import pic1 from "../../../images/home-2.jpg";
import pic2 from "../../../images/home-1.jpg";
import pic3 from "../../../images/home-3.png";

var Banner = () => {
  return (
    <div className="owl-carousel owl-theme-default hero-slider owl-nav-custom owl-loaded owl-drag">
      <div
        className="active hero-slide bg-size bg-center py-5"
        style={{ background: `url(${pic3})` }}
      >
        <div className="container text-white py-5 index-forward">
          <div className="row">
            <div className="col-lg-7">
              <h1>了解路素的业务体系</h1>
              <p className="lead">
                更好的了解上海路索化学公司的业务体系，助力您的企业腾飞.
              </p>
              <ul className="list-inline">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="btn btn-primary" href="/products">
                      了解更多
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light" href="/contacts">
                      联系我们
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-slide bg-size bg-center py-5"
        style={{ background: `url(${pic1})` }}
      >
        <div className="container text-white py-5 index-forward">
          <div className="row">
            <div className="col-lg-7">
              <h1>了解路索的未来规划</h1>
              <p className="lead">携手上海路索，未来可期。</p>
              <ul className="list-inline">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="btn btn-primary" href="/products">
                      了解更多
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light" href="/contacts">
                      联系我们
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-slide bg-size bg-center py-5"
        style={{ background: `url(${pic2})` }}
      >
        <div className="container text-white py-5 index-forward">
          <div className="row">
            <div className="col-lg-7">
              <h1>了解路索的企业文化</h1>
              <p className="lead">
                上海路索化学公司, 集产品研发、生产、推广于一体的多元企业文化.
              </p>
              <ul className="list-inline">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="btn btn-primary" href="/products">
                      了解更多
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light" href="/s">
                      联系我们
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
