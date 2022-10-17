import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <Box sx={{ textAlign: "center", background: '#5C2E7E' }}>
                <Typography variant="overline">
                    Copyright &copy; {new Date().getFullYear()} 
                </Typography>

                {'  '}

                <Link href="https://bivensblueprint.com"><a target="_blank">
                    <Typography variant="overline" color="primary">
                        Bivens Blueprint, LLC
                    </Typography>
                </a></Link>
            </Box>
        </footer>
    );
}

export default Footer;