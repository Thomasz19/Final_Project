import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function Logo() {
  return (
      <View style={styles.logoContainer}>
          <Image source={require('../assets/Group.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.text}> FIT<Text style={styles.textBody}>BODY</Text> </Text>
      </View>
  );
}

export default function MyComponent() {
    return (
        <View style={styles.mainContainer}>
            <Logo />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 20,
        width: "100%",
        maxWidth: 480,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#2D2D2D",
        textAlign: "center",
    },
    logoContainer: {
        marginTop: 72,
        maxWidth: "100%",
        width: 168,
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        width: 135,
        aspectRatio: 2.13,
    },
    text: {
        marginTop: 7,
        fontSize: 32,
        fontWeight: "800",
        color: "#A3E635",
        textAlign: "center",
        fontStyle: "italic",
    },
    textBody: {
        fontWeight: "normal",
    },
});