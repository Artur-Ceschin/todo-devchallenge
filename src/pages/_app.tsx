import { AppProps } from 'next/app';
import '../styles/global.scss';
import { TasksProvider } from '../hooks/useTasks';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}

export default MyApp;
