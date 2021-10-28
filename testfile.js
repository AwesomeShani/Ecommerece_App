import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert, Button, FlatList} from 'react-native';
import ImageInput from './src/components/ImageInput';
import ImagePicker from 'react-native-image-crop-picker';

export default function SimpleImagePicker() {
  const [images, setImages] = useState([]);

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'image',
      multiple: true,
    }).then(image => {
      console.log(image);
      setImages(image);
    });
  };
  console.log({firstimage: images[0]});

  const selectSingleImage = id => {
    console.log(id);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'image',
      multiple: false,
    }).then(image => {
      const newImageArray = images.map((img, index) => {
        if (index === id) {
          return image;
        }
        return img;
      });
      setImages(newImageArray);
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Click" onPress={selectImage} />
      <FlatList
        data={images}
        horizontal
        renderItem={({item, index}) => {
          // console.log(item);
          const {path} = item;
          return (
            <View key={index}>
              <ImageInput
                imageUri={path}
                selectImage={() => selectSingleImage(index)}
              />
            </View>
          );
        }}
      />
      {/* {images.map((item, index) => {
        console.log(item);
        const {path} = item;
        return (
          <View key={index}>
            <ImageInput imageUri={path} />
            
          </View>
        );
      })} */}
      {/* <ImageInput imageUri={imageUri} setImageUri={setImageUri} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 5,
  },
});
