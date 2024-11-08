import React, {useState, useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function App() {
  const [show, setShow] = useState(false);
  return show ? (
    <Lightbox onClose={() => setShow(false)} />
  ) : (
    <Pressable
      style={{padding: 100, fontSize: 50, backgroundColor: 'purple'}}
      onPress={() => setShow(true)}>
      <Text>open</Text>
    </Pressable>
  );
}

function Lightbox({onClose}) {
  const openProgress = useSharedValue(0);

  React.useEffect(() => {
    console.log('set to 1');
    openProgress.value = 1;
  }, [openProgress]);

  const containerStyle = useAnimatedStyle(() => {
    console.log(openProgress.value);
    if (openProgress.value < 1) {
      return {pointerEvents: 'none', backgroundColor: 'red'};
    }
    return {pointerEvents: 'auto', backgroundColor: 'blue'};
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        containerStyle,
      ]}>
      <Pressable style={{flex: 1}} onPress={onClose} />
    </Animated.View>
  );
}
