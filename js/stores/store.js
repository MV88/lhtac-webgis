/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const DebugUtils = require('../../MapStore2/web/client/utils/DebugUtils');
const PluginsUtils = require('../../MapStore2/web/client/utils/PluginsUtils');
const {combineReducers} = require('redux');
const onStateChange = require('redux-on-state-change').default;
// import onStateChange from 'redux-on-state-change';
const {mapConfigHistory, createHistory} = require('../../MapStore2/web/client/utils/MapHistoryUtils');
const {intersection} = require('lodash');
const mapConfig = require('../../MapStore2/web/client/reducers/config');
const layers = require('../reducers/layers');
const map = mapConfigHistory(require('../../MapStore2/web/client/reducers/map'));
const {resizeHeight} = require('../actions/areafilter');
const {updateHighlighted} = require('../../MapStore2/web/client/actions/highlight');
const LayersUtils = require('../../MapStore2/web/client/utils/LayersUtils');

const myFunc = (prevState, nextState, action, dispatch) => {
    if ((prevState.featureselector.features.length > 0) && (nextState.featureselector.features.length === 0)) {
        dispatch(resizeHeight("100%"));
    }
    if ((prevState.featureselector.features.length === 0) && (nextState.featureselector.features.length > 0)) {
        dispatch(resizeHeight("80%"));
    }
    if ( prevState.featureselector.features !== nextState.featureselector.features ) {
        let newFeatures = nextState.featureselector.features.map(f => {return f.id; });
        let oldHighlightedFeatures = prevState.highlight.features;
        let newHighligthed = intersection(oldHighlightedFeatures, newFeatures );
        dispatch(updateHighlighted(newHighligthed, "update"));
    }

};

module.exports = (plugins) => {
    const pluginsReducers = PluginsUtils.getReducers(plugins);

    const allReducers = combineReducers({
        browser: require('../../MapStore2/web/client/reducers/browser'),
        locale: require('../../MapStore2/web/client/reducers/locale'),
        map: () => {return null; },
        layers: () => {return null; },
        controls: require('../../MapStore2/web/client/reducers/controls'),
        help: require('../../MapStore2/web/client/reducers/help'),
        mapInitialConfig: () => {return null; },
        queryform: require('../reducers/queryform'),
        ...pluginsReducers,
        draw: require('../reducers/draw'),
        highlight: require('../reducers/highlight'),
        stats: require('../reducers/stats')
    });

    const rootReducer = (state = null, action) => {
        let mapState = createHistory(LayersUtils.splitMapAndLayers(mapConfig(state, action)));

        let mapLayers = mapState ? layers(mapState.layers, action) : null;

        let newState = {
            ...allReducers(state, action),
            map: mapState && mapState.map ? map(mapState.map, action) : null,
            layers: mapLayers,
            mapInitialConfig: mapState ? mapState.mapInitialConfig : null
        };

        return newState;
    };


    return DebugUtils.createDebugStore(rootReducer, {
        controls: {
            toolbar: {
                expanded: false
            },
            drawer: {
                enabled: false,
                menu: "1"
            }
        },
        mousePosition: {enabled: false, crs: "EPSG:4326"}
    }, [onStateChange(myFunc)]);
};
