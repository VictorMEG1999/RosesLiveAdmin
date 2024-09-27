import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {napUser} from"./App/navigation/index"
//import CountainerRoutes from './App/navigation';

export default function App() {
  return (
    napUser()
  );
}