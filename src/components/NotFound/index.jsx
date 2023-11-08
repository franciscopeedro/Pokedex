import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function() {
    return (
        <Box sx={{ width: '100%' }} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
            <img src="assets/pokebola_vazia.png" alt="pokebola vazia" />
            <Typography gutterBottom variant="h5" component="div">
                Nenhum Pokémon foi encontrado!
            </Typography>
        </Box>

    );
}