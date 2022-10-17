import { Box, Container, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from "next/image";
import Link from "next/link";
import Phone from "../public/phonezombie.png"

const Tagline = () => {
    return (
        <Container sx={{ paddingTop: 15 }}>
            <Grid container spacing={4} display="flex">
                <Grid xs={12} md={7}>
                    <Typography 
                        variant="h2" 
                        fontFamily="Potta One" 
                        color="#5C2E7E" 
                        gutterBottom 
                        sx={{ textShadow: '#e8e8e8 5px 3px' }}
                    >
                        Get Your Zombie NFT Today!
                    </Typography>

                    <Typography variant="h4" color="#252525" fontWeight={700} sx={{ paddingY: 1 }}>
                        Download your very own Zombie NFT of your's truly! 
                    </Typography>

                    <Box>
                        <Link href="/#downloads">
                            <a>
                                <Button 
                                    variant="contained"
                                    size="large"
                                    sx={{ marginY: 2 }}
                                >
                                    Downloads
                                </Button>
                            </a>
                        </Link>
                        
                    </Box>
                </Grid>

                <Grid xs={12} md={5} sx={{ display: "block", alignSelf: "flex-end" }}>
                    <Box sx={{ width: {xs: '100vw', md: '40vw'} }}>
                        <Image
                            src={Phone}
                            alt="iPhone Template Image"
                            layout='responsive'
                            priority
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Tagline;