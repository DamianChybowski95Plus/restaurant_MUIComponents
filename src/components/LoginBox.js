import { Box, Typography, FormControl, FormLabel, Input, Button, Link } from "@mui/joy"

const FormBox = {
    width: "30vw",
    display : "flex",
    flexDirection : "column",
    gap : 2,
    borderRadius : "sm",
    border : 1,
    boxShadow : "lg",
    padding: 2
}

export default function LoginBox(){
    return(
        <Box sx={FormBox}>
            <Typography level="h4">Welcome</Typography>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </FormControl>
            <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
            <Typography endDecorator={<Link href="/sign-up">Sign up</Link>} fontSize="sm" sx={{ alignSelf: 'center' }}>
                Don't have an account?
            </Typography>
        </Box>
    )
}