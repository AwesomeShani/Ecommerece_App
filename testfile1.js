import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

function ImageInput({imageUri, setImageUri, selectImage}) {
  // const selectImage = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     mediaType: 'image',
  //     multiple: true,
  //   }).then(image => {
  //     console.log(image);
  //     // setImageUri(image.path);
  //   });
  // };

  return (
    <TouchableWithoutFeedback onPress={selectImage} style={styles.touchable}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.mediumgrey}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  touchable: {
    flex: 1,
  },
});

export default ImageInput;
