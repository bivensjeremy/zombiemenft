import { Stack } from "@mui/material";
import SkullImage from "../public/skull.svg"
import HeartImage from "../public/broken_heart.svg"
import DizzyImage from "../public/dizzy_icon.svg"
import SimpleCard from "./SimpleCard";


const Quotes = () => {
    return (
        <>
            <Stack 
                justifyContent="space-around" 
                direction={{ xs: "column", sm: "row"} }
                sx={{ 
                    paddingTop: 10, 
                    paddingX: 7,
                    textAlign: 'center', 
                }}
            >
                <SimpleCard
                    image={SkullImage}
                    text="Collect Them All"
                    width={150}
                    height={150}
                />
                <SimpleCard
                    image={HeartImage}
                    text="Better Than Pokemon Cards"
                    width={150}
                    height={150}
                />
                <SimpleCard
                    image={DizzyImage}
                    text="Look! I&apos;m a Zombie"
                    width={150}
                    height={150}
                />
            </Stack>
        </>
    );
}

export default Quotes;