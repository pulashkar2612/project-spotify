import { Box, Button, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

function ButtonComponent({ image, textData }) {
    return (
        <Button
            sx={{
                background: 'transparent',
                borderRadius: '500px',
                textAlign: 'center',
                border: '1px solid var(--essential-subdued,#878787)',
                '&:hover': { border: '1.5px solid var(--essential-subdued,white) ' },
                color: 'white',
                paddingInline: '31px',
                paddingY: '12px',
            }}
        >
            {image ?
                <img
                    src={image}
                    alt=''
                    style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        objectFit: 'contain',
                    }} /> : ''}
            <Typography
                color="white"
                sx={{
                    letterSpacing: 'normal',
                    margin: 'auto',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    textTransform: 'none'
                }}
            >
                {textData}
            </Typography>
        </Button>
    );
}

export function Login() {
    const facebook = 'https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg';
    const google = 'https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg';
    const apple = 'https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg';

    const [visibility, setVisibility] = useState(false);
    const [user, setuser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = () => {
        event.preventDefault();
    }

    const EndAdorment = ({ visibility, setVisibility }) => {
        return (
            <InputAdornment position="end">
                <IconButton onClick={() => setVisibility(!visibility)}>
                    {!visibility ? <VisibilityOffIcon sx={{ color: "white" }} /> : <VisibilityIcon sx={{ color: "white" }} />}
                </IconButton>
            </InputAdornment>
        );
    }

    return (
        <>
            {/* background: 'linear-gradient(110deg,white 50%, green 50%)' */}
            <Box sx={{
                width: "100%",
                height: "100vh",
                //background: 'black',
                background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                borderRadius: '20px',
                overflowX: 'hidden',
            }}
            >
                <Box sx={{
                    background: "black",
                    //background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)',
                }}
                    width="100%"
                    height="12vh"
                >
                    <img
                        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                        alt=""
                        href="/"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                        }}
                    />
                    <span className="flag-icon flag-icon-in"></span>
                </Box>
                <Box
                    sx={{
                        flex: '3 1 0%',
                        display: "flex",
                        justifyContent: "center",
                        padding: '32px',
                        background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)'
                    }}>
                    <Box
                        sx={{
                            maxWidth: '734px',
                            width: '100%',
                            margin: '20px',
                            borderRadius: '20px',
                            // background: 'linear-gradient(110deg,white 50%, green 50%)',
                            background: 'black',
                        }}>
                        <Typography sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '40px',
                            color: 'white',
                            margin: '48px 0px',
                        }}>
                            Log in to Spotify
                        </Typography>
                        <Box
                            sx={{
                                padding: '0px',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '324px',
                                margin: '0px auto',
                                rowGap: '10px',
                            }}
                        >
                            <ButtonComponent image={google} textData="Continue With Google" />
                            <ButtonComponent image={facebook} textData="Continue With Facebook" />
                            <ButtonComponent image={apple} textData="Continue With Apple" />
                            <ButtonComponent image='' textData="Continue With Phone Number" />
                        </Box>
                        <Divider
                            sx={{
                                margin: '32px 100px',
                                borderRight: 'none',
                                borderBottom: 'none',
                                borderLeft: 'none',
                                borderImage: 'initial',
                                borderTop: '1px solid rgb(41, 41, 41)',
                            }}
                        />
                        {/*  Divider to create hr tag */}

                        <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    padding: '0px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '324px',
                                    margin: '0px auto',
                                    rowGap: '10px',
                                }}>
                                <Box sx={{
                                    paddingBottom: '16px',
                                }}>
                                    <Typography color="white"
                                        sx={{
                                            fontSize: '0.875rem',
                                            fontWeight: '700',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        Email or Username
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        InputLabelProps={{}} // removes the label prop
                                        variant="standard"
                                        placeholder="Email or Username"
                                        type="text"
                                        sx={{
                                            marginBottom: '10px',
                                            border: '1px solid var(--essential-subdued,#878787)',
                                            '&:hover': { border: '1.5px solid var(--essential-subdued,white) ' },
                                            borderRadius: '5px',
                                            color: "white",
                                            '& input:focus': {
                                                outline: 'none',
                                                color: 'white',
                                                border: 'none',
                                                borderBottom: 'none',    // Remove bottom border
                                                borderRadius: 0,         // Remove border radius
                                                boxShadow: 'none',
                                            },
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'white',
                                                textAlign: 'center',
                                                resize: 'none',
                                                padding: '10px',
                                                border: 'none',          // Remove border
                                                borderBottom: 'none',    // Remove bottom border
                                                borderRadius: 0,         // Remove border radius
                                                boxShadow: 'none', // Adjust the padding to increase the height
                                            },
                                        }}
                                        onChange={(e) => setuser(e.target.value)}
                                    />

                                    <Typography color="white"
                                        sx={{
                                            fontSize: '0.875rem',
                                            fontWeight: '700',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        Password
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        InputLabelProps={{}} // removes the label prop
                                        variant="standard"
                                        placeholder="Password"
                                        type={visibility ? "text" : "password"}
                                        sx={{
                                            marginBottom: '10px',
                                            border: '1px solid var(--essential-subdued,#878787)',
                                            '&:hover': { border: '1.5px solid var(--essential-subdued,white) ' },
                                            borderRadius: '5px',
                                            color: "white",
                                            '& input:focus': {
                                                outline: 'none',
                                                color: 'white',
                                                border: 'none',
                                                borderBottom: 'none',    // Remove bottom border
                                                borderRadius: 0,         // Remove border radius
                                                boxShadow: 'none',
                                            },
                                        }}
                                        InputProps={{
                                            endAdornment: <EndAdorment visibility={visibility} setVisibility={setVisibility} />,
                                            style: {
                                                color: 'white',
                                                textAlign: 'center',
                                                resize: 'none',
                                                padding: '10px',
                                                border: 'none',          // Remove border
                                                borderBottom: 'none',    // Remove bottom border
                                                borderRadius: 0,         // Remove border radius
                                                boxShadow: 'none', // Adjust the padding to increase the height
                                            },
                                        }}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        color: 'white',
                                        background: '#1ed760',
                                        borderRadius: '500px',
                                        textAlign: 'center',
                                        border: '1px solid var(--essential-subdued,#878787)',
                                        '&:hover': { border: '1.5px solid var(--essential-subdued,white) ', background: '#1ed760', },
                                        paddingY: '12px',
                                    }}>Submit</Button>
                                <Box sx={{ paddingY: '16px', margin: 'auto' }}>
                                    <Typography sx={{
                                        color: 'white',
                                        '&:hover': { color: '#1ed760' },
                                        cursor: 'pointer'
                                    }}><u>Forgot Your Password?</u></Typography>
                                </Box>
                            </Box>

                        </form>

                        <Divider
                            sx={{
                                margin: '16px 100px',
                                borderRight: 'none',
                                borderBottom: 'none',
                                borderLeft: 'none',
                                borderImage: 'initial',
                                borderTop: '1px solid rgb(41, 41, 41)',
                            }}
                        />

                        <Box
                            sx={{
                                padding: '0px',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '324px',
                                margin: '16px auto',
                                rowGap: '10px',
                            }}>
                            <Box sx={{ paddingY: '16px', margin: 'auto', display: 'flex', flexDirection: 'row' }}>
                                <Typography
                                    sx={{
                                        color: 'gray',
                                    }}
                                >
                                    Don&rsquo;t have an account?&nbsp;
                                </Typography>
                                <Typography sx={{
                                    color: 'white',
                                    '&:hover': { color: '#1ed760' },
                                    cursor: 'pointer'
                                }}>
                                    <u>Sign up for Spotify</u>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
