import fs from "fs";
import { JSDOM } from "jsdom";
import type D3 from 'd3';

export function getFromVDOM(): typeof D3 {
    if (!getFromVDOM["__D3_DEP__"]) {
        getFromVDOM["__D3_DEP__"] = fs.readFileSync(__dirname +"/dependency.js", {encoding: "utf-8"});
    }
    const DOM = new JSDOM(`
    <html lang="es">
        <body></body>
    </html>
    `, {runScripts: "dangerously", resources: "usable"});

    const script = DOM.window.document.createElement('script');
    script.textContent = getFromVDOM["__D3_DEP__"];
    DOM.window.document.head.appendChild(script);

    return <typeof D3>DOM.window.d3;
}
