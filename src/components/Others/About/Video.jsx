import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const CompanyVideo = ({ pic }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="bg-center bg-cover"
      style={{ background: `url(${pic})` }}
    >
      <div className="dark-overlay py-5">
        <div className="overlay-content text-white">
          <div className="container py-5">
            <header className="text-center">
              <div className="row">
                <div className="col-lg-9 mx-auto">
                  <ModalVideo
                    channel="youku"
                    autoplay
                    isOpen={isOpen}
                    videoId="XNDc2NTE0ODYxNg"
                    onClose={() => setOpen(false)}
                  />
                  <button
                    className="video-btn mb-5"
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <p className="h6 mb-1 text-uppercase text-primary mb-3">
                    润滑世界、传动地球。Only @LUSO
                  </p>
                  <h2 className="h1 mb-5">路素化学助力企业腾飞</h2>
                  <a className="btn btn-primary" href="/products">
                    更多我们的服务
                  </a>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompanyVideo;
