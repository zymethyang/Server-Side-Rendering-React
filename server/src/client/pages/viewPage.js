import React, { Component } from 'react';
//import View from '../components/view';
import { connect } from 'react-redux';
import { get_player, get_related_video } from '../actions/index';
import View from '../components/view';

class ViewPage extends Component {
    render() {
        return (
            <View></View>
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


function player(store, id) {
    return store.dispatch(get_player(id));
}

function related_video(store, id) {
    return store.dispatch(get_related_video(id));
}

const mapStateToProps = state => {
    return {
        player: state.player,
        related: state.related
    }
}

export default {
    player,
    related_video,
    component: connect(mapStateToProps, { get_player, get_related_video })(ViewPage)
}