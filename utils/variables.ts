export const colors = {
    red: '#8A4D46',
    blue: '#459396',
    secondaryBlue: '#4AA18C',
    secondaryGreen: '#6DD6A0',
    mainGreen: '#468966',
    whiteGreen: '#B4EDE0',
    lightGrey: '#E5E5E5',
    white: '#fff',
};

export const gradients = {
    greenBlue:
        'linear-gradient(131deg, rgba(80,173,152,1) 0%, rgba(74,161,140,1) 100%)',
    blueGreen:
        'linear-gradient(131deg, rgba(74,161,140,1) 0%, rgba(80,173,152,1) 100%)',
};

export const fontFamilies = {
    regular: `'Montserrat', sans-serif`,
    special: `'Reggae One', cursive`,
    normal: `Arial, Helvetica, sans-serif;`,
};

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
};
