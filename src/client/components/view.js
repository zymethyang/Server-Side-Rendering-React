import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import * as data from '../constants/data';
import * as functions from './view/functions';

class View extends Component {

    render() {
        var { related } = this.props;
        return (
            <div className="row">
                <div style={styles.wrap}>
                    <div className="row">
                        <div className="col l8 s12">
                            <div className="row">
                                <div id="frame"></div>
                            </div>
                            <div className="row" style={{ fontSize: 20 }}>
                                {this.props.player ? this.props.player.title : 'Đang tải dữ liệu'}
                            </div>
                            {/*
                            <div className="row">
                                <div className="col l8" style={{ marginTop: 5, marginLeft: -10 }}>
                                    <label style={{ fontSize: 18 }}>{this.props.player ? this.props.player.views : 'Đang tải dữ liệu'} views</label>
                                </div>
                                <div className="col l4" style={{ float: 'right' }}>
                                    <div className="row">
                                        <div className="col l4" style={{ marginTop: 10 }}>
                                            <div className="row" style={{ fontSize: 20 }}>
                                                <i className="far fa-heart"></i> {this.props.player ? this.props.player.liked : 'Đang tải dữ liệu'}
                                            </div>
                                        </div>
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="far fa-thumbs-down"></i> {this.props.player ? this.props.player.disliked : 'Đang tải dữ liệu'}
                                            </span>
                                        </span>
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="fa fa-share"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
*/}
                            <div className="row" style={{ marginTop: 20 }}>
                                {/*
                                <div className="col l1" style={{ marginLeft: -10 }}>
                                    <img src={"https://yt3.ggpht.com/a-/AJLlDp11sfCbcpalOfPFl761ncZF3qpZSabYXtXjag=s88-mo-c-c0xffffffff-rj-k-no"} style={{ width: '100%', height: 50, borderRadius: 60 }} />
                                </div>
                                */}
                                <div className="col l8">
                                    <div className="row" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                        {this.props.player ? 'Chưa cập nhật' : 'Đang tải dữ liệu'}
                                    </div>
                                    <div className="row">
                                        <label style={{ fontSize: 14 }}>
                                            {this.props.player ? 'Chưa cập nhật' : 'Đang tải dữ liệu'}
                                        </label>
                                    </div>
                                    <div className="row" style={{ marginTop: 20, textAlign: 'justify' }}>
                                        {this.props.player ? this.props.player.description : 'Đang tải dữ liệu'}
                                    </div>
                                </div>
                                {/*
                                <div className="col l3">
                                    <a className="waves-effect waves-light btn">Subcribe</a>
                                </div>
                                */}
                            </div>
                        </div>
                        <div className="col l4 s12">
                            {related.length > 0 ? this.renderRelated(related) : <div></div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderRelated(data) {
        let result = null;
        result = data.map((value, index) => {
            return (
                <div className="row" key={index}>
                    <Link to={`/view/${functions.xoa_dau(value.snippet.title)}/${value.id.videoId}`} style={{ color: 'inherit' }}>
                        <div className="col l6 s12">
                            <img src={`https://i.ytimg.com/vi/${value.id.videoId}/mqdefault.jpg`} style={{ width: '100%', height: 120 }} />
                        </div>
                        <div className="col l6 s12">
                            <div className="row" style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'justify' }}>{value.snippet.title}</div>
                            {/*
                            <span className="row" style={{ fontSize: 13 }}>{value.snippet.channelTitle}</span>
                            <span className="row" style={{ fontSize: 13 }}>{value.items[0].statistics.viewCount} Views</span>
                                */}
                        </div>
                    </Link>
                </div >
            );
        })
        return result;
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

const mapStateToProps = state => {
    return {
        player: state.player,
        related: state.related
    }
}



export default connect(mapStateToProps, null)(View);