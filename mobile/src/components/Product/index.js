import React from 'react';
import {
  Container,
  Image,
  InfoView,
  Name,
  Price,
  ColorSizeView,
  ColorSizeInfoView,
  ColorSizeTitle,
  ColorSizeText,
  ActionsView,
  ActionButton,
  ImageBackground,
  ActionButtonText,
  ImageBox,
} from './styles';

export default function Product({ navigation, product, deleteProduct }) {
  return (
    <Container>
      {product.file_id ? (
        <ImageBox>
          <Image source={{ uri: product.picture.url }} />
        </ImageBox>
      ) : (
        <ImageBackground colors={['#AE4D3F', '#D9968E']} />
      )}
      <InfoView>
        <Name>{product.name}</Name>
        <Price>RP {product.price}</Price>
        <ColorSizeView>
          <ColorSizeInfoView>
            <ColorSizeTitle>Color</ColorSizeTitle>
            <ColorSizeText>{product.color}</ColorSizeText>
          </ColorSizeInfoView>
          <ColorSizeInfoView>
            <ColorSizeTitle>Size</ColorSizeTitle>
            <ColorSizeText>{product.size}</ColorSizeText>
          </ColorSizeInfoView>
        </ColorSizeView>
      </InfoView>
      <ActionsView>
        <ActionButton onPress={() => navigation.navigate('Edit', product)}>
          <ActionButtonText>Edit</ActionButtonText>
        </ActionButton>
        <ActionButton onPress={() => deleteProduct(product)}>
          <ActionButtonText>Delete</ActionButtonText>
        </ActionButton>
      </ActionsView>
    </Container>
  );
}
