const queryFormConfig = {

   "lhtac:web2014all_mv": {
        searchUrl: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
        showDetailsPanel: false,
        useMapProjection: false,
        withContainer: false,
        spatialMethodOptions: [
            {id: "ZONE", name: "queryform.spatialfilter.methods.zone"}
        ],
        spatialOperations: [
            {id: "INTERSECTS", name: "queryform.spatialfilter.operations.intersects"}
        ],
        spatialField: {
            method: "ZONE",
            attribute: "geom3857",
            operation: "INTERSECTS",
            geometry: null,
            zoneFields: [
            {
                id: 3,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:itd_districts",
                values: [],
                value: null,
                valueField: "properties.ITD_Dist_n",
                textField: "properties.DistNum",
                searchText: "*",
                searchMethod: "ilike",
                searchAttribute: "DistNum",
                label: "ITD District",
                multivalue: true,
                disabled: false,
                sort: {
                    sortBy: "ITD_Dist_n",
                    sortOrder: "ASC"
                },
                exclude: [4, 5, 6]
            }, {
                id: 4,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:county",
                values: [],
                value: null,
                valueField: "properties.short_name",
                textField: "properties.short_name",
                searchText: "*",
                searchMethod: "ilike",
                searchAttribute: "short_name",
                label: "County",
                multivalue: true,
                disabled: false,
                sort: {
                    sortBy: "short_name",
                    sortOrder: "ASC"
                },
                groupBy: "itd_distri",
                exclude: [3, 5, 6]
            }, {
                id: 5,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:city",
                values: [],
                value: null,
                valueField: "properties.short_name",
                textField: "properties.short_name",
                searchText: "*",
                searchMethod: "ilike",
                searchAttribute: "short_name",
                label: "City",
                multivalue: true,
                disabled: false,
                sort: {
                    sortBy: "short_name",
                    sortOrder: "ASC"
                },
                exclude: [3, 4, 6],
                groupBy: "county"
            },
            {
                id: 6,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:jurisdictions2014",
                label: "Road Jurisdiction",
                values: [],
                value: null,
                valueField: "properties.name2",
                textField: "properties.name2",
                searchText: "HD",
                searchMethod: "ilike",
                searchAttribute: "juris_type",
                disabled: false,
                multivalue: true,
                groupBy: "county",
                sort: {
                    sortBy: "name2",
                    sortOrder: "ASC"
                },
                exclude: [3, 4, 5]
            }]
        }
    },
    "lhtac:bridge2014all_mv": {
        searchUrl: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
        showDetailsPanel: false,
        useMapProjection: false,
        withContainer: false,
        spatialMethodOptions: [
            {id: "ZONE", name: "queryform.spatialfilter.methods.zone"}
        ],
        spatialOperations: [
            {id: "INTERSECTS", name: "queryform.spatialfilter.operations.intersects"}
        ],
        spatialField: {
            method: "ZONE",
            attribute: "the_geom",
            operation: "INTERSECTS",
            geometry: null,
            zoneFields: [
            {
                id: 3,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:itd_districts",
                values: [],
                value: null,
                valueField: "properties.ITD_Dist_n",
                textField: "properties.DistNum",
                searchText: "*",
                searchMethod: "ilike",
                searchAttribute: "DistNum",
                label: "ITD District",
                multivalue: true,
                disabled: false,
                sort: {
                    sortBy: "ITD_Dist_n",
                    sortOrder: "ASC"
                },
                exclude: [4, 5, 6]
            }, {
                id: 4,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:county",
                values: [],
                value: null,
                valueField: "properties.short_name",
                textField: "properties.short_name",
                searchText: "*",
                searchMethod: "ilike",
                searchAttribute: "short_name",
                label: "County",
                multivalue: true,
                disabled: false,
                sort: {
                    sortBy: "short_name",
                    sortOrder: "ASC"
                },
                groupBy: "itd_distri",
                exclude: [3, 5, 6]
            }, {
                id: 5,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:city",
                values: [],
                value: null,
                valueField: "properties.short_name",
                textField: "properties.short_name",
                searchText: "*",
                searchMethod: "ilike",
                searchAttribute: "short_name",
                label: "City",
                multivalue: true,
                disabled: false,
                sort: {
                    sortBy: "short_name",
                    sortOrder: "ASC"
                },
                exclude: [3, 4, 6],
                groupBy: "county"
            },
            {
                id: 6,
                url: "http://demo.geo-solutions.it/geoserver/ows?service=WFS&outputFormat=application/json",
                typeName: "lhtac:jurisdictions2014",
                label: "Road Jurisdiction",
                values: [],
                value: null,
                valueField: "properties.name2",
                textField: "properties.name2",
                searchText: "HD",
                searchMethod: "ilike",
                searchAttribute: "juris_type",
                disabled: false,
                multivalue: true,
                groupBy: "county",
                sort: {
                    sortBy: "name2",
                    sortOrder: "ASC"
                },
                exclude: [3, 4, 5]
            }]
        }
    }
};

module.exports = queryFormConfig;
