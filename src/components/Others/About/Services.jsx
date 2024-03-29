const ServicesComponent = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container py-5">
          <header className="mb-5 text-center">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <p className="h6 text-uppercase text-primary">
                  专业的科技水准，至诚的服务理念
                </p>
                <h2>见微知著，润物无声。</h2>
                <p className="text-muted">
                  客户至上、合作伙伴至上、责任至上、团队至上。
                </p>
              </div>
            </div>
          </header>
          <div className="row align-items-stretch">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="bg-white h-100">
                <div className="bg-primary px-4 py-3 d-inline-block">
                  <i className="fa fa-user-circle text-white fa-fw"></i>
                </div>
                <div className="px-5 pt-0 pb-5 bg-white text-center">
                  <h2 className="h4 mb-3">主要业务</h2>
                  <p className="text-muted text-large mb-0">
                    金属加工液、热处理油、防锈油、清洗剂、抗燃液压液、轧制油、拉丝油、冲压成型油及润滑脂等系列
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="bg-white h-100">
                <div className="bg-primary px-4 py-3 d-inline-block">
                  <i className="fa fa-sitemap text-white fa-fw"></i>
                </div>
                <div className="px-5 pt-0 pb-5 bg-white text-center">
                  <h2 className="h4 mb-3">服务范围</h2>
                  <p className="text-muted text-big mb-0">
                    汽车、航天、钢铁、铸造、锻造、线缆、五金、电子等行业领域。
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white h-100">
                <div className="bg-primary px-4 py-3 d-inline-block">
                  <i className="fa fa-certificate text-white fa-fw"></i>
                </div>
                <div className="px-5 pt-0 pb-5 bg-white text-center">
                  <h2 className="h4 mb-3">企业资质</h2>
                  <p className="text-muted text-big mb-0">
                    ISO9001:2008国际质量体系认证、ISO14001:2004环境管理体系认证。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
