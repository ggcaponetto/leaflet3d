import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
    output: [
        {
            name: "leaflet3d",
            dir: "dist",
            format: 'iife',
            sourcemap: true,
            extend: true
        }
    ],
    plugins: [
        json({}),
        resolve({}),
        commonjs({})
    ],
    external: [

    ]
};