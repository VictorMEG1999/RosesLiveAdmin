import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 63,
    borderWidth: 1,
    borderColor: '#1087e3',
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
      color: '#1087e3',
  },
  tabBarInactiveTintColor: {
    color: '#1087e3',
  },
  tabBarLabelStyle: {
    fontSize: 14,
  },
  tabBarIconStyle: {
    marginTop: 5,
  },
});

export default styles;