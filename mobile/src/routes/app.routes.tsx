import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Home } from "@screens/home";

type AppRoutes = {
	home: undefined;
};
export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRouter() {
	return (
		<Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
		</Navigator>
	);
}
