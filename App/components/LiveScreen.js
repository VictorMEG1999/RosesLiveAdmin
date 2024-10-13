import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const LiveScreen = () => {
  const [liveStreams, setLiveStreams] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('liveStreams')
      .onSnapshot((querySnapshot) => {
        const streams = [];
        querySnapshot.forEach((doc) => {
          streams.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setLiveStreams(streams);
      });

    return () => unsubscribe();
  }, []);

  const renderLiveStream = (stream) => (
    <TouchableOpacity key={stream.id} style={styles.streamItem}>
      <Text style={styles.streamTitle}>{stream.title}</Text>
      <Text style={styles.streamUser}>Por: {stream.username}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView style={styles.scrollView}>
        {liveStreams.length > 0 ? (
          liveStreams.map(renderLiveStream)
        ) : (
          <Text style={styles.noLiveText}>No hay transmisiones en vivo en este momento</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  streamItem: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
  },
  streamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  streamUser: {
    fontSize: 16,
    color: '#666',
  },
  noLiveText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});

export default LiveScreen;
