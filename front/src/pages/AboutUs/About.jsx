import React, { useEffect, useState } from 'react'
import { Stack, Typography, Grid, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import PetCardsContainer from '../../components/home/pets/PetCardsContainer'
import SvgCard from './SvgCard'
import { Paginationn } from '../../components/petBrowser/Pagination'

const About = (props) => {
    const dispatch = useDispatch()
    const { MeetPetsData } = useSelector((state) => state.pet)

    const type = props.title

    useEffect(() => {
        dispatch(getPets(type))
    }, [])

    return (
        <Stack sx={{ justifyContent: 'center', gap: '40px' }}>
            <Typography
                color="primary.main"
                variant="h3"
                textAlign="center"
                mt={2}
            >
                About Us
            </Typography>
            <Typography sx={{ maxWidth: '1024px', margin: '0 auto' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                odio nobis ut consequatur soluta quaerat eveniet debitis maiores
                natus. Cupiditate alias at nulla cumque eligendi dolores dolore
                nobis? Ad, excepturi! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                <br />
                <br />
                Voluptates corporis eum cupiditate cum ducimus facilis quo
                eveniet? Ratione reiciendis, est dolores repudiandae officia
                aliquid sapiente, id odit vero dolorem culpa.
            </Typography>
            <Typography color="primary.main" variant="h3" textAlign="center">
                Our services
            </Typography>
            <Grid
                display="grid"
                maxWidth="1024px"
                gridTemplateColumns="1fr 1fr 1fr"
                gap={5}
                margin="0 auto"
            >
                <Stack
                    sx={{
                        justifyContent: 'center',
                        padding: '20px',
                        gap: '10px',
                        border: '2px solid #FEF0E9',
                        borderRadius: '20px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}
                    >
                        <SvgCard />
                        <Typography color="secundary.main">
                            Lost Pets
                        </Typography>
                    </Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                    </Typography>
                    <Button
                        component={Link}
                        to="/lostPets"
                        sx={{
                            color: 'secundary.main',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        Lost pets
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        padding: '20px',
                        gap: '10px',
                        border: '2px solid #FEF0E9',
                        borderRadius: '20px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}
                    >
                        <SvgCard />
                        <Typography color="secundary">Found pets</Typography>
                    </Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                    </Typography>
                    <Button
                        component={Link}
                        to="/foundPets"
                        sx={{
                            color: 'primary.main',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        Found pets
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        padding: '20px',
                        gap: '10px',
                        border: '2px solid #FEF0E9',
                        borderRadius: '20px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}
                    >
                        <SvgCard />
                        <Typography color="secundary.main">
                            Post a lost pet
                        </Typography>
                    </Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                    </Typography>
                    <Button
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                        component={Link}
                        to="/createPost"
                    >
                        Post a lost pet
                    </Button>
                </Stack>
            </Grid>
            <Stack gap={10} maxWidth="1440px" width="100%">
                <Box mt={4}>
                    <PetCardsContainer title="Reunited" color="primary" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paginationn />
                </Box>
            </Stack>
            <Stack>
                <Typography
                    variant="h4"
                    color="primary.main"
                    fontFamily={'Merriweather'}
                    fontWeight="bold"
                >
                    Our Team!
                </Typography>
            </Stack>
        </Stack>
    )
}
export default About
