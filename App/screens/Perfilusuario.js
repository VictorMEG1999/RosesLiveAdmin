import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { Center, Button, HStack, CheckIcon, Icon, Text, Menu, Divider, NativeBaseProvider, Flex, Container, Box} from 'native-base';
import * as React from 'react';
import {View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 

function HomeScreen({  }) {
  return (
    <NativeBaseProvider>
     
          <Center>
            <Box 
              top={30}
              size={120} 
              bgColor="gray.200" 
              borderRadius="full"
              mb={5}
            />
          </Center>

      <Text> </Text>
          

      <Divider w="100%" bg="pink.500" top={"120"}/>
             
      <Box  alignItems={"flex-start"} top={"130"} left={4} >
  
      <HStack>
      <CheckIcon size="5" mt="2.5" color="emerald.500" />
      <Button variant="ghost" colorScheme="secondary"
          onPress={() => {}}>Mensajes </Button>
      </HStack>
          
      <HStack>
      <CheckIcon size="5" mt="2.5" color="emerald.500" />
      <Button variant="unstyled" 
      onPress={() => {}}>Notificaciones</Button>
      </HStack>
          
      <HStack>
      <CheckIcon size="5" mt="2.5" color="emerald.500" />
      <Button variant="unstyled" 
      onPress={() => {}}>Monedero</Button>
      </HStack>
          
      <HStack>
      <CheckIcon size="5" mt="2.5" color="emerald.500" />
      <Button variant="unstyled" 
     onPress={() => {}}>Mi Nivel</Button>
      </HStack>
          
      <HStack>
      <CheckIcon size="5" mt="2.5" color="emerald.500" />
      <Button variant="unstyled" 
      onPress={() => {}}>Mis Invitaciones</Button>
      </HStack>

      <HStack>
      <CheckIcon size="5" mt="2.5" color="emerald.500" />
      <Button variant="unstyled" 
      onPress={() => {}}>Galeria</Button>
      </HStack>  
      </Box>
      
              
              <Box alignItems={"flex-start"} top={"130"}>
                 <Button top={"1"} mt="2" borderRadius={60} bgColor="#E01983" width={"80%"} alignSelf={"center"} 
                onPress={() => {}} >
                Verificar
                 </Button>
              </Box>
       
    </NativeBaseProvider>
    
      
      
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}







/*export default function perfilusu() {
  
  const [selected, setSelected] = React.useState(1);
  
  return (
    <NativeBaseProvider>

    <NativeBaseProvider>
      <Center>
     <Image size={150} alt="fallback text" borderRadius={100} source={{
      uri: "https://-page-icon.png"
    }} fallbackSource={{
      uri: "https://www.w3schools.com/css/img_lights.jpg"
    }} />
       </Center>

    </NativeBaseProvider>

      <Center w="100%" flex={1} bgColor="white">
        <Box safeArea p="2" w="90%" maxW="290" py="8" bg="white" borderRadius="lg" shadow="5">
          
          <Text>welcome</Text>

        </Box>
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
}*/