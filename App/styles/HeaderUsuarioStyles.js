import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerBuscador: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
  },
  icon: {
    marginHorizontal: 10,
    color: '#000',
  },
  menuIco: {
    color: '#000',
  },

});

export default styles;
