import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { byId } from '../../data';
import { t } from '../../theme';

/** Dynamic route: /item/router resolves here on native and in the browser. */
export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = byId(id);

  if (!item) {
    return (
      <View style={[s.wrap, { padding: t.pad }]}>
        <Text style={s.body}>No item “{id}”.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={s.wrap} contentContainerStyle={{ padding: t.pad, gap: 12 }}>
      <Stack.Screen options={{ title: item.title }} />
      <Text style={s.tag}>{item.tag}</Text>
      <Text style={s.h1}>{item.title}</Text>
      <Text style={s.body}>{item.body}</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: t.bg },
  tag: { color: t.accent, fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  h1: { color: t.text, fontSize: 26, fontWeight: '700', letterSpacing: -0.4 },
  body: { color: t.dim, fontSize: 16, lineHeight: 25 },
});
