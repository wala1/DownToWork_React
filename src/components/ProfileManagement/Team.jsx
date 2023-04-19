import React from 'react';
import './Team.module.css';

const Team = () => {
  const tab = [
    {
      id: 1,
      title: 'John Doe',
      subtitle: 'Architect Designer',
      img: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg',
    },
    {
      id: 2,
      title: 'Jane Smith',
      subtitle: 'Graphic Designer',
      img: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg',
    },
    {
      id: 3,
      title: 'Bob Johnson',
      subtitle: 'Marketing Manager',
      img: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg',
    },
  ];
  return (
    <div>

      <div>

        <div class="row height d-flex justify-content-center align-items-center">

          <div style={{paddingRight: '300px', marginTop: '40px'}}>
            {' '} <div className="header">
              <div
                className="title"
                style={{position: 'relative', left: '40px'}}
              >
                Our Expert Team
              </div>
              <p
                style={{
                  color: 'yellow',
                  marginLeft: '40px',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  fontFamily: 'Helvetica',
                }}
              >
                ~ Confimed profiles down to work ~
              </p>
            </div>{' '}
          </div>
          <div class="col-md-6">
            <div style={{paddingLeft: '150px'}}>
              <div className="col-md-6">
                <div style={{position: 'relative'}}>
                  <i
                    className="fa fa-search"
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  />
                  <input
                    type="text"
                    className="form-control form-input"
                    placeholder="Search Profile ..."
                    style={{paddingLeft: '30px'}}
                  />
                  <span
                    className="left-pan"
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <i className="fa fa-microphone" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="container">
        <div className="row text-center">
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5" style={{width: '1400px',height: '600px'}}>
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://i.la-croix.com/729x486/smart/2015/03/20/1293464/Journee-mondiale-trisomie-21-pour-sensibiliser-sujet-sensible_0.jpg"
                alt=""
                width={150}
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Manuella </h5>
              <span className="small text-uppercase text-muted">
                Designer
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End */}
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://parismatch.be/app/uploads/2017/03/Melanie-e1488445694858-1100x715.jpg"
                alt=""
                width={150}
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Samuel Hardy</h5>
              <span className="small text-uppercase text-muted">
              Painter
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End */}
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://www.liberation.fr/resizer/lupCq_QTpJx0XSZehJ6MKI-MgAc=/600x600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/L4KODZ5A65HB7OHOCCGP6FCVUE.jpg"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Tom Sunderland</h5>
              <span className="small text-uppercase text-muted">
               Plumber
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End */}
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://www.fondationlejeune.org/assets/uploads/2022/07/Sans-titre-1.jpg"
                alt=""
                width={130}
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">John Tarly</h5>
              <span className="small text-uppercase text-muted">
              Musician
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </div>
  );
};

export default Team;
