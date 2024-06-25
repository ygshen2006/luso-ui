const Footer = () => {
  return (
    <footer className="bg-dark">
      <div>
        <div className="bg-primary py-5 text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <h6 className="h1 mb-0">10</h6>
                  <p className="ml-3 flex-grow-1 text-uppercase mb-0">
                    年战略发展平台
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <h6 className="h1 mb-0">20</h6>
                  <p className="ml-3 flex-grow-1 text-uppercase mb-0">
                    ISO专利项目
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <h6 className="h1 mb-0">809</h6>
                  <p className="ml-3 flex-grow-1 text-uppercase mb-0">
                    长期战略合作伙伴
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <h6 className="h1 mb-0">354</h6>
                  <p className="ml-3 flex-grow-1 text-uppercase mb-0">
                    在线合作商
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark py-5 text-white">
          <div className="container">
            <div className="row py-5">
              <div className="col-lg-4 col-md-6">
                <p className="text-muted text-small mb-4">
                  上海市松江区曹农路255号6幢1-2层
                </p>
                <p className="mb-1">
                  <i className="fas fa-envelope mr-3 text-primary fa-fw"></i>
                  <span className="text-small text-muted">
                    hyzhang@lusochem.com
                  </span>
                </p>
                <p className="mb-1">
                  <i className="fas fa-mobile mr-3 text-primary fa-fw"></i>
                  <span className="text-small text-muted">021-34633526</span>
                </p>
                <p className="mb-1">
                  <i className="fas fa-map-marker-alt mr-3 text-primary fa-fw"></i>
                  <span className="text-small text-muted">中国智造</span>
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="mt-3 mb-4 font-weight-normal">快速连接</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a className="footer-link" href="/">
                      首页
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="footer-link" href="/about">
                      关于我们
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="footer-link" href="/products">
                      产品中心
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="footer-link" href="/products">
                      技术中心
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="footer-link" href="/customers">
                      合作伙伴
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="footer-link" href="/contacts">
                      联系我们
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="mt-3 mb-4 font-weight-normal">企业新闻</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex mb-4">
                    <div className="ml-3">
                      <p className="small text-muted mb-0">10/01, 2021 </p>
                      <h6 className="text-light font-weight-normal mb-0">
                        路素化学新版首页上线
                      </h6>
                      <a
                        className="reset-anchor text-primary text-small"
                        href="#"
                      >
                        Read more<i className="fas fa-angle-right ml-2"></i>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="ml-3">
                      <p className="small text-muted mb-0">10/10, 2021 </p>
                      <h6 className="text-light font-weight-normal mb-0">
                      路素化学内部生产大比拼启动
                      </h6>
                      <a
                        className="reset-anchor text-primary text-small"
                        href="#"
                      >
                        Read more<i className="fas fa-angle-right ml-2"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darker py-4">
          <div className="container text-center">
            <p className="mb-0 text-muted text-small">
              © All rights reserved. 沪ICP备2024076982号-1
              <a>路素（上海）新材料科技有限公司</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
