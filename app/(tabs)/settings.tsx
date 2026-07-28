import Constants from 'expo-constants';
import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { t } from '../../theme';

export default function Settings() {
  const [haptics, setHaptics] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const rows: [string, string][] = [
    ['Version', String(Constants.expoConfig?.version ?? '1.0.0')],
    ['Runtime', Platform.OS],
    ['Bundle', String(Constants.expoConfig?.ios?.bundleIdentifier ?? '—')],
  ];

  return (
    <ScrollView style={s.wrap} contentContainerStyle={{ padding: t.pad, gap: 20 }}>
      <View style={s.group}>
        <Toggle label="Haptic feedback" on={haptics} set={setHaptics} />
        <View style={s.hr} />
        <Toggle label="Share usage analytics" on={analytics} set={setAnalytics} />
      </View>
      <View style={s.group}>
        {rows.map(([k, v], i) => (
          <View key={k}>
            {i > 0 && <View style={s.hr} />}
            <View style={s.row}>
              <Text style={s.label}>{k}</Text>
              <Text style={s.value}>{v}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function Toggle({ label, on, set }: { label: string; on: boolean; set: (v: boolean) => void }) {
  return (
    <View style={s.row}>
      <Text style={s.label}>{label}</Text>
      <Switch value={on} onValueChange={set} trackColor={{ true: t.accent, false: t.line }} />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: t.bg },
  group: { backgroundColor: t.card, borderRadius: t.radius, borderWidth: 1, borderColor: t.line, paddingHorizontal: t.pad },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  hr: { height: 1, backgroundColor: t.line },
  label: { color: t.text, fontSize: 16 },
  value: { color: t.dim, fontSize: 15 },
});
