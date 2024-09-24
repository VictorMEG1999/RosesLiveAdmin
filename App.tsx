import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Center, Box, HStack, Pressable, Icon, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'native-base';


export default function perfilusu() {
  
  const [selected, setSelected] = React.useState(1);
  
  return (
    <NativeBaseProvider>

      <Center w="100%" flex={1} bgColor="white">
        <Box safeArea p="2" w="90%" maxW="290" py="8" bg="white" borderRadius="lg" shadow="5">
          
          <Text>welcome</Text>

        </Box>
      </Center>

     <Center>
     <Image size={150} alt="fallback text" borderRadius={100} source={{
      uri: "https://-page-icon.png"
    }} fallbackSource={{
      uri: "https://www.w3schools.com/css/img_lights.jpg"
    }} />
       </Center>
          <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}