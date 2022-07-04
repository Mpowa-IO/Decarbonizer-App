import NetInfo from '@react-native-community/netinfo';
export function checkNetworkConnction() {
  return NetInfo.fetch().then((state) => {
    return state.isConnected;
  });
}
