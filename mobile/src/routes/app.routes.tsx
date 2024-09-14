import { VStack } from "@gluestack-ui/themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "@screens/home";
import { NewGoal } from "@screens/NewGoal";


const queryClient = new QueryClient()

type AppRoutes = {
	home: undefined;
	newGoal: undefined
};
export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRouter() {
	return (
		<QueryClientProvider client={queryClient}>
			<Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
				<Screen name="home" component={Home} />
				<Screen name="newGoal" component={NewGoal} />
			</Navigator>
		</QueryClientProvider>
	);
}
