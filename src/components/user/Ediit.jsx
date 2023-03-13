import React from 'react'
import FooterContact from '../shared/footerContact'
import NavBar from '../shared/NavBar'
import './spaces.css' 
import './Edit.css'


const Ediit = () => {

    return (
        <div>
            {/* <div>  <NavBar/>  </div> */}
            <body className='body'>
        <main>
          
            <div className="section section-lg bg-soft">
                <div className="container">
                    <div className="row pt-5 pt-md-4">
                       {/*  <div className="col-12 d-lg-none">
                            <div className="card bg-white border-light mb-4 mb-lg-5">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-10 d-flex"><a href="account.html"
                                                className="list-group-item list-group-item-action border-0">Overview</a> <a
                                                href="settings.html"
                                                className="list-group-item list-group-item-action border-0 active">Settings</a>
                                            <a href="my-items.html"
                                                className="list-group-item list-group-item-action d-none d-sm-block border-0">My
                                                Items</a> <a href="security.html"
                                                className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a>
                                        </div>
                                        <div className="col-2 d-flex justify-content-center">
                                            <div className="btn-group dropleft"><button
                                                    className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span
                                                        className="icon icon-sm"><span
                                                            className="fas fa-ellipsis-h icon-secondary fa-lg" />
                                                    </span><span className="sr-only">Toggle Dropdown</span></button>
                                                <div className="dropdown-menu"><a href="my-items.html"
                                                        className="list-group-item list-group-item-action d-sm-none border-0">My
                                                        Items</a> <a href="security.html"
                                                        className="list-group-item list-group-item-action d-md-none border-0">Security</a>
                                                    <a href="billing.html"
                                                        className="list-group-item list-group-item-action border-0">Billing</a>
                                                    <a href="messages.html"
                                                        className="list-group-item list-group-item-action border-0">Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-body bg-white border-light mb-4">
                                        <h2 className="h5 mb-4">General information</h2>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group"><label htmlFor="first_name">First
                                                            Name</label> <input className="form-control" id="first_name"
                                                            type="text" placeholder="Sims" /></div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group"><label htmlFor="last_name">Last Name</label>
                                                        <input className="form-control" id="last_name" type="text"
                                                            placeholder="Neil" /></div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group"><label htmlFor="birthday">Birthday</label>
                                                        <input type="text" className="form-control flatpickr-input"
                                                            id="birthday" data-toggle="date"
                                                            placeholder="Select your birth date" /></div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group"><label htmlFor="gender">Gender</label>
                                                        <select className="custom-select" id="gender">
                                                            <option disabled="disabled" selected="selected">Select option
                                                            </option>
                                                            <option value={1}>Female</option>
                                                            <option value={2}>Male</option>
                                                        </select></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group"><label htmlFor="email">Email</label> <input
                                                            className="form-control" id="email" type="email"
                                                            placeholder="name@company.com" /></div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group"><label htmlFor="phone">Phone</label> <input
                                                            className="form-control" id="phone" type="number"
                                                            placeholder="+12-345 678 910" /></div>
                                                </div>
                                            </div>
                                            <h2 className="h5 my-4">Adress</h2>
                                            <div className="row">
                                                <div className="col-sm-9 mb-3">
                                                    <div className="form-group"><label htmlFor="address">Address</label>
                                                        <input className="form-control" id="address" type="text"
                                                            placeholder="Your address" /></div>
                                                </div>
                                                <div className="col-sm-3 mb-3">
                                                    <div className="form-group"><label htmlFor="number">Number</label>
                                                        <input className="form-control" id="number" type="number"
                                                            placeholder="No." /></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4 mb-3">
                                                    <div className="form-group"><label htmlFor="city">City</label> <input
                                                            className="form-control" id="city" type="text"
                                                            placeholder="City" /></div>
                                                </div>
                                                <div className="col-sm-4 mb-3">
                                                    <div className="form-group"><label htmlFor="country">Country</label>
                                                        <select className="form-control select2-hidden-accessible"
                                                            id="country" data-toggle="select" title="Country"
                                                            data-live-search="true" data-live-search-placeholder="Country"
                                                            data-select2-id={1} tabIndex={-1} aria-hidden="true">
                                                            <option data-select2-id={3}>United Stated</option>
                                                            <option>Canada</option>
                                                            <option>Germany</option>
                                                            <option>Spain</option>
                                                            <option>Italy</option>
                                                            <option>UK</option>
                                                        </select></div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group"><label htmlFor="zip">ZIP</label> <input
                                                            className="form-control" id="zip" type="tel"
                                                            placeholder="ZIP" /></div>
                                                </div>
                                            </div>
                                            <div className="mt-3"><button type="submit" className="btn btn-primary">Save
                                                    All</button></div>
                                        </form>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
        <div> <FooterContact/> </div>
       
    </div>
      )
   








}

export default Ediit