// turns out this file should be in the same location with `RDKit_minimal.js` and `RDKit_minimal.wasm`

// execute `RDKit_minimal.js` will assign `initRDKitModule` to `self` object, aka globalThis
import './RDKit_minimal'

initRDKitModule().then((rdkit) => {
    var smiles = "CC(=O)Oc1ccccc1C(=O)O";
    var mol = rdkit.get_mol(smiles);
    postMessage(mol.get_svg())
})
