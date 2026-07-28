/** Local seed data. Swap `items` for a fetch() against your own /v1 API —
 *  the screens only depend on the Item shape, not on where it came from. */
export type Item = { id: string; title: string; blurb: string; tag: string; body: string };

export const items: Item[] = [
  {
    id: 'router',
    title: 'File-based routing',
    tag: 'expo-router',
    blurb: 'Every file under app/ is a route on iOS, Android and web.',
    body: 'app/(tabs)/index.tsx is the first tab. app/item/[id].tsx is a dynamic route. Deep links, the browser URL bar and the native stack all resolve through the same tree, so there is one navigation model instead of three.',
  },
  {
    id: 'native',
    title: 'Real native views',
    tag: 'react-native',
    blurb: 'UIView under the hood, not a webview in a jacket.',
    body: 'The New Architecture (Fabric + TurboModules) is on by default in app.json. Text, View and ScrollView compile to UIKit on iOS and to DOM on web via react-native-web, from the same source.',
  },
  {
    id: 'ota',
    title: 'Ship without the review queue',
    tag: 'expo-updates',
    blurb: 'JS-only changes go out over the air.',
    body: 'Anything that does not add a native module can be published as an update instead of a new build. Native changes still need an archive — which needs macOS. See the README.',
  },
  {
    id: 'web',
    title: 'One codebase, three targets',
    tag: 'metro',
    blurb: 'expo export -p web renders this same screen as static HTML.',
    body: 'That is how the live demo of this template works: no second implementation, no marketing mock. What you read here is the app the simulator runs.',
  },
];

export const byId = (id: string) => items.find((i) => i.id === id);
