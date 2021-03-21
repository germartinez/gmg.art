# GMG.ART

Template to list and link NFTs from Opensea.io grouped by collection (manual process).

## Install

```bash
yarn install
```

## Configuration

1. Create an `.env` file following the same structure in the file `.env.example`

```json
# Opensea profile
REACT_APP.OPENSEA_PROFILE_URL=

# Opensea collection 1
REACT_APP.OPENSEA_COLLECTION1_URL=
REACT_APP.OPENSEA_COLLECTION1_NAME=

# Opensea collection 1 NFT 1
REACT_APP.OPENSEA_COLLECTION1_NFT1_IMAGE=
REACT_APP.OPENSEA_COLLECTION1_NFT1_NAME=
REACT_APP.OPENSEA_COLLECTION1_NFT1_URL=

# Opensea collection n
# ...

# Opensea collection n NFT n
# ...
```

2. Use the env variables from `.env` in `src/config/opensea_assets.js`.

```js
const openseaAssets = {
  "opensea_profile_url": process.env.REACT_APP_OPENSEA_PROFILE_URL,
  "opensea_collections": [
    {
      "collection_url": process.env.REACT_APP_OPENSEA_COLLECTION1_URL,
      "collection_name": process.env.REACT_APP_OPENSEA_COLLECTION1_NAME,
      "collection_nfts": [
        {
          "nft_image": process.env.REACT_APP_OPENSEA_COLLECTION1_NFT1_IMAGE,
          "nft_name": process.env.REACT_APP_OPENSEA_COLLECTION1_NFT1_NAME,
          "nft_url": process.env.REACT_APP_OPENSEA_COLLECTION1_NFT1_URL
        },
        // Next NFT
        // { ... }
      ],
    },
    // Next collection
    // { ... }
  ]
}
```

## Build

```bash
yarn build
```
