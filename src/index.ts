import { Widget } from "@maticnetwork/wallet-widget";

const widget = new Widget({
    appName: "test",
    autoShowTime: 0,
    position: "center",
    target: '#widget',
    network: "mainnet"
})

widget.create();

