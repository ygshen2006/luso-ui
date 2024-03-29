import p1 from '../../../images/p1.jpeg';
import p2 from '../../../images/p2.jpeg';
import p3 from '../../../images/p3.jpeg';
import p4 from '../../../images/p4.jpeg';
import p5 from '../../../images/p5.jpeg';
import p6 from '../../../images/p6.jpeg';
import p7 from '../../../images/p7.jpeg';
import p8 from '../../../images/p8.jpeg';
import { Avatar } from 'antd';
import './style.css';
const ProductsComponent = () => {
  return (
    <>
      <section className="py-5">
        <div className="container py-5 text-center">
          <header className="mb-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <p className="h6 text-uppercase text-primary mb-0">产品服务</p>
                <h2>我们的专业成就您的成功</h2>
              </div>
            </div>
          </header>
          <div className="row align-items-stretch">
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p1} alt="avatar" />}
                />
                <h3 className="h5">金属切削系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p2} alt="avatar" />}
                />
                <h3 className="h5">金属清洗系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p3} alt="avatar" />}
                />

                <h3 className="h5">金属防锈系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p4} alt="avatar" />}
                />
                <h3 className="h5">热处理淬火介质系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p5} alt="avatar" />}
                />

                <h3 className="h5">冲压拉伸系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p6} alt="avatar" />}
                />

                <h3 className="h5">轧制油系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p7} alt="avatar" />}
                />

                <h3 className="h5">抗燃液压系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="px-4 py-5 border border-width-md border-dash h-100">
                <Avatar
                  className="avata"
                  size={90}
                  src={<img src={p8} alt="avatar" />}
                />

                <h3 className="h5">液压导轨油系列产品</h3>
                <p className="text-small mb-0 text-muted"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsComponent;
