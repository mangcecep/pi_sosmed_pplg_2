import { Box, Button, CssBaseline, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '900px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const Register = () => {
    return (
        <>
            <CssBaseline enableColorScheme />
            <SignUpContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Register
                    </Typography>
                    <Box
                        component="form"
                        // onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                            <Grid item size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="name">Username</FormLabel>
                                    <TextField
                                        autoComplete="username"
                                        name="username"
                                        required
                                        fullWidth
                                        id="username"
                                        placeholder="Username"
                                    // error={nameError}
                                    // helperText={nameErrorMessage}
                                    // color={nameError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <TextField
                                        autoComplete="email"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        placeholder="email"
                                    // error={nameError}
                                    // helperText={nameErrorMessage}
                                    // color={nameError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <TextField
                                        type='password'
                                        autoComplete="password"
                                        name="password"
                                        required
                                        fullWidth
                                        id="password"
                                        placeholder="password"
                                    // error={nameError}
                                    // helperText={nameErrorMessage}
                                    // color={nameError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                                    <TextField
                                        autoComplete="firstName"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        placeholder="firstName"
                                    // error={nameError}
                                    // helperText={nameErrorMessage}
                                    // color={nameError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                    <TextField
                                        autoComplete="lastName"
                                        name="lastName"
                                        required
                                        fullWidth
                                        id="lastName"
                                        placeholder="lastName"
                                    // error={nameError}
                                    // helperText={nameErrorMessage}
                                    // color={nameError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth style={{ marginTop: 24 }}>
                                    <InputLabel id="demo-simple-select-class">Classes</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-class"
                                        id="demo-simple-select"
                                        //   value={age}
                                        label="Classes"
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={"X"}>X</MenuItem>
                                        <MenuItem value={"XI"}>XI</MenuItem>
                                        <MenuItem value={"XII"}>XII</MenuItem>
                                        <MenuItem value={"XIII"}>XII</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth style={{ marginTop: 24 }}>
                                    <InputLabel id="demo-simple-select-majors">Majors</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-majors"
                                        id="demo-simple-select"
                                        //   value={age}
                                        label="Majors"
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={"PPLG"}>PPLG</MenuItem>
                                        <MenuItem value={"TKRO"}>TKRO</MenuItem>
                                        <MenuItem value={"TJKT"}>TJKT</MenuItem>
                                        <MenuItem value={"TSM"}>TSM</MenuItem>
                                        <MenuItem value={"TP"}>TP</MenuItem>
                                        <MenuItem value={"HR"}>HR</MenuItem>
                                        <MenuItem value={"MPLB"}>MPLB</MenuItem>
                                        <MenuItem value={"DKV"}>DKV</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item size={6}>
                                <FormControl fullWidth style={{ marginTop: 24 }}>
                                    <InputLabel id="demo-simple-select-gender">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-gender"
                                        id="demo-simple-select"
                                        //   value={age}
                                        label="Majors"
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={"M"}>Male</MenuItem>
                                        <MenuItem value={"F"}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        //   onClick={validateInputs}
                        >
                            Sign UP
                        </Button>
                        <center>
                            <Link to="/login">Have menu?</Link>
                        </center>
                    </Box>
                </Card>
            </SignUpContainer>
        </>
    )
}

export default Register