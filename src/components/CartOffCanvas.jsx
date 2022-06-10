import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Offcanvas, OffcanvasBody } from 'reactstrap';

import '../supports/SbStyle.css'

class CartOffCanvas extends Component {
    render() {
        return (
            <Offcanvas
                toggle={this.props.cartToggle}
                isOpen={this.props.cartIsOpen}
                direction='end'
                className='sb-cart-offcanvas'
            >
                <OffcanvasBody className='p-0'>
                    <div style={{padding : '30px 15px 0'}} className='mb-3'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Link to='/' className='sb-futura-medium-con sb-f20 sb-link-dark text-uupercase' style={{letterSpacing : '1px'}}>
                                VIEW CART
                            </Link>

                            <Button close size='lg' className='sb-btn-rm-shadow' onClick={this.props.cartIsClose} />
                        </div>
                        <span className='fw-bold'>You are $99 away from free shipping</span>
                    </div>

                    <div className='sb-cart-line'></div>
                    
                    <div className='d-flex flex-grow-1 h-75' style={{minHeight : '0'}}>
                        <div className='d-flex flex-column align-items-center justify-content-center text-center w-100'>
                            <h6 className='sb-futura-medium-con sb-f28 text-uppercase mb-5'>YOUR CART EMPTY</h6>
                            <Link to='/' className='btn sb-btn-dark-outline sb-btn-rm-shadow mb-3'>
                                <span className='d-flex align-items-center justify-content-center text-center h-100'>Shop Men</span>
                            </Link>
                            <Link to='/' className='btn sb-btn-outline-dark sb-btn-rm-shadow'>
                                <span className='d-flex align-items-center justify-content-center text-center h-100'>
                                    Shop Women
                                </span>
                            </Link>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        );
    }
}

export default CartOffCanvas;