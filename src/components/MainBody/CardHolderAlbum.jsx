import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';

function CardHolderAlbum({ pathUrl, propValue }) {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(propValue.title, propValue.songs, pathUrl);
        navigate(`/genre/${pathUrl}/${propValue._id}`, { state: propValue.songs });
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
                width='1.2rem'
                image={propValue.image}
                alt={propValue.title}
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
                <Typography textAlign="center" variant='h7'>{propValue.title} </Typography>
                {/* <Typography textAlign="center" variant='h7'>{propValue.artists.map(item => `${item.name}, `)}</Typography> */}
            </CardContent>
        </Card>
    );
}

export default CardHolderAlbum;