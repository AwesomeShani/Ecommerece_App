import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onAddImage, onRemoveImage}) {
  const scrollView = useRef();

  return (
    <View>
      {imageUris.map(uri => (
        <ImageInput
          imageUri={uri}
          key={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
      <ImageInput onChangeImage={uri => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ImageInputList;
