import {
    Card,
    CardMedia,
    Container,
    Grid,
    Box
} from '@mui/material'

import Carousel from 'react-material-ui-carousel'

export default function LabTabs() {

    return (

        <Container>

            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>

                <Grid item xs={9} sx>
                    <Box >
                        <Carousel>
                            <Card style={{ height: '100%' }}>

                                <CardMedia sx={{ paddingTop: '56%' }} image='https://source.unsplash.com/random?a=1' />

                            </Card>

                            <Card style={{ height: '100%' }}>

                                <CardMedia sx={{ paddingTop: '56%' }} image='https://source.unsplash.com/random?a=2' />

                            </Card>

                            <Card style={{ height: '100%' }}>

                                <CardMedia sx={{ paddingTop: '56%' }} image='https://source.unsplash.com/random?a=3' />

                            </Card>

                        </Carousel>

                    </Box>

                </Grid>

            </Grid>

        </Container>
    )
}
