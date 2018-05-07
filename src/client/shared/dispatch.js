import { get_related_video, get_player } from '../actions/index';

export const related_video = (store, id) => {
    return store.dispatch(get_related_video(id));
}

export const player = (store, id) => {
    return store.dispatch(get_player(id));
}