import './App.css';
import Playlist from './components/Playlist';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools';
import 'materialize-css/dist/css/materialize.min.css'


function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <div className="center">
      <h1>Gerador de músicas</h1>
      < Playlist/>
    </div>
    </QueryClientProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
    </>
  );
}

export default App;
