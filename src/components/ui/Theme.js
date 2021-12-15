import { createTheme } from "@material-ui/core/styles";

const RoyalGold = "EAC103"

export default createTheme({
    palette: {
        type: "darkMode",
        common: {
            gold: `${RoyalGold}`,
        },
        secondary: {
            main: `${RoyalGold}`
        },
        background: {
            default: '#000000'
        }
    }
});