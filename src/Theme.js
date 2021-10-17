import {createGlobalStyle} from 'styled-components'
export const lightTheme = {
    body: "#f9fafe",
    fontColorNormal: "black",
    fontColorCorporative : "#227ec0",
    componetsColor: "#fefefe",
    colorFontLeftBar: "#757575",
    colorInputText: "black",
    bordersColor : "#b9b9b9",
    iconGray: "#757575",
    textGray : "#757575",
    inputTextTheme: "#f9fafe",
    inputTextThemeBorderColor : "##ced4da"
}

export const darkTheme = {
    body: "#19232a",
    fontColorNormal: "white",
    fontColorCorporative : "#227ec0",
    componentsColor: "#0f1112",
    colorFontLeftBar: "#757575",
    colorInputText: "white",
    bordersColor : "#000000",
    iconGray: "white",
    textGray : "white",
    inputTextTheme: "#19232a",
    inputTextThemeBorderColor : "#19232a"

    //#0f1112
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body}
    }

    .componentTheme{
        background-color: ${props => props.theme.componentsColor} !important;
        border-right: 1px solid ${props => props.theme.bordersColor} !important;
    }

    .menuNavMobileTheme{
        color: ${props => props.theme.iconGray} !important;
    }



    .sidebar li a{
        color: ${props => props.theme.iconGray} !important;
    }
    .sidebar li a .links_name{
        color: ${props => props.theme.textGray} !important;

    }

    .sidebar2{
        border-left: 1px solid ${props => props.theme.bordersColor} !important;
    }

    .clash-card{
        background-color: ${props => props.theme.componentsColor} !important;
    }

    .cardJobList{
        background-color: ${props => props.theme.componentsColor} !important;
    }

    .colorTextTheme{
        color: ${props => props.theme.fontColorNormal} !important;
    }

    #navbarNav i{
        color: ${props => props.theme.iconGray} !important;
    }

    #inputSearchNavbar{
        background: ${props => props.theme.inputTextTheme} !important;
        border-color: ${props => props.theme.inputTextTheme} !important;
        color: ${props => props.theme.colorInputText} !important;
    }

    .navMobile .container-fluid{
        background-color: ${props => props.theme.componentsColor} !important; 
    }



`