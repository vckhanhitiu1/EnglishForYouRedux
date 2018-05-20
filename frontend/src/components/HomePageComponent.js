import React, { Component } from 'react';
import '../styles/scss/HomePageStyle.css';

class HomePageComponent extends Component{

    render(){
        return(
            <div className="home-page-container">
                <div id="carouselExampleIndicators" className="carousel slide slide-wrapper" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block img-slider" src={require('../resources/ielts-main.png')} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-slider" src={require('../resources/ielts-exam.jpeg')} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-slider" src={require('../resources/ielts-picture.png')} alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
                <div className="information-wrapper row">
                    <div className="news-wrapper col-8">
                        <div className="row news-section">
                            <img className="col-4 img-content" src={require('../resources/ielts-main.png')}/>
                            <div className="col-8">
                                <p className="news-title">What do you know about IELTS?</p>
                                <div className="news-content">The International English Language Testing System (IELTS) measures 
                                                                the language proficiency of people who want to study or work 
                                                                where English is used as a language of communication
                                </div>
                            </div>
                        </div>
                        <div className="row news-section">
                            <img className="col-4 img-content" src={require('../resources/ielts-main.png')}/>
                            <div className="col-8">
                                <p className="news-title">What do you know about IELTS?</p>
                                <div className="news-content">The International English Language Testing System (IELTS) measures 
                                                                the language proficiency of people who want to study or work 
                                                                where English is used as a language of communication
                                </div>
                            </div>
                        </div>
                        <div className="row news-section">
                            <img className="col-4 img-content" src={require('../resources/ielts-main.png')}/>
                            <div className="col-8">
                                <p className="news-title">What do you know about IELTS?</p>
                                <div className="news-content">The International English Language Testing System (IELTS) measures 
                                                                the language proficiency of people who want to study or work 
                                                                where English is used as a language of communication
                                </div>
                            </div>
                        </div>
                        <div className="row news-section">
                            <img className="col-4 img-content" src={require('../resources/ielts-main.png')}/>
                            <div className="col-8">
                                <p className="news-title">What do you know about IELTS?</p>
                                <div className="news-content">The International English Language Testing System (IELTS) measures 
                                                                the language proficiency of people who want to study or work 
                                                                where English is used as a language of communication
                                </div>
                            </div>
                        </div>
                        <div className="row news-section">
                            <img className="col-4 img-content" src={require('../resources/ielts-main.png')}/>
                            <div className="col-8">
                                <p className="news-title">What do you know about IELTS?</p>
                                <div className="news-content">The International English Language Testing System (IELTS) measures 
                                                                the language proficiency of people who want to study or work 
                                                                where English is used as a language of communication
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-wrapper col-4">
                        <div className="teacher-wrapper col-12">
                            <div className="top-teacher">
                                <div className="board-title">
                                    Teachers Of The Month
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">Name</div>
                                    <div className="teacher-rate col-4">
                                        Rating
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">1. Scarlet Witch</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">2. Black Panther</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">3. Doctor Strange</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">4. Black Widow</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">5. Hulk</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-wrapper col-12">
                            <div className="top-teacher">
                                <div className="board-title">
                                    Teachers Of The Month
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">Name</div>
                                    <div className="teacher-rate col-4">
                                        Rating
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">1. Scarlet Witch</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">2. Black Panther</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">3. Doctor Strange</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">4. Black Widow</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                                <div className="board-content row">
                                    <div className="teacher-name col-8">5. Hulk</div>
                                    <div className="teacher-rate col-4">
                                        5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default HomePageComponent