import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { WarningOutlineIcon } from 'native-base';
import { Center, Box, Heading, VStack, FormControl, Input, Button, HStack, Text, Checkbox } from 'native-base';

export default function LoginScreen() {
  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bgColor="white">
        <Box safeArea p="2" w="90%" maxW="290" py="8" bg="white" borderRadius="lg" shadow="5">
          
          <Text>welcome</Text>

        </Box>
      </Center>
    </NativeBaseProvider>
  );
}