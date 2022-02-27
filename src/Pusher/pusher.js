import Pusher from "pusher-js";
export default class PusherClass {
    constructor() {
        Pusher.logToConsole=true;
        this.pusher = new Pusher('d9dd3c3a08130468f253', {
            cluster: 'eu'
        });
        this.channel = this.pusher.subscribe('my-channel');
        this.channel.bind('my-event', function (data) {
            alert(JSON.stringify(data));
        })
    }
}