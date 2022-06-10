import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../supports/constants/apiUrl'
import Slider from "react-slick";
import ClipLoader from 'react-spinners/ClipLoader'

import '../supports/SbStyle.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import adsOne from '../supports/images/example-one.jpg'
import adsTwo from '../supports/images/example-two.jpg'
import adsThr from '../supports/images/example-three.jpg'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data : null
        }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.prodNext = this.prodNext.bind(this)
        this.prodPrev = this.prodPrev.bind(this)
    }

    componentDidMount () {
        this.getProductSale()
    }

    getProductSale = () => {
        axios.get(apiUrl + 'products')
        .then ((res) => {
            this.setState({data : res.data})
        })
        .catch ((err) => {
            console.log(err)
        })
    }

    renderDataToJsx = () => {
        return (
            this.state.data.map((val, index) => {
                if (val.discount) {
                    return (
                        <div key={index}>
                            <div className='card border-0 mx-auto mb-5' style={{width:'291.8px'}}>
                                <div className='pt-3 ps-3 pe-3'>
                                    <Link to='/'>
                                        <img src={val.image_1} alt="prooduct" className='card-img-top' />
                                    </Link>
                                </div>
                                <div className='px-3 pt-2'>
                                    <Link to='/' className="sb-link">
                                        <h3 className='fw-bold text-dark mt-2' style={{fontSize:'16px'}}>{val.name}</h3>
                                    </Link>
                                    <div className='mt-1'>
                                        {
                                            this.state.data ?
                                            <div>
                                                <span className='fw-bold' style={{fontSize:'15px'}}>
                                                    ${(val.price - (val.price * (val.discount/100))).toString().slice(0,5)}
                                                </span>
                                                <span className='fw-bold text-decoration-line-through text-info ms-2' style={{fontSize:'15px'}}>${val.price}</span>
                                            </div>
                                            :
                                            <span className='fw-bold' style={{fontSize:'15px'}}>${val.price}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        )
    }

    next = () => {
        this.slider.slickNext()
    }

    previous = () => {
        this.slider.slickPrev()
    }

    prodNext = () => {
        this.prodSlider.slickNext()
    }

    prodPrev = () => {
        this.prodSlider.slickPrev()
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            centerPadding: "60px",
        }
        const prodSettings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            centerPadding: "60px",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    }
                }
            ]
        }
        
        if (this.state.data === null) {
            return (
                <div className='d-flex align-items-center justify-content-center' style={{height : '100vh'}}>
                    <ClipLoader size={50} color={"#000000"} />
                </div>
            )
        }
        
        return (
            <div className='container'>
                {/* BANNER */}
                <div className='sb-banner text-white p-5 mt-3 mb-5'>
                    <div className='row align-items-center h-100'>
                        <div className='col-lg-4'>
                            <h4 className='sb-f12 mb-5'>The New Explorers</h4>
                            <h1 className='mb-3'>SUMMER '22 COLLECTIONS</h1>
                            <p className='mb-5'>Designed for comfort and days with no obligations.</p>
                        </div>
                    </div>
                </div>
                
                {/* ADS SECTION */}
                <div className='mb-5'>
                    <div className='d-block d-lg-none'>
                        <div className='row mb-4'>
                            <div className='col-6'>
                                <span className='sb-futura-medium-con fw-bold text-uppercase' style={{fontSize:'32px'}}>FEATURED</span>
                            </div>
                            <div className='col-6 d-flex align-items-center justify-content-end'>
                                <span className='ps-3' style={{cursor:'pointer'}} onClick={this.previous}>
                                    <ArrowBackIosNewIcon sx={{fontSize : 24}} />
                                </span>
                                <span className='ps-3' style={{cursor:'pointer'}} onClick={this.next}>
                                    <ArrowForwardIosIcon sx={{fontSize : 24}} />
                                </span>
                            </div>
                        </div>

                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div>
                                <img src={adsOne} alt="ads" className='img-fluid' />
                                <div className='pt-4'>
                                    <span className='d-block sb-f20 fw-bold text-uppercase'>WOMEN'S TOP</span>
                                    <span className='d-block'>Our latest selecion of knits and woven tops to suit any style</span>
                                </div>
                            </div>

                            <div>
                                <img src={adsTwo} alt="ads" className='img-fluid' />
                                <div className='pt-4'>
                                    <span className='d-block sb-f20 fw-bold text-uppercase'>MEN'S WOVEN</span>
                                    <span className='d-block'>Vintage-inspired, breathable fabrics, and classic silhouettes</span>
                                </div>
                            </div>

                            <div>
                                <img src={adsThr} alt="ads" className='img-fluid' />
                                <div className='pt-4'>
                                    <span className='d-block sb-f20 fw-bold text-uppercase'>HEADWEAR</span>
                                    <span className='d-block'>Under the brim</span>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className='d-none d-lg-block'>
                        <div className='sb-futura-medium-con fw-bold text-uppercase mb-4' style={{fontSize:'32px'}}>FEATURED</div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <img src={adsOne} alt="ads" className='img-fluid' />
                                <div className='pt-4'>
                                    <span className='d-block sb-f20 fw-bold text-uppercase'>WOMEN'S TOP</span>
                                    <span className='d-block'>Our latest selecion of knits and woven tops to suit any style</span>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <img src={adsTwo} alt="ads" className='img-fluid' />
                                <div className='pt-4'>
                                    <span className='d-block sb-f20 fw-bold text-uppercase'>MEN'S WOVEN</span>
                                    <span className='d-block'>Vintage-inspired, breathable fabrics, and classic silhouettes</span>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <img src={adsThr} alt="ads" className='img-fluid' />
                                <div className='pt-4'>
                                    <span className='d-block sb-f20 fw-bold text-uppercase'>HEADWEAR</span>
                                    <span className='d-block'>Under the brim</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SALE PRODUCT */}
                <div>
                    <div className='row mb-4'>
                        <div className='col-6'>
                            <span className='sb-futura-medium-con fw-bold text-uppercase' style={{fontSize:'32px'}}>CLEARANCE</span>
                        </div>
                        <div className='col-6 d-flex align-items-center justify-content-end'>
                            <span className='ps-3' style={{cursor:'pointer'}} onClick={this.prodPrev}>
                                <ArrowBackIosNewIcon sx={{fontSize : 20}} />
                            </span>
                            <span className='ps-3' style={{cursor:'pointer'}} onClick={this.prodNext}>
                                <ArrowForwardIosIcon sx={{fontSize : 20}} />
                            </span>
                        </div>
                    </div>
                    
                    {
                        this.state.data === null ?
                        null
                        :
                        <Slider ref={c => (this.prodSlider = c)} {...prodSettings}>
                            {this.renderDataToJsx()}
                        </Slider>
                    }
                </div>

                {/* BANNER */}
                <div className='sb-banner-bottom'></div>
            </div>
        );
    }
}

export default Home;