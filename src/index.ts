import { Widget } from "@maticnetwork/wallet-widget";
import "flexstyle";
let savedNetwork = localStorage.getItem("network");
savedNetwork = savedNetwork ? savedNetwork as any : "mainnet"
const el = document.querySelector('#selectNetwork') as HTMLSelectElement;
el.addEventListener("change", (e) => {
    localStorage.setItem("network", (e.target as any).value);
    location.reload();
})
el.value = savedNetwork;
const widget = new Widget({
    appName: "test",
    autoShowTime: 1,
    position: "bottom-right",
    target: '#widget',
    network: savedNetwork as any
})

widget.create();

