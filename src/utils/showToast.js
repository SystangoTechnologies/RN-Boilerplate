import Toast from 'react-native-root-toast';

export default function showToast(msg) {
  Toast.show(`${msg}`, {
    position: 0, duration: Toast.durations.SHORT, animation: true, hideOnPress: true
  });
}
