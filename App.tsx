import { StyleSheet, Text, View, Image, ScrollView, Modal, Button } from "react-native";
import { WebView } from "react-native-webview";
import games from "./src/data/games";
import FooterPrincipal from "./src/components/FooterPrincipal";
import HeaderPrincipal from "./src/components/HeaderPrincipal";
import { useEffect, useState } from "react";
import { IGame } from "./src/data/games";

export default function App() {
  const [filtrar, setFiltrar] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    const filtered = games.filter((game: IGame) => game.name.toLowerCase().includes(filtrar.toLowerCase()));
    setFilteredGames(filtered);
  }, [filtrar]);

  return (
    <View style={styles.container}>
      <HeaderPrincipal filtrar={filtrar} setFiltrar={setFiltrar} />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredGames.length > 0 ? (
          filteredGames.map((game: IGame) => (
            <View key={game.id} style={styles.game}>
              <Image source={{ uri: game.image }} style={styles.gameImage} />
              <View style={styles.gameContent}>
                <Text style={styles.gameTitle}>{game.name}</Text>
                <Text style={styles.gameText}>Platform: {game.platform}</Text>
                <Text style={styles.gameText}>Genre: {game.genre}</Text>
                <Text style={styles.gameText}>Release Date: {game.releaseDate}</Text>
                <Text style={styles.gameText}>Rating: {game.rating}</Text>
                <Text style={styles.gameText}>Developer: {game.developer}</Text>
                <Text style={styles.gameText}>Rating Score: {game.ratingScore}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Nenhum jogo encontrado</Text>
        )}
        
      </ScrollView>

      <FooterPrincipal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    marginTop: 110,
    paddingBottom: 160,
    alignItems: "center",
  },
  game: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
  },
  gameImage: {
    width: '100%',
    height: 200,
  },
  gameContent: {
    padding: 15,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});
