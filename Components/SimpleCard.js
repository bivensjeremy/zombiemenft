import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const SimpleCard = ({ image, text, width, height }) => {
    return (
        <Card variant="none" sx={{ background: 'transparent' }}>
            <CardContent>
                <Image
                    src={image}
                    width={width}
                    height={height}
                />
                <Typography color="#e8e8e8" variant="h5" fontWeight={700}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SimpleCard;