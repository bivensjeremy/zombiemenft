import { CloudDownload } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from "next/image";
import BZ6201 from "../public/BivensZombie_6201.jpg"
import BZ6244 from "../public/BivensZombie_6244.jpg"
import BZ6255 from "../public/BivensZombie_6255.jpg"

const DownloadCardData = [
    {
        id: 1,
        title: "Bivens Zombie Standard",
        imageCode: "BZ6201",
        image: BZ6201
    },
    {
        id: 2,
        title: "Bivens Zombie Pro",
        imageCode: "BZ6244",
        image: BZ6244
    },
    {
        id: 3,
        title: "Bivens Zombie Max",
        imageCode: "BZ6255",
        image: BZ6255
    },
]
const downloadImage = (image, imageCode) => {
        // using Java Script method to get PDF file
        fetch(image.src).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${imageCode}.png`;
                alink.click();
            })
        })
}
const DownloadCard = ({ id, imageCode, image, title, }) => {
    return(
        <Grid xs={12} sm={4} id={id}>
            <Card elevation={7} 
                sx={{ 
                    backgroundColor: '#F5F5F5', 
                    maxWidth: 300,
                    borderColor: '#F5F5F5', 
                    marginX: 'auto'
                    }}
            >
                <Card sx={{ borderRadius: 0, maxHeight: 400 }}>
                    <Image
                        src={image}
                        alt="zombie Image"
                        layout="intrinsic"
                        objectFit="contain"
                    />
                </Card>

                <CardContent align='center'>
                    <Typography variant="h5" fontWeight={700} gutterBottom noWrap>
                        {title}
                    </Typography>

                    <Button 
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<CloudDownload />}
                        onClick={() => downloadImage(image, imageCode)}
                    >
                        Download
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
const Downloads = () => {
    return (
        <Box paddingY={15}>
            <Typography 
                variant='h3' 
                textAlign="center" 
                gutterBottom 
                fontWeight={700} 
                color="#252525"
            >
                Download Yours Today
            </Typography>

            <Grid container paddingX={{ xs: 2, md: 12 }}>
                {DownloadCardData.map(
                    DownloadCard
                )}
            </Grid>
        </Box>
    );
}

export default Downloads;