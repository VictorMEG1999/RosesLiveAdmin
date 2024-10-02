import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#E01983',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 60,
    marginTop: 10,
    backgroundColor: '#E01983',
    width: '100%',
  },
  buttonPressed: {
    bgColor: '#831843',
    transform: [{ scale: 0.98 }],
  },
  waveContainer: {
     position: 'absolute',
     bottom: 0,
     marginBottom: '65px'
  },
});

export default styles;