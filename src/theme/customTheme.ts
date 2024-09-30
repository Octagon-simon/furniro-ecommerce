import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     900: "#1a202c",
  //   },
  // },
  config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
	colors: {
		primary: '#B88E2F',
    primary_light: '#FFF3E3',
    primary_lighter: '#FCF8F3',
    
    red: '#EB5757',
    green: '#2EC1AC'
  },
  // components: {
  //   Button: {
  //     baseStyle: {
  //       fontSize: 'sm',
  //     },
  //   },
  // },
});

export default customTheme;
