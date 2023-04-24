export const worker = new Worker(
    new URL('./rdkit-assets/rdkit.js', import.meta.url),
    {
        type: 'module',
    },
)