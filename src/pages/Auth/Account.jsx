import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import '../../supports/SbStyle.css'

class Account extends Component {
    render() {
        return (
            <div className='container my-4'>
                <div className='col-6 mx-auto mb-5'>
                    <div className='p-5 mx-5'>
                        <div className='text-center mb-4'>
                            <h5 className='text-uppercase'>SEABORN101 ACCOUNT</h5>
                            <p className='mb-0'>Manage your orders and shipping details with your account</p>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='me-4'>
                            <NavLink to='login' className={(navData) => (navData.isActive ? 'sb-tab-link active' : 'sb-tab-link')}>
                                Sign in
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='register' className={(navData) => (navData.isActive ? 'sb-tab-link active' : 'sb-tab-link')}>
                                Register
                            </NavLink>
                        </div>
                    </div>

                    <Outlet />
                </div>

                <Row className='text-center' style={{padding : '90px 0 48px 0'}}>
                    <Col sm="12" md="4">
                        <span className='d-block'>Free Shipping over $99</span>
                        <span className='d-block'>Spend $99 or more and shipping is on us.</span>
                    </Col>
                    <Col sm="12" md="4">
                        <span className='d-block'>Sustainability Focused</span>
                        <span className='d-block'>We have dedicated ourselves to being better.</span>
                    </Col>
                    <Col sm="12" md="4">
                        <span className='d-block'>Since 2004</span>
                        <span className='d-block'>It started with a hat, out of a garage in Oceanside, CA.</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Account;