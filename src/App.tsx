import React from 'react';
import './App.css';
import {PokemonList} from "./components/pokemonList/PokemonList";
import {QueryClient, QueryClientProvider} from "react-query";
import {Box} from "@mui/material";

const queryClient = new QueryClient();
function App() {
    return (
        <Box className="globalContainer">
        <QueryClientProvider client={queryClient}>
            <PokemonList/>
        </QueryClientProvider>
        </Box>
    );
}

export default App;
