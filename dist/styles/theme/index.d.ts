import light from './light';
declare const untypedThemes: {
    light: {
        colors: {
            primary: {
                rose: string;
                orange: string;
                yellow: string;
                yellowBee800: string;
                yellowBee400: string;
                yellowBee200: string;
                yellowBee100: string;
                yellowBee50: string;
                lemon: string;
                aquamarine: string;
                turquoise: string;
                sky: string;
                blue: string;
                oceanicBlue800: string;
                oceanicBlue400: string;
                oceanicBlue200: string;
                oceanicBlue100: string;
                oceanicBlue50: string;
                purple: string;
                purpleSunset800: string;
                purpleSunset600: string;
                purpleSunset400: string;
                purpleSunset200: string;
                purpleSunset100: string;
                purpleSunset50: string;
                violet: string;
                gray100: string;
                gray200: string;
                gray300: string;
                gray400: string;
                gray500: string;
                gray600: string;
                gray700: string;
                gray800: string;
                gray900: string;
            };
            secondary: {
                supportError800: string;
                supportError400: string;
                supportError200: string;
                supportError100: string;
                supportError50: string;
                supportWarning800: string;
                supportWarning400: string;
                supportWarning200: string;
                supportWarning100: string;
                supportWarning50: string;
                supportSuccess800: string;
                supportSuccess400: string;
                supportSuccess200: string;
                supportSuccess100: string;
                supportSuccess50: string;
            };
            shadows: {
                default: string;
            };
        };
        fonts: {
            abel: string;
            monserrat: string;
            lato: string;
        };
        fontSizes: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            larger: string;
            big: string;
            bigger: string;
            higher: string;
        };
        fontWeights: {
            hairline: number;
            thin: number;
            light: number;
            normal: number;
            medium: number;
            semibold: number;
            bold: number;
            extrabold: number;
            black: number;
        };
        lineHeights: {
            normal: string;
            none: number;
            shorter: number;
            short: number;
            base: number;
            tall: number;
            taller: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
        };
        letterSpacings: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
    };
};
export declare type Theme = typeof light;
export declare type ThemeKey = keyof typeof untypedThemes;
export declare type ThemeColor = keyof Theme['colors'];
declare const themes: {
    [k in ThemeKey]: Theme;
};
export default themes;
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
    }
}
