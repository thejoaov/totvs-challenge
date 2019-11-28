import React, { useState, useEffect } from 'react';
import { Alert, ToastAndroid, Platform } from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  ScrollContainer,
  Form,
  ProductImageView,
  ProductImageButton,
  ProductImageButtonText,
  ProductName,
  ProductPrice,
  ProductLabel,
  ColorSizeView,
  ProductColor,
  ProductSize,
  ProductInput,
  ProductImageButtonIcon,
} from './styles';

import ProductFooter from '~/components/ProductFooter';
import api from '~/services/api';

export default function Edit({ navigation }) {
  const { params: product } = navigation.state;

  const [image, setImage] = useState(
    product.file_id ? product.picture.url : null,
  );
  const [name, setName] = useState(product.name.toString());
  const [description, setDescription] = useState(
    product.description.toString(),
  );
  const [price, setPrice] = useState(product.price.toString());
  const [color, setColor] = useState(product.color.toString());
  const [size, setSize] = useState(product.size.toString());

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPermissionAsync() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          Alert.alert(
            'Error',
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    }
    getPermissionAsync();
  }, []);

  async function pickImage() {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 12],
      quality: 0.5,
      base64: false,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  async function newProduct() {
    try {
      setLoading(true);
      if (image) {
        const imageData = new FormData();
        imageData.append('file', {
          uri: image,
          name: 'image',
          type: 'image/jpeg',
        });
        const upload = await api.post('files', imageData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        await api.put(`products/${product.id}`, {
          name,
          description,
          size,
          price,
          color,
          file_id: upload.data.id,
        });
      } else {
        await api.put(`products/${product.id}`, {
          name,
          description,
          size,
          price,
          color,
        });
      }
      setLoading(false);
      Platform.OS === 'ios'
        ? Alert.alert(`"${product.name}" saved`)
        : ToastAndroid.show(`"${product.name}" saved`, ToastAndroid.SHORT);
      navigation.navigate('Main', { reloading: true });
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', error.message);
    }
  }
  return (
    <ScrollContainer>
      <Container>
        <ProductImageView source={{ uri: image }}>
          <ProductImageButton onPress={pickImage}>
            <ProductImageButtonIcon />
            <ProductImageButtonText>
              {image ? 'change picture' : 'add picture'}
            </ProductImageButtonText>
          </ProductImageButton>
        </ProductImageView>
        <Form>
          <ProductName>
            <ProductLabel>Name</ProductLabel>
            <ProductInput
              onChangeText={setName}
              autoCapitalize="words"
              value={name}
              defaultValue={product.name}
            />
          </ProductName>
          <ProductName>
            <ProductLabel>Description</ProductLabel>
            <ProductInput
              onChangeText={setDescription}
              autoCapitalize="words"
              value={description}
            />
          </ProductName>
          <ProductPrice>
            <ProductLabel>Price</ProductLabel>
            <ProductInput
              onChangeText={setPrice}
              keyboardType="decimal-pad"
              value={price}
            />
          </ProductPrice>
          <ColorSizeView>
            <ProductColor>
              <ProductLabel>Color</ProductLabel>
              <ProductInput
                onChangeText={setColor}
                autoCapitalize="words"
                value={color}
              />
            </ProductColor>
            <ProductSize>
              <ProductLabel>Size</ProductLabel>
              <ProductInput
                onChangeText={setSize}
                autoCapitalize="characters"
                value={size}
              />
            </ProductSize>
          </ColorSizeView>
        </Form>
      </Container>
      <ProductFooter
        loading={loading}
        execute={() => newProduct()}
        navigation={navigation}
      />
    </ScrollContainer>
  );
}
