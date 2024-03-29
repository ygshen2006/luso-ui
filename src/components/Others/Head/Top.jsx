const HeaderTop = () => {
  return (
    <div className="top-bar bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 bg-primary py-2 text-center text-lg-left">
            <p className="mb-0 text-small">
              <i className="fas fa-at mr-2"></i>路素化学欢迎您的到来 （Welcome
              to Luso Ltd）
            </p>
          </div>
          <div className="col-lg-8 text-right py-2 text-center text-lg-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  className="font-weight-normal text-small reset-anchor"
                  href="#"
                >
                  <i className="fas fa-mobile mr-2"></i>021-34633526
                </a>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <a
                  className="font-weight-normal text-small reset-anchor"
                  href="mailto:hyzhang@lusochem.com"
                >
                  <i className="fas fa-envelope mr-2"></i>hyzhang@lusochem.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
