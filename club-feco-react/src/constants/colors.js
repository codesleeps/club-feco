// Color scheme extracted from original site
export const colors = {
  // Primary brand colors
  gold: '#ffb338',
  lightShadow: '#77571d',
  darkShadow: '#3e2904',

  // Background colors
  primaryBg: '#050607',
  navbarBg: '#000103',
  newsSectionBg: '#050505',
  cardBg: 'rgb(8, 8, 9)',
  footerBg: 'rgb(3, 3, 3)',

  // Text colors
  primaryText: '#fff',
  goldText: '#ffb338',
  accentText: '#c48f45',

  // Gradient colors for animations
  gradientStart: '#c48f45',
  gradientMiddle: '#d00707',
  gradientEnd: 'rgb(104, 250, 13)',

  // Button colors
  buttonBg: '#111',
  buttonHoverBg: 'rgb(4, 4, 4)',
  buttonText: 'rgb(255, 255, 255)',
  buttonBorder: 'gold',

  // Rainbow gradient for animated buttons
  rainbow: [
    '#ff0000',
    '#ff7300',
    '#fffb00',
    '#48ff00',
    '#00ffd5',
    '#002bff',
    '#7a00ff',
    '#ff00c8',
    '#ff0000'
  ]
};

// CSS Variables for easy use in styled-components or CSS-in-JS
export const cssVariables = `
  :root {
    --gold: ${colors.gold};
    --light-shadow: ${colors.lightShadow};
    --dark-shadow: ${colors.darkShadow};
    --primary-bg: ${colors.primaryBg};
    --navbar-bg: ${colors.navbarBg};
    --card-bg: ${colors.cardBg};
    --primary-text: ${colors.primaryText};
    --gold-text: ${colors.goldText};
  }
`;