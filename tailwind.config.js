module.exports = {
  purge: {
    content: ['./src/**/*.tsx']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '0px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    colors: {
      primary: {
        blue: {
          light: '#85C5FF',
          DEFAULT: '#0085FF',
          dark: '#00488A',
          darkest: '#0c163f',
          darkWithOpacity: '#191919b3',
          darkestWithOpacity: '#191919e6'
        },
        purple: {
          light: '#CB89FF',
          DEFAULT: '#8F00FF',
          dark: '#4D008A',
          darkest: '#230c41'
        }
      },
      secondary: {
        white: {
          light: '#FFFFFF',
          DEFAULT: '#F1F1F1',
          withOpacity: '#F1F1F140',
          withHighOpacity: '#f1f1f10d'
        },
        black: {
          dark: '#000000',
          DEFAULT: '#1A1A1A',
          darkWithOpacity: '#00000080'
        },
        red: {
          light: '#FF8989',
          DEFAULT: '#FF0F00',
          dark: '#8A0000',
          darkWithOpacity: '#8A0000b3'
        }
      },
      transparent: 'transparent'
    },
    fontFamily: {
      heading: ['Secular One', 'sans-serif'],
      body: ['Secular One', 'sans-serif']
    },
    fontSize: {
      xxs: ['12px', { lineHeight: '14.4px' }],
      xs: ['14px', { lineHeight: '16.8px' }],
      sm: ['16px', { lineHeight: '19.2px' }],
      md: ['20px', { lineHeight: '24px' }],
      lg: ['32px', { lineHeight: '38.4px' }],
      xl: ['40px', { lineHeight: '48px' }],
      '2xl': ['50px', { lineHeight: '60px' }],
      '3xl': ['60px', { lineHeight: '72px' }]
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '800'
    },
    spacing: {
      0: '0px',
      0.125: '1px',
      0.25: '2px',
      0.5: '4px',
      0.625: '5px',
      0.75: '6px',
      1: '8px',
      1.25: '10px',
      1.5: '12px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      3.5: '28px',
      3.75: '30px',
      4: '32px',
      4.5: '36px',
      5: '40px',
      5.5: '44px',
      5.75: '46px',
      6: '48px',
      6.25: '50px',
      6.5: '52px',
      7: '56px',
      8: '64px',
      8.25: '66px',
      8.5: '68px',
      9: '72px',
      9.25: '74px',
      9.5: '76px',
      10: '80px',
      10.5: '84px',
      11.25: '90px',
      11.5: '92px',
      12: '96px',
      12.5: '100px',
      13: '104px',
      14: '112px',
      15: '120px'
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto'
    },
    extend: {
      width: {
        0.375: '3px',
        2.5: '20px',
        5: '40px',
        6.25: '50px',
        12.5: '100px',
        40: '320px',
        58: '464px',
        '1/3': '33.33%',
        '1/2': '50%',
        '2/3': '66.66%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        'screen-1/4': '25vw',
        'screen-1/3': '33.33vw',
        'screen-2/3': '66.66vw',
        'screen-3/4': '75vw',
        'screen-8/10': '80vw'
      },
      minWidth: {
        6.75: '100px',
        40: '320px',
        'screen-minus-header': 'calc(100vw - 320px)'
      },
      maxWidth: {
        27.5: '220px',
        37.5: '300px',
        47.5: '380px',
        '1/2': '50%'
      },
      height: {
        0.375: '3px',
        2.5: '20px',
        5: '40px',
        6.25: '50px',
        8: '64px',
        9.125: '73px',
        12.5: '100px',
        31.25: '250px',
        43.5: '348px',
        '9/10': '90%',
        'screen-w-6/10': '60vw',
        'screen-minus-header': 'calc(100vh - 68px)'
      },
      minHeight: {
        12.5: '100px'
      },
      maxHeight: {
        62.5: '500px'
      },
      opacity: {
        0: '0',
        12: '.12',
        70: '.7',
        80: '.8',
        100: '1'
      },
      scale: {
        130: '1.3'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
