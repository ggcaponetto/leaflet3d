import * as ll from 'loglevel';
import {version} from "../package.json";

ll.setLevel(ll.levels.DEBUG);
ll.debug("Imported the leaflet-3D plugin");

class Plugin{
    constructor(props) {

    }
    getVersion = function (){
        return version;
    }
}

// attach your plugin to the global 'L' variable
if (typeof window !== 'undefined' && window.L) {
    if(document.readyState === "complete"){
        ll.debug("Initialized the leaflet-3D plugin");
        window.L.leaflet3d = new Plugin();
    } else {
        window.addEventListener("load", () => {
            ll.debug("Initialized the leaflet-3D plugin");
            window.L.leaflet3d = new Plugin();
        })
    }
}