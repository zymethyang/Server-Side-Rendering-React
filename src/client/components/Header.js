import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as act from '../actions/index';
import moment from 'moment';
import * as functions from './header/functions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showtab: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        setTimeout(() => {
            this.props.search_dispatch(this.state.value);
            if (this.state.value === '') {
                this.setState({
                    showtab: false
                })
            } else {
                this.setState({
                    showtab: true
                })
            }
        })

    }

    render() {
        var { search } = this.props;
        return (
            <div>
                <nav style={{ backgroundColor: '#810879' }}>
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col l2">
                                <Link to='/'>
                                    <span style={{ fontSize: 40 }}>Etube</span>
                                </Link>
                            </div>
                            <div className="col l6">
                                <input value={this.state.value} onChange={this.handleChange} type="text" style={{ color: 'white', fontWeight: 'bold' }} />
                            </div>
                            <div className="col l1">
                                <i className="fas fa-search" style={{ fontSize: 40 }}></i>
                            </div>
                        </div>
                    </div>
                </nav>
                {this.renderSearchBar(search)}
            </div>
        );
    }

    renderSearchBar(search) {
        return (
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col l12">
                    {this.state.showtab === true ? this.renderSmallTab(search) : <div></div>}
                </div>
            </div>
        );
    }

    renderSmallTab(search) {
        var result = null;
        result = search.map((value, index) => {
            return (
                <div className="col l6" key={index}>
                    <a href={`/view/${functions.xoa_dau(value.snippet.title)}/${value.id.videoId}`} style={{ color: 'inherit' }}>
                        <div className="row" onClick={() => this.clickVideo()}>
                            <div className="col l6">
                                <figure className="sixteen-nine-img">
                                    <img src={value.snippet.thumbnails.medium.url} style={{ width: '100%', height: '23%' }} />
                                </figure>
                            </div>
                            <div className="col l6" style={{ marginTop: 10 }}>
                                <div className="row" style={{ fontSize: 14, fontWeight: 'bold', alignItems: 'center', textAlign: 'justify' }}>
                                    {value.snippet.title.toUpperCase()}
                                </div>
                                <div className="row" style={{ fontSize: 14, fontWeight: 'bold', marginTop: -20 }}>{value.snippet.channelTitle}</div>
                                <div className="row" style={{ fontSize: 14, marginTop: -20 }}>{`Ngày xuất bản`}</div>
                                <div className="row" style={{ fontSize: 14, marginTop: -20 }}>{`${moment(value.snippet.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}`}</div>
                            </div>
                        </div>
                    </a>
                </div>
            );
        })
        return result;
    }

    clickVideo() {
        this.setState({
            showtab: false
        })
    }
}

const mapStateToProps = state => {
    return {
        search: state.search
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        search_dispatch: (key) => {
            dispatch(act.get_search(key));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);