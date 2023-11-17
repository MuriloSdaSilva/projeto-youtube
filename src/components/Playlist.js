import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from 'react-query'
import ListVideos from "./ListVideos";

const queryClient = new QueryClient()

const Playlist = ()  =>{
    const KEY = process.env.REACT_APP_HOST_API_KEY;
        
    const playlist = async () =>{
        const {data} = await axios.get(
            'https://www.googleapis.com/youtube/v3/playlistItems',
            {
                params: {
                    part: 'snippet',
                    playlistId: 'PLtrLyWeLfrXCi_rHJNHyLmqUonUVZbr-7',
                    key: KEY,
                    maxResults: 50
                }
            }
        )
        return data;
    }

    const { data, isLoading, error} = useQuery('playlist', playlist);

    return (
        <QueryClientProvider client={queryClient}>
        <div >
            <h3>Musicas</h3>
            {error && <div>Algo saiu errado</div>}

            {isLoading ? (
                <div>Carregando...</div>
            ): (
                <ListVideos data={data}/>
            )}
        </div>
        </QueryClientProvider>
    );
}

export default Playlist;
