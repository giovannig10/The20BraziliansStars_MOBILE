import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function TabelaBrasileirao() {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tbs-back.coolify.fps92.dev/teams")
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta da API:", data); // Veja os campos no console
        if (Array.isArray(data)) {
          setTabela(data);
        } else {
          setTabela([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator color="#25406A" />;
  }

  return (
    <ScrollView horizontal>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.cellHeader}>#</Text>
          <Text style={styles.cellHeader}>Time</Text>
          <Text style={styles.cellHeader}>Pts</Text>
          <Text style={styles.cellHeader}>J</Text>
          <Text style={styles.cellHeader}>V</Text>
          <Text style={styles.cellHeader}>E</Text>
          <Text style={styles.cellHeader}>D</Text>
        </View>
{tabela.map((item, idx) => (
  <View style={styles.row} key={item.id}>
    <Text style={styles.cell}>{idx + 1}</Text>
    <Text style={styles.cell}>{item.name}</Text>
    <Text style={styles.cell}>{item.points ?? 0}</Text>
    <Text style={styles.cell}>{item.games ?? 0}</Text>
    <Text style={styles.cell}>{item.wins ?? 0}</Text>
    <Text style={styles.cell}>{item.draws ?? 0}</Text>
    <Text style={styles.cell}>{item.losses ?? 0}</Text>
  </View>
))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  table: {
    minWidth: 500,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#25406A",
    borderRadius: 4,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 2,
  },
  cellHeader: {
    color: "#fff",
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
    padding: 2,
  },
  cell: {
    width: 60,
    textAlign: "center",
    color: "#25406A",
    padding: 2,
  },
});
