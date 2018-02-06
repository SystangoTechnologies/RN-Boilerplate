import Toast from 'react-native-root-toast';

export default function showToast(msg) {
	Toast.show(`${msg}`, { position: 0, animation: true, hideOnPress: true });
}
