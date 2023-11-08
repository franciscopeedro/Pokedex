import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import './style.scss';
import { Typography } from '@mui/material';

export default function GenerationSelector({ generations, setGenerations, pokemonFilter }) {

    const allGenerations = [1, 2, 3];

    const handleGenerationsChange = (evt, newValue) => {
        setGenerations(newValue);
        pokemonFilter();
    };

    const toggleButtons = allGenerations.map(gen => <ToggleButton key={gen} value={gen}>{gen}</ToggleButton>);

    return (
        <div className="GenerationSelector">
            <Typography variant="span" className="title">Gerações:</Typography>
            <ToggleButtonGroup
                value={generations}
                color="primary"
                onChange={handleGenerationsChange}
                aria-label="Gerações Pokémon"
            >
                {toggleButtons}
            </ToggleButtonGroup>
        </div>
    );
}