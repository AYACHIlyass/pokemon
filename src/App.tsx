import React, {useCallback, useEffect} from 'react';
import './App.css';
import {PokemonList} from "./components/pokemonList/PokemonList";
import {QueryClient, QueryClientProvider} from "react-query";
import {Box} from "@mui/material";
import {isBottom} from "./service/PokemonUtils";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";
import {applicationStatusActions} from "./store/ApplicationStatusSlice/ApplicationStatusSlice";

const queryClient = new QueryClient();

function App() {
    const dispatcher = useDispatch<AppDispatch>();
    const handleScroll = useCallback(() => {
        if (isBottom()) {
           dispatcher(applicationStatusActions.atBottom())
        }
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <Box className="globalContainer">
            <QueryClientProvider client={queryClient}>
                <PokemonList/>
            </QueryClientProvider>
        </Box>
    );
}

export default App;
