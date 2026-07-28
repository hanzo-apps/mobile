import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { items } from '../../data';
import { t } from '../../theme';

export default function Home() {
  return (
    <FlatList
      style={s.list}
      contentContainerStyle={{ padding: t.pad, gap: 12 }}
      data={items}
      keyExtractor={(i) => i.id}
      ListHeaderComponent={
        <View style={{ marginBottom: 8 }}>
          <Text style={s.h1}>Hanzo Mobile</Text>
          <Text style={s.sub}>Expo Router starter for iOS, Android and web.</Text>
        </View>
      }
      renderItem={({ item }) => (
        <Link href={{ pathname: '/item/[id]', params: { id: item.id } }} asChild>
          <Pressable style={({ pressed }) => [s.card, pressed && { opacity: 0.6 }]}>
            <Text style={s.tag}>{item.tag}</Text>
            <Text style={s.title}>{item.title}</Text>
            <Text style={s.blurb}>{item.blurb}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const s = StyleSheet.create({
  list: { flex: 1, backgroundColor: t.bg },
  h1: { color: t.text, fontSize: 30, fontWeight: '700', letterSpacing: -0.5 },
  sub: { color: t.dim, fontSize: 15, marginTop: 4 },
  card: { backgroundColor: t.card, borderRadius: t.radius, borderWidth: 1, borderColor: t.line, padding: t.pad },
  tag: { color: t.accent, fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  title: { color: t.text, fontSize: 18, fontWeight: '600', marginTop: 6 },
  blurb: { color: t.dim, fontSize: 14, marginTop: 4, lineHeight: 20 },
});
