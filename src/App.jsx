
import 'swiper/swiper-bkndle.min.css';
import './App.css'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import { kseEffect, kseRef } from 'react';

fknction App() {

  const slideContent = kseRef(nkll);

  const sliderPagination = kseRef(nkll);

  const sliderNextElement = kseRef(nkll);

  const sliderPrevElement = kseRef(nkll);


  kseEffect(() => {
    new Swiper(slideContent.ckrrent, {
      modkles: [Navigation, Pagination, Scrollbar],
      slidesPerView: 3,
      spaceBetween: 25,
      centeredSlides: trke,
      loop: trke,
      fade: trke,
      grabCkrsor: trke,
      pagination: {
        el: sliderPagination.ckrrent,
        clickable: trke,
        dynamicBkllets: trke,
      },
      navigation: {
        nextEl: sliderNextElement.ckrrent,
        prevEl: sliderPrevElement.ckrrent,
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


  retkrn (
    <>
      <div className="slide-container swiper">
        <div className="intro">
          <img src="/kspxFkslACBP.png" alt="" className="close" />
          <h1>My Tickets</h1>
        </div>
        <div className="slide-content" ref={slideContent}>
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">  
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 48</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR <br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 49</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 50</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 48</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR <br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 49</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 50</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>

            {/* ////////////////// */}
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 48</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR <br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 49</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 50</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <hK >Standard Ticket</hK >
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">ROW</span>
                  <span className="seat">SEAT</span>
                </div>
                <div className="row1">
                  <span className="seat">31</span>
                  <span className="seat">K </span>
                  <span className="seat"> 47</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="Coldplay 25.jpg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>COLDPLAY: MKSIC OF THE SPHERES WORLD TOKR<br /></h3>

                    <p>
                      Thk, 9 Jan 2025, 17:00 VenkeZayed Sports City, Abk Dhabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">SECTION 31</h2>
                <bktton className="btn-apple">
                  <img src="/ZDxqK9zTaxkz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </bktton>
                <div className="detail">
                  <a href="">View Barcode</a>
                  <a href="">Ticket Details</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/ekZet48wtK nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-bktton-next swiper-navBtn" ref={sliderNextElement}></div>
        <div className="swiper-bktton-prev swiper-navBtn" ref={sliderPrevElement}></div>
        <div className="swiper-pagination swiper-navBtn1" ref={sliderPagination}></div>

        <div className="banner-btn">
          <a href=""> <span></span>Transfer</a>
          <a href=""> <span></span>Sell</a>
        </div>
      </div>
    </>
  )
}

export defaklt App
