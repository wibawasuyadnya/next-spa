import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: "var(--clr-border)",
                    borderRadius: "5px",
                    backgroundColor: "var(--clr-border)",
                    color: "#F3F3F3",
                    padding: "7px 20px",
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    '&:hover': {
                        backgroundColor: "var(--clr-link)",
                        borderWidth: 2,
                        borderColor: "var(--clr-link)",
                        color: "#F3F3F3"
                    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                }
            }
        }
    }
})

export const ButtonMui = (props) => {
    return(
        <>
            <Button theme={theme} onClick={props.onClick}>
                {props.children}
            </Button>
        </>
    )
} 

