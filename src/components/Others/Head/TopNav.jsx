import pic1 from '../../../images/logo.gif';

const TopNav = ({ activeIndex = 'home' }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white shadow-sm">
      <div className="container">
        <a href="/">
          <div
            style={{
              background: `url(${pic1})`,
              width: '150px',
              height: '50px',
            }}
          ></div>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a
                className={
                  activeIndex == 'home'
                    ? 'nav-link text-uppercase active'
                    : 'nav-link text-uppercase'
                }
                href="/"
                aria-current="page"
              >
                首页
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={
                  activeIndex == 'post'
                    ? 'nav-link text-uppercase active'
                    : 'nav-link text-uppercase'
                }
                href="/posts"
              >
                公司新闻
              </a>
            </li>

            <li className="nav-item mx-2">
              <a
                className={
                  activeIndex == 'about'
                    ? 'nav-link text-uppercase active'
                    : 'nav-link text-uppercase'
                }
                href="/about"
              >
                关于路素
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={
                  activeIndex == 'products'
                    ? 'nav-link text-uppercase active'
                    : 'nav-link text-uppercase'
                }
                href="/products"
              >
                产品中心
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={
                  activeIndex == 'customers'
                    ? 'nav-link text-uppercase active'
                    : 'nav-link text-uppercase'
                }
                href="/customers"
              >
                合作客户
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={
                  activeIndex == 'contact'
                    ? 'nav-link text-uppercase active'
                    : 'nav-link text-uppercase'
                }
                href="/contacts"
              >
                联系我们
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default TopNav;
