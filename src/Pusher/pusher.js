import Pusher from "pusher-js";
export default class PusherClass {
    constructor(id) {
        Pusher.logToConsole = true;
        this.pusher = new Pusher('d9dd3c3a08130468f253', {
            cluster: 'eu'
        });
        this.channel = this.pusher.subscribe('my-channel-'+id);
        this.channel.bind('my-event', function (data) {
            alert(JSON.stringify(data));
        })
    }

    static getInstance(id){
        if(PusherClass.instance == null){
            PusherClass.instance = new PusherClass(id);
            return PusherClass.instance;
        }
        return PusherClass.instance;
    }
}
