import {createMuiTheme} from "@material-ui/core/styles";
import {colors} from "@material-ui/core";
import * as Colors from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        type: "dark",
        primary: colors.deepPurple,

    },
});

export default theme;