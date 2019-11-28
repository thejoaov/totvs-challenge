import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  MainFooter,
  ProductList,
  WelcomeView,
  WelcomeText,
} from './styles';
import Product from '~/components/Product';
import api from '~/services/api';

export default function Main({ navigation }) {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(page + 1);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products?page=${page}`);
      setProducts(response.data.data);
    }
    loadProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function reload() {
    setRefreshing(true);
    setProducts(null);
    setPage(null);
    const response = await api.get('products');
    setPage(Number(1));
    setProducts(response.data.data);
    setRefreshing(false);
  }

  async function loadMore() {
    setRefreshing(true);
    const response = await api.get(`products?page=${page + 2}`);
    if (page <= response.data.lastPage) {
      setRefreshing(false);

      setPage(page + 1);
      setProducts([...products, ...response.data.data]);
    } else {
      setRefreshing(false);
    }
  }

  async function deleteProduct({ id, name }) {
    Alert.alert(
      'Delete product',
      `Delete "${name}"?`,
      [
        { text: 'cancel', onDismiss: () => {} },
        {
          text: 'delete',
          onPress: async () => {
            setRefreshing(true);
            await api.delete(`products/${id}`);
            const response = await api.get('products');
            setProducts(response.data.data);
            setRefreshing(false);
          },
        },
      ],
      { cancelable: true },
    );
  }

  function productList({ item }) {
    return (
      <Product
        navigation={navigation}
        deleteProduct={deleteProduct}
        product={item}
      />
    );
  }

  function noProducts() {
    return (
      <WelcomeView>
        <WelcomeText>No products yet. Create one!</WelcomeText>
      </WelcomeView>
    );
  }

  return (
    <>
      <Container>
        <ProductList
          data={products}
          extraData={products}
          keyExtractor={(item, index) => `${index + item}`}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onRefresh={reload}
          onEndReached={loadMore}
          renderItem={productList}
          ListEmptyComponent={noProducts}
        />
      </Container>
      <MainFooter navigation={navigation} />
    </>
  );
}
