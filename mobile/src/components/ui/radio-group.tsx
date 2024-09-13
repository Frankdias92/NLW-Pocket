import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckCircle, Circle } from 'lucide-react-native'; 
import { HStack, Text } from '@gluestack-ui/themed';


export interface LabelValues {
  label: string,
  emoji: string,
  times?: number
}

export interface RadioGroupProps {
  labelValues: LabelValues
  isSelelected: boolean
  onPress: () => void
}

export function RadioGroupItem({ labelValues, isSelelected = false, onPress,  ...rest }: RadioGroupProps) {

  
  return (
    <HStack gap={6} 
      justifyContent='space-between' 
      bgColor='$secondary950'
      paddingHorizontal={'$4'}
      paddingVertical={'$3'}
      rounded={'$lg'}
      borderWidth={1}
      borderColor={isSelelected ? "$violet400" : '$secondary700'}
      mb={'$2'}
      >
        <TouchableOpacity onPress={onPress} accessibilityRole="radio" accessibilityState={{ selected: isSelelected }} {...rest}>
                {isSelelected ? (
                  <CheckCircle size={24} color="#FF4081" />
                ) : (
                  <Circle size={24} color="#9E9E9E" />
                )}
      </TouchableOpacity>

        <Text color='$secondary100'>{labelValues.label}</Text>
        <Text>{labelValues.emoji}</Text>
    </HStack>
  );
}
