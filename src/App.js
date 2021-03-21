import styled from 'styled-components'
import opeanseaAssets from './config/opensea_assets'

const Container = styled.div`
  --border: 1px solid red;
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-width: 1320px;
`

const Title = styled.div`
  --border: 1px solid red;
  padding: 20px 20px 0 20px;
  h1 {
    font-size: 65px;
    margin: 0;
    padding: 0;
  }
  @media only screen and (min-width: 700px) {
    margin: 0 auto;
    h1 {
      font-size: 120px;
    }
  }
`

const Subtitle = styled.div`
  --border: 1px solid red;
  padding: 0px 20px;
  p {
    --border: 1px solid red;
    font-size: 20px;
    margin: 0 0 10px 0;
    padding: 0;
  }
  @media only screen and (min-width: 700px) {
    margin: 0 auto;
  }
`

const CollectionTitle = styled.div`
  --border: 1px solid blue;
  font-size: 20px;
  font-style: italic;
  margin: 50px 50px 10px 50px;
  text-align: center;
`

const Collection = styled.div`
  --border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;
  margin: 0 auto;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`

const OuterPicture = styled.div`
  margin: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  @media only screen and (min-width: 700px) {
    width: 100%;
  }
  :hover > a > div:first-child {
    opacity: 0.4;
    transform: scale(1);
  }
  :hover > a > div {
    display: block;
  }
`

const Picture = styled.div`
  background: #000;
  height: 160px;
  transform: scale(1.2);
  transition: all 0.3s;
  @media only screen and (min-width: 700px) {
    height: 500px;
  }
`

const OuterPictureTitle = styled.div`
  --border: 1px solid red;
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const PictureTitle = styled.div`
  --border: 1px solid yellow;
  color: #eee;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  @media only screen and (min-width: 700px) {
    writing-mode: vertical-rl;
    transform: scale(-1);
  }
`

const Footer = styled.footer`
  --border: 1px solid red;
  margin: 50px;
  font-size: 20px;
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <Title>
        <h1>GMG.ART</h1>
      </Title>
      <Subtitle>
        <p>2D pattern artist.</p>
        <p>
          Now Available on {' '}
          <a href={opeanseaAssets.opensea_profile_url} target="_blank" rel="noopener noreferrer">
            Opensea.io
          </a>
        </p>
      </Subtitle>
      {opeanseaAssets.opensea_collections.map(opeanseaAsset => (
        <div key={opeanseaAsset.collection_name}>
          <CollectionTitle>
            Collection: {' '}
            <a href={opeanseaAsset.collection_url} target="_blank" rel="noopener noreferrer">
              {opeanseaAsset.collection_name}
            </a>
          </CollectionTitle>
          <Collection>
            {opeanseaAsset.collection_nfts.map(nft => (
              <OuterPicture key={nft.nft_name}>
                <a href={nft.nft_url} target="_blank" rel="noopener noreferrer">
                  <Picture style={{
                    background: `background url(${nft.nft_image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}/>
                  <OuterPictureTitle>
                    <PictureTitle>{nft.nft_name}</PictureTitle>
                  </OuterPictureTitle>
                </a>
              </OuterPicture>
            ))}
          </Collection>
        </div>
      ))}
      <Footer>
        © 2021 GMG ART
      </Footer>
    </Container>
  );
}

export default App;
