import { View, Text, StyleSheet } from "react-native";
import { useNetwork } from "./useNetwork";

export default function HomeScreen() {
  const network = useNetwork();

  if (!network) {
    return <Text>Checking Network...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Status: {network.type}</Text>

      {!network.isConnected && (
        <Text style={styles.offline}>Offline</Text>
      )}

      {network.type === 'cellular' && (
        <Text style={styles.cellular}>Using mobile data</Text>
      )}

      {network.effectiveType === '2g' && (
        <Text style={styles.slow}>Slow connection</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  offline: {
    color: 'red',
    fontWeight: 'bold',
  },
  cellular: {
    color: 'orange',
  },
  slow: {
    color: 'gray',
  },
});
