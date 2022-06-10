import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='sb-bg-dark mt-5'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 mb-3 mb-lg-0 text-white'>
                            <span className='text-uppercase mb-3' style={{fontSize : '32px'}}>SEABORN101</span>
                            <p className='w-75'>
                                As the Online Fashion Center in Asia, we create limitless style possibilities by expanding 
                                our product range, from international products to coveted local products. We make you the 
                                center. With ZALORA, You Own Now.
                            </p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-3 mb-lg-0 text-white'>
                            <p className='fw-bolder'>Help Center</p>
                            <p className='mb-1'>Login / Account Info</p>
                            <p className='mb-1'>Help Center</p>
                            <p className='mb-1'>Order Status</p>
                            <p className='mb-1'>Fit Guide</p>
                            <p className='mb-1'>Sizing, Fit and Care</p>
                            <p className='mb-1'>Accessibility</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-3 mb-lg-0 text-white'>
                            <p className='fw-bolder'>Connect</p>
                            <p className='mb-1'>Store Locator</p>
                            <p className='mb-1'>Contact Us</p>
                            <p className='mb-1'>Wholesale</p>
                            <p className='mb-1'>Careers</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-3 mb-lg-0 text-white'>
                            <p className='fw-bolder'>Brand</p>
                            <p className='mb-1'>Our Story</p>
                            <p className='mb-1'>Shop Instagram</p>
                            <p className='mb-1'>Seaborn Rewards</p>
                            <p className='mb-1'>Service Discounts</p>
                            <div className="mb-1">Refer a Friend</div>
                            <div className="mb-1">E-Gift Cards</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;