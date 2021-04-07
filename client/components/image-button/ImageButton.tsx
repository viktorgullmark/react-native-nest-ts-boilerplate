import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

type Props = {
  imageSrc: ImageSourcePropType;
  imagePressedSrc?: ImageSourcePropType;
  onPress: () => void;
};

const ImageButton = ({
  imageSrc,
  imagePressedSrc,
  onPress,
}: Props) => {
  const [src, setSrc] = useState(imageSrc);
  return (
    <TouchableWithoutFeedback
      style={styles.touchable}
      onPress={onPress}
      onPressIn={() => {
        if (imagePressedSrc) {
          setSrc(imagePressedSrc);
        }
      }}
      onPressOut={() => {
        setSrc(imageSrc);
      }}
    >
      <Image source={src} style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  image: {
    width: 250,
    height: 59,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageButton;
