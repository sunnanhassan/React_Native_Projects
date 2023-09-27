import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Sunnan Hassan',
      status: 'Student',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQF1RcuF4EPq2A/profile-displayphoto-shrink_400_400/0/1670430135626?e=1699488000&v=beta&t=N3OOYx35_z79eNfITyVE47YPpNR4L3XHDpzTVhipumk',
    },
    {
      uid: 2,
      name: 'Waleed Hassan',
      status: 'Student',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D35AQEWf_BeDOGnTA/profile-framedphoto-shrink_100_100/0/1673724930395?e=1694606400&v=beta&t=aqsM8glXnXwuXn9Z4W5bgkwddr9eM6NN18YjDVQFfU4',
    },
    {
      uid: 3,
      name: 'Saad Ahmed Patwari',
      status: 'Student',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D35AQE5rAjBQ5088g/profile-framedphoto-shrink_100_100/0/1670240062795?e=1694606400&v=beta&t=pZwJ1BOxPZ0csVgDDKvQFVQeRGZKU_Ou7QPwuBS32y0',
    },
    {
      uid: 4,
      name: 'Hitesh',
      status: 'Teacher',
      imageUrl:
        'https://yt3.ggpht.com/ytc/AOPolaTLK52bUQ_YHxgb7RK8GMt_bksIMavy-aEZ9fUOvg=s88-c-k-c0x00ffffff-no-rj',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#03203C',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
