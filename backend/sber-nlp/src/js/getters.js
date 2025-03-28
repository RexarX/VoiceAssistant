function get_request(context) {
    if (context && context.request)
        return context.request.rawRequest;
    return {}
}

function get_server_action(request){
    if (request &&
        request.payload && 
        request.payload.data &&
        request.payload.data.server_action) {
            return request.payload.data.server_action;
        }
    return {};
}

function get_game_state(request){
    if (request &&
        request.payload &&
        request.payload.meta &&
        request.payload.meta.current_app &&
        request.payload.meta.current_app.state &&
        request.payload.meta.current_app.state.game_state) {
        return request.payload.meta.current_app.state.game_state;
    }
    return {};
}

function get_items(request){
    if (request &&
        request.payload &&
        request.payload.meta &&
        request.payload.meta.current_app &&
        request.payload.meta.current_app.state &&
        request.payload.meta.current_app.state.item_selector) {
        return request.payload.meta.current_app.state.item_selector.items;
    }
    return [];
}

function get_ignored_words(request){
    if (request &&
        request.payload &&
        request.payload.meta &&
        request.payload.meta.current_app &&
        request.payload.meta.current_app.state &&
        request.payload.meta.current_app.state.item_selector) {
        return request.payload.meta.current_app.state.item_selector.ignored_words || [];
    }
    return [];
}

function is_game_over(request){
    var gameState = get_game_state(request);
    return gameState.gameOver === true;
}