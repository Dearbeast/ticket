
import 'swiper/swiper-bundle.min.css';
import './App.css'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import { useEffect, useRef } from 'react';

function App() {

  const slideContent = useRef(null);

  const sliderPagination = useRef(null);

  const sliderNextElement = useRef(null);

  const sliderPrevElement = useRef(null);


  useEffect(() => {
    new Swiper(slideContent.current, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: 3,
      spaceBetween: 25,
      centeredSlides: true,
      loop: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: sliderPagination.current,
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: sliderNextElement.current,
        prevEl: sliderPrevElement.current,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  // const swiper = 


  return (
    <>
      <div className="slide-container swiper">
        <div className="intro">
          <img src="/kspxFuslACBP.png" alt="" className="close" />
          <h1>My Tickets</h1>
        </div>
        <div className="slide-content" ref={slideContent}>
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 6</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW <br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 7</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 8</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 6</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW <br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 7</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 8</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>

            {/* ////////////////// */}
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 6</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW <br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 7</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 8</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Standard Ticket</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">117</span>
                  <span className="seat">6</span>
                  <span className="seat"> 5</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="WWW Monday Night Raw.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>WWW MONDAY NIGHT RAW<br /></h3>

                    <p>
                      Mon July 29, 6:30PM Xcel Energy Center, Saint Paul, Minnesota, USA 
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Section 117</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-navBtn" ref={sliderNextElement}></div>
        <div className="swiper-button-prev swiper-navBtn" ref={sliderPrevElement}></div>
        <div className="swiper-pagination swiper-navBtn1" ref={sliderPagination}></div>

        <div className="banner-btn">
          <a href=""> <span></span>Transfer</a>
          <a href=""> <span></span>Sell</a>
        </div>
      </div>
    </>
  )
}

export default App
