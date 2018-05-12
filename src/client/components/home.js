import React, { Component } from 'react';
import * as constants from '../constants/data';
import * as functions from './home/functions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as act from '../actions/index';
import Slider from 'react-slick';

class Home extends Component {

    render() {
        var { trending, music, movie, game, sport } = this.props;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerPadding: '0px',
        };
        return (
            <div className="row">
                <div style={styles.wrap}>
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Phổ biến nhất
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            <div className="col l12">
                                <div className="row">
                                    <Slider {...settings}>
                                        {trending.length > 0 ? this.renderData(trending) : <div></div>}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Âm Nhạc
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            <Slider {...settings}>
                                {music.length > 0 ? this.renderData(music) : <div></div>}
                            </Slider>
                        </div>
                    </div>

                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Phim
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            <Slider {...settings}>
                                {movie.length > 0 ? this.renderData(movie) : <div></div>}
                            </Slider>
                        </div>
                    </div>

                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Thể thao
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            <Slider {...settings}>
                                {sport.length > 0 ? this.renderData(sport) : <div></div>}
                            </Slider>
                        </div>
                    </div>

                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Trò chơi
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            <Slider {...settings}>
                                {game.length > 0 ? this.renderData(game) : <div></div>}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderData(data) {
        var result = null;
        result = data.map((value, index) => {
            return (
                <div className="col l2" key={index} style={{ marginTop: 30 }}>
                    <a href={`/view/${functions.xoa_dau(value.title)}/${value.source.substring(value.source.length - 11, value.source.length)}`} style={{ color: 'inherit' }}>
                        <img src={value.thumb} style={{ width: 300, height: 169, backgroundSize: 'cover' }} />
                        <span className="row" style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'justify', marginLeft: 1 }}>
                            {value.title}
                        </span>
                        {/*
                        <span className="row" style={{ fontSize: 14 }}>
                            {value.title > 18 ? `${value.title.substring(0, 18)}...` : value.title}
                        </span>
                        */}
                        <span className="row" style={{ fontSize: 14 }}>
                            {/*this.showViewCount(value.views)*/}
                        </span>
                    </a>
                </div>
            );
        });
        return result;
    }

    showViewCount(data) {
        if ((data / 1000) > 0 && (data / 1000) < 1000) {
            return `${(data / 1000).toFixed(1)} Nghìn views`;
        } else if ((data / 1000000) > 0 && (data / 1000000) < 1000) {
            return `${(data / 1000000).toFixed(1)} Triệu views`;
        }
    }
}

const mapStateToProps = state => {
    return {
        newest: state.newest,
        trending: state.trending,
        music: state.music,
        movie: state.movie,
        game: state.game,
        sport: state.sport
    }
}

const styles = {
    wrap: {
        marginLeft: 30,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 30
    }
}


export default connect(mapStateToProps, null)(Home);