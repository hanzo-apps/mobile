import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { items } from '../../data';
import { t } from '../../theme';

/** Live filter over the same seed data the Home tab lists — a stand-in for the
 *  search screen every app ends up needing. */
export default function Explore() {
  const [q, setQ] = useState('');
  const hits = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return items;
    return items.filter((i) => (i.title + i.blurb + i.tag).toLowerCase().includes(n));
  }, [q]);

  return (
    <View style={s.wrap}>
      <TextInput
        style={s.input}
        value={q}
        onChangeText={setQ}
        placeholder="Search"
        placeholderTextColor={t.dim}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <FlatList
        data={hits}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ paddingBottom: t.pad, gap: 1 }}
        ListEmptyComponent={<Text style={s.empty}>No matches for “{q}”.</Text>}
        renderItem={({ item }) => (
          <View style={s.row}>
            <Text style={s.title}>{item.title}</Text>
            <Text style={s.tag}>{item.tag}</Text>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: t.bg, padding: t.pad },
  input: {
    backgroundColor: t.card, color: t.text, borderRadius: t.radius, borderWidth: 1,
    borderColor: t.line, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16, marginBottom: 12,
  },
  row: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: t.line,
  },
  title: { color: t.text, fontSize: 16, flexShrink: 1, paddingRight: 12 },
  tag: { color: t.dim, fontSize: 12 },
  empty: { color: t.dim, fontSize: 15, textAlign: 'center', paddingTop: 40 },
});
