const Introduction = ({ bgpic }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 px-lg-0">
            <div className="bg-primary pr-lg-3">
              <img className="img-fluid w-100" src={bgpic} />
            </div>
          </div>
          <div className="col-lg-7 px-lg-0">
            <div className="p-4 p-md-5 shadow bg-white">
              <p className="h6 mb-1 text-uppercase text-primary mb-3">
                为什么选择LUSO
              </p>
              <h2 className="mb-5">我们只输出有温度的工业介质油</h2>
              <div className="row">
                <div className="col-lg-9">
                  <ol className="list-numbers mb-0">
                    <li className="mb-4">
                      <h5>成立十年</h5>
                      <p className="text-small text-muted">
                        2010年，上海路素化学技术诞生于东方魅力之都上海。正在走向全球、拥抱国际业务。{' '}
                      </p>
                    </li>
                    <li className="mb-4">
                      <h5>自有工厂</h5>
                      <p className="text-small text-muted">
                        先进的现代化工厂，年产值千万吨级。业务遍及全国各地。
                      </p>
                    </li>
                    <li className="mb-4">
                      <h5>先进的品牌研发团队</h5>
                      <p className="text-small text-muted">
                        研发骨干来自国内、国际多家知名企业。正在为路索化学的崛起前赴后继。
                      </p>
                    </li>
                    <li className="mb-4">
                      <h5>数十世界五百强企业客户</h5>
                      <p className="text-small text-muted">
                        大众、中国航天、常林集团等国内知名企业长期合作，打造了无数成功案例。
                      </p>
                    </li>
                    <li>
                      <h5>及时的客户关怀团队</h5>
                      <p className="text-small text-muted">
                        路索化学专业售后支持团队，全天24小时为客户提供最为专业的技术支持。让您买的放心、用的舒心。
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
