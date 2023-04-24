import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'src/rdkit-assets/RDKit_minimal.wasm',
                    dest: 'assets'
                }
            ]
        })
    ]
})