import React from 'react';
import { Button, View, Image, Alert } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export const GaleriaScreen = () => {
  const [images, setImages] = React.useState([]);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 3 }, (response) => {
      if (response.didCancel) {
        Alert.alert('Cancelado');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else {
        const selectedImages = response.assets.map((asset) => asset.uri);
        setImages(selectedImages);
      }
    });
  };

  return (
    <View>
      <Button title="Seleccionar imágenes" onPress={selectImage} />
      {images.map((uri, index) => (
        <Image key={index} source={{ uri }} style={{ width: 100, height: 100, margin: 10 }} />
      ))}
    </View>
  );
};

export default GaleriaScreen;

