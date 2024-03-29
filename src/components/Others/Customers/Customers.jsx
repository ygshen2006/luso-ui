const CustomersComponent = ({ items }) => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <p className="h6 mb-1 text-uppercase text-primary mb-3">合作客户</p>
        <div className="row mb-5">
          <div className="col-lg-5">
            <h2 className="mb-5">携手上海路素，未来可期。</h2>
          </div>
          <div className="col-lg-7">
            <p className="text-muted">
              我们只输出有温度的工业介质油,
              我们只维护有企业发展潜力的客户，我们只助力有远大抱负的一流企业。加入路素化学战略合作平台，携手创造美好未来！
            </p>
          </div>
        </div>
        <div className="owl-carousel customers-slide">
          {items.map((item, index) => {
            return (
              <div key={index} className="testimonial p-5 shadow-sm">
                <div className="d-flex align-items-center mb-1">
                  <div>
                    {/* <div
                      className="img-fluid"
                      style={{ background: `url(${item.pic})` }}
                    /> */}
                    <img
                      style={{ height: "180px" }}
                      className="img-fluid "
                      src={item.pic}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CustomersComponent;
