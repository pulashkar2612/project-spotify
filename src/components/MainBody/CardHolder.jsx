import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';

function CardHolder({ propKey, pathUrl,  propValue }) {
    const length = propValue.length;
    
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(pathUrl);
        navigate(`/genre/${pathUrl}/${propValue[length - 1].mood}`, { state: propValue });
    }

    return (
        <Card sx={{
            padding: '15px',
            borderRadius: '20px',
            backgroundImage: 'linear-gradient(90deg,#af2896,#509bf5)',
            maxHeight: '280px',
        }}
            onClick={handleClick}
        >
            <CardMedia
                component="img"
                width= '1.2rem'
                image={propValue[length - 1].thumbnail}
                alt={propValue[length - 1].mood}
                sx={{
                    //  borderRadius: '20px 0 20px 0' 
                    borderRadius: '20px'
                }}
            />
            <CardContent sx={{
                paddingBottom: '24px',
                textAlign: 'center',
                letterSpacing: 'normal',
                margin: 'auto',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                textTransform: 'none'
            }}>
                <Typography variant='h7'>{propValue[length - 1].mood}</Typography>
            </CardContent>
        </Card>
    );
}

export default CardHolder;