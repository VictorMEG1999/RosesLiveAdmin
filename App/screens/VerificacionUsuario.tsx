import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { NativeBaseProvider, Center, Box } from 'native-base';

export const VerificacionUsuario = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerifyPhoneNumber = () => {
    // Lógica para enviar el código de verificación al número de teléfono
    Alert.alert('Código enviado', `Se ha enviado un código de verificación al número: ${phoneNumber}`);
  };

  const handleSubmitVerification = () => {
    // Lógica para verificar el código ingresado
    Alert.alert('Verificación', `Código ingresado: ${verificationCode}`);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box width="80%" borderRadius="md" bg="gray.100" p={4}>
          <Text style={styles.title}>Verificación de Número de Teléfono</Text>

          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <Button title="Enviar Código de Verificación" onPress={handleVerifyPhoneNumber} />

          <TextInput
            style={styles.input}
            placeholder="Código de Verificación"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            secureTextEntry
          />

          <Button title="Verificar Código" onPress={handleSubmitVerification} />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export default VerificacionUsuario;
