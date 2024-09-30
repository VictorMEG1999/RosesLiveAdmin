import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 63,
    borderWidth: 2,
    borderColor: '#E01983',
    borderRadius: 25,
    marginHorizontal: 5,
    marginBottom: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  tabBarActiveTintColor: {
    color: 'white',
  },
  tabBarActiveBackgroundColor: {
      color: '#E01983',
  },
  tabBarInactiveTintColor: {
    color: '#E01983',
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBarIconStyle: {
    marginTop: 5,
  },
});

export default styles;