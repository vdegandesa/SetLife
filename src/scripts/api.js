import React from 'react';
import {API_ROOT} from '../constants';

export default {
    get(route, query) {
        return (
            fetch(API_ROOT + route, {
                method: 'GET',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(query)
            })
            .then(res => {
                console.log(res);
                res.json();
            })
            .catch(err => console.error(err))
        )
    },
    post(route, data) {
        console.log(API_ROOT + route);
        console.log(data);

        return (
            fetch(API_ROOT + route, {
                method: 'POST',
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => console.error(err))
        )
    },
    graph(graphData) {
        console.log(graphData);

        return (
            fetch(API_ROOT + 'graph', {
                method: 'POST',
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(graphData),
                credentials: 'include'
            })
            .then(res => res.json())
            .then(payload => {
                console.log(payload.data);
                if (payload && payload.errors) {
                    throw payload.errors; 
                }
                else if (payload && payload.data && payload.data != null) {
                    return payload.data;
                } else {
                    throw 'network error';
                }
            })
            .catch(err => console.error(err))
        )
    },
    getExt(route, headers, query) {
        console.log(route);

        return (
            fetch(route, {
                method: 'GET',
                crossDomain: true,
                headers: headers
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => console.error(err))
        )
    },
    postExt(route, headers, data) {
        console.log(route);
        console.log(headers);
        console.log(data);

        return (
            fetch(route, {
                method: 'POST',
                headers: {
                    'X-TB-PARTNER-AUTH': '45562752:17aafc6898ff78b0285c9bcd2546406b6b7d87c9',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: data
            })
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => console.error(err))
        )
    }
}