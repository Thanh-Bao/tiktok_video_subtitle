
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import VideoScreen from './components/VideoScreen';

export default function App() {
  return (
    <TailwindProvider utilities={utilities} >
      <VideoScreen />
      <StatusBar hidden={true} />
    </TailwindProvider>
  );
}

