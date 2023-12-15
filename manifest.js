import packageJson from '../package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
    manifest_version: 3,
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
    action: {
        default_popup: 'src/pages/popup/index.html'
    },
    icons: {
        16: '16x16.png',
        32: '32x32.png',
        48: '48x48.png',
        128: '128x128.png'
    },
    content_scripts: [
        {
            matches: ['*://*/*'],
            js: ['src/pages/content/index.js']
        }
    ],
}

export default manifest;