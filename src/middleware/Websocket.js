export const API_URL = 'ws://f.fusion-mng.xyz/hws';

export default class Websocket {

    constructor({url, store}) {
        this.store = store;
        this.msgPropertyListenersMap = {};
        this.running = false;
    }

    _onopen(event) {
        if (this.onopen) {
            this.onopen(event);
        }
    }

    _onclose(event) {
        if (this.running) {
            setTimeout(this.start, 10000);
        }

        if (this.onclose) {
            this.onclose(event);
        }
    }

    _onmessage(event) {
        console.log(`recv ${event.data}`);

        if (this.onmessage) {
            this.onmessage(event);
        }

        const msg = JSON.parse(event.data);

        const property = Object.keys(msg)[0];

        const listeners = this.msgPropertyListenersMap[property];

        if (!listeners || listeners.length === 0) {
            console.log("listener for " + property + " not found");
            return;
        }

        this.msgPropertyListenersMap[property].forEach(listener => {
            listener(msg[property]);
        });

    }

    addMsgEventListener(property, listener) {
        if (!this.msgPropertyListenersMap.hasOwnProperty(property)) {
            this.msgPropertyListenersMap[property] = [];
        }

        const id = this.msgPropertyListenersMap[property].push(listener);


        return () => this.removeMsgEventListener(
            property, id
        );


    }

    removeMsgEventListener(property, id) {
        delete this.msgPropertyListenersMap[property][id];
    }

    start(onopen, onclose, onmessage) {

        this.onopen = onopen;
        this.onclose = onclose;
        this.onmessage = onmessage;

        this.websocket = new WebSocket(API_URL);

        this.websocket.onopen = evt => this._onopen(evt);
        this.websocket.onclose = evt => this._onclose(evt);
        this.websocket.onmessage = evt => this._onmessage(evt);

        this.running = true;

        this.addMsgEventListener('productTree', tree => {
            this.store.dispatch({
                type: 'PRODUCT_TREE',
                tree: tree
            })
        });

        this.addMsgEventListener('measures', measures => {
            this.store.dispatch({
                type: 'MEASURES',
                measures: measures
            })
        })

    }

    stop() {
        this.running = false;
        this.websocket.close();
    }

    send(obj) {
        const msg = JSON.stringify(obj);
        console.log(`send: ${msg}`);
        this.websocket.send(msg);
    }

}