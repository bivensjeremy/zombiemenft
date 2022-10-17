import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Link from 'next/link';

const CallToAction = () => {
    return (
        <>
            <Grid container sx={{ paddingY: 15, textAlign: 'center' }}>
                <Grid xs={12} sm={6}>
                    <Typography variant='h3' fontWeight={700} marginX={12}>
                        Ready to discuss your own project?
                    </Typography>
                </Grid>

                <Grid xs={12} sm={6} sx={{ marginTop: {xs: 5, md: 'none'} }}>
                    <Typography fontWeight={700} variant="h5">
                        Contact Me
                    </Typography>

                    <Typography>
                        Email: {' '}
                        <span style={{ color: "#42a5f5" }}>
                            <Link href="mailto:admin@bivensblueprint.com?subject=Email From Zombie NFT Website"><a>
                                admin@bivensblueprint.com
                            </a></Link>
                        </span>
                    </Typography>

                    <Typography>
                        Facebook Business: {' '}
                        <span style={{ color: "#42a5f5" }}>
                            <Link href="https://facebook.com/bivensblueprint"><a>
                                Facebook.com/BivensBlueprint
                            </a></Link>
                        </span>
                    </Typography>

                    <Typography>
                        Honeybook Contact: {' '}
                        <span style={{ color: "#42a5f5" }}>
                            <Link href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d"><a>
                                Formal Inquiry Link
                            </a></Link>
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default CallToAction;