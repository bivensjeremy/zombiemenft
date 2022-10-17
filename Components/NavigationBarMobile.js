import { AppBar, Box, Typography, Stack } from "@mui/material";
import Facebook from "../public/facebook.svg"
import Twitter from "../public/twitter.svg"
import Instagram from "../public/instagram.svg"
import Image from "next/image";
import Link from "next/link";

const NavigationBarMobile = () => {
    return (
        <Box sx={{ 
            display: { xs: 'flex', sm: 'none'}, 
            paddingTop: 2, 
            textAlign: 'center' 
        }}>
            <AppBar position="sticky" color="transparent" variant="dense">
                <Typography 
                    color='#5C2E7E' 
                    fontFamily="Potta One" 
                    variant="h1" 
                    fontSize={36} 
                    gutterBottom
                >
                    Zombie Me | NFTs
                </Typography>

                <Stack justifyContent="center" direction="row">
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

                    <Link href="https://instagram.com/bivensjeremy">
                        <a target="_blank">
                            <Image
                                src={Instagram}
                                alt="Instagram Icon"
                                width={42}
                                height={42}
                            />
                        </a>
                    </Link>
                </Stack>
            </AppBar>
        </Box>
    );
}

export default NavigationBarMobile