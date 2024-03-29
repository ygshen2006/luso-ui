import { Modal } from "antd";
import pic1 from "../../../images/award1.png";
import { useState } from "react";

const Award = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        width={1000}
        title="科技证书"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          <img
            className="img-fluid"
            src={pic1}
            alt="点我查看"
            style={{ cursor: "pointer" }}
          />
        </p>
      </Modal>

      <section className="py-5 bg-light">
        <div className="container py-5 service">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <p className="h6 mb-1 text-uppercase text-primary mb-3">
                公司使命
              </p>
              <h2 className="mb-4">只为你做一桶好油</h2>
              <p className="text-small text-muted" style={{ margin: "15px" }}>
                We Work With You To Address Your Most Critical Business
                Priorities.{" "}
              </p>
              <p className="text-small text-muted" style={{ margin: "15px" }}>
                LUSO Global Chemical Industry Your Most Valuable Accompany
              </p>
              <ul
                className="list-check list-unstyled row px-3 mb-4"
                style={{ marginTop: "30px" }}
              >
                <li className="text-small text-muted col-lg-6 mb-2">
                  产品质量360°保证
                </li>
                <li className="text-small text-muted col-lg-6 mb-2">
                  客户利益最大化
                </li>
                <li className="text-small text-muted col-lg-6 mb-2">
                  销售服务专业化
                </li>
                <li className="text-small text-muted col-lg-6 mb-2">
                  技术支持全时化
                </li>
              </ul>
            </div>
            <div className="col-lg-5 ml-auto mb-4 mb-lg-0 order-1 order-lg-2">
              <div className="p-2 border">
                {/* <div style={{ background: `url(${pic1})`, height: "500px", width:"600px" }}>

                        </div> */}
                <img
                  className="img-fluid"
                  onClick={() => showModal()}
                  src={pic1}
                  alt="点我查看"
                  style={{ maxWidth: "120%", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
