import { NavigationActions } from 'react-navigation';

export default function(toRoute,navigation){
	const resetAction = NavigationActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({ routeName: toRoute})]
	});
	navigation.dispatch(resetAction);
}