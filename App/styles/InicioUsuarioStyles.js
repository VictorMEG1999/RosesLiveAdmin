import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 63,
    borderWidth: 1,
    borderColor: '#E01983',
    borderRadius: 25,
    marginHorizontal: 5,
    marginBottom: 4,
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
  },
  tabBarIconStyle: {
    marginTop: 5,
  },
});

export default styles;