import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_player, get_related_video } from '../actions/index';
import View from '../components/view';
import { Helmet } from "react-helmet";

class ViewPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.props.player ? this.props.player.title : "Đang tải dữ liệu"}</title>
                    <meta property="og:title" content={this.props.player ? this.props.player.title : "Đang tải dữ liệu"} />
                    <meta property="og:description" content={this.props.player ? this.props.player.description : "Đang tải dữ liệu"} />
                    <meta property="og:keywords" content={this.props.player ? this.props.player.tags : "Đang tải dữ liệu"} />
                </Helmet>
                <View></View>
            </div>
        );
    }

    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        window.cfg = {
            file: `https://www.youtube.com/watch?v=${id}`,
            width: '100%',
            height: '100%'
        };
        window.jwplayer("frame").setup(window.cfg);
    }
}


const mapStateToProps = state => {
    return {
        player: state.player,
        related: state.related
    }
}

export default {
    component: connect(mapStateToProps, null)(ViewPage)
}