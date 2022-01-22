    import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
        margin: '10px',
        fontSize: '2rem'
    },
    button:{
        marginTop: '40px'
    },
    toolbar:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchHead:{
        padding: '1rem 1rem 0rem 1rem '
    },
    searchAc:{
        width: "70%",
        padding:"0.5rem"
    },

    searchField:{
        padding:"0.5rem",
        width: "70%",
        
    },
    searchBtn:{
        width: "70%",
        width: "15%"
    }
    
}))


export default useStyles;