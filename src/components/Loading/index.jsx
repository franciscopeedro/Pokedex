import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function Loading() {
    return (
        <Box sx={{ width: '100%' }} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
            <img src="assets/loading.gif" alt="carregando..." />
            <Typography gutterBottom variant="h5" component="div">
                Carregando...
            </Typography>
        </Box>        
    );
}