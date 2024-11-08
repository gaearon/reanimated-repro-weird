import React, {useState, useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';

export default function App() {
  const translateY = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));
  return (
    <>
      <Pressable
        style={{padding: 100, fontSize: 50, backgroundColor: 'purple'}}
        onPress={() => {
          translateY.value = withDecay({
            velocity: 200,
            velocityFactor: 1,
          });
        }}>
        <Text>open</Text>
      </Pressable>
      <Animated.View
        style={[
          {
            backgroundColor: 'blue',
            width: 100,
            height: 100,
          },
          style,
        ]}
      />
    </>
  );
}
