import { AppBar, Box, Toolbar, Typography, Stack } from "@mui/material";
import Facebook from "../public/facebook.svg"
import Twitter from "../public/twitter.svg"
import Instagram from "../public/instagram.svg"
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
    return (
        <Box sx={{ 
            flexGrow: 1, 
            paddingTop: 4, 
            display: {xs: 'none', sm: 'flex'}
        }}>
            <AppBar position="sticky" color="transparent" variant="dense">
                <Toolbar>
                    <Typography 
                        color='#5C2E7E' 
                        fontFamily="Potta One" 
                        variant="h1" 
                        fontSize={36} 
                    >
                        Zombie Me | NFTs
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack direction="row">
                        <Box sx={{ paddingX: 2 }}>
                            <Link href="https://facebook.com/bivens.jeremy">
                                <a target="_blank">
                                    <Image
                                        src={Facebook}
                                        alt="Facbook Icon"
                                        width={42}
                                        height={42}
                                    />
                                </a>
                            </Link>
                        </Box>
                        
                        <Box sx={{ paddingX: 2 }}>
                            <Link href="https://twitter.com/_bivens">
                                <a target="_blank">
                                    <Image
                                        src={Twitter}
                                        alt="Twitter Icon"
                                        width={42}
                                        height={42}
                                    />
                                </a>
                            </Link>
                        </Box>

                        <Box sx={{ paddingX: 2 }}>
                            <Link href="https://instagram.com">
                                <a target="_blank">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram Icon"
                                        width={42}
                                        height={42}
                                    />
                                </a>
                            </Link>
                            
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar;