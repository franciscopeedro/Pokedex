import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './style.scss';


export default function PokemonCard({ name, image, types }) {
  const typeHandler = () => types.map(t => t.type.name).join(' | ');

  return (
    <div className="PokemonCard">
      <Card sx={{ maxWidth: 245 }}>
        <CardMedia sx={{ height: 200 }} image={image} title={name} />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>          
        </CardContent>       
      </Card>
    </div>
  );
}
