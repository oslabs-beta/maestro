export function customSelectTheme(theme: any) {
  return {
    ...theme,
    color: '#3371e3',
    colors: {
      ...theme.colors,
      primary25:  '#f1f6ff',
      primary: '#3371e3',
      neutral5:'#333',
      neutral10:'#333',
      neutral20:'#3371e3',
      neutral30:'#3371e3',
      neutral40:'#3371e3',
      neutral50:'#3371e3',
      neutral60:'#3371e3',
      neutral70:'#3371e3',
      neutral80:'#3371e3',
      neutral90:'#3371e3',
    },
    borderRadius: 5,
  }
}

export function customSelectThemeSeverity(theme: any) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25:  '#f1f6ff',
      neutral5:'#ed6a5a',
      neutral10:'#ed6a5a',
      neutral20: '#ed6a5a',
      neutral30: '#ed6a5a',
      neutral40: '#ed6a5a',
      neutral50: '#ed6a5a',
      neutral60: '#ed6a5a',
      neutral70: '#ed6a5a',
      neutral80: '#ed6a5a',
      neutral90: '#ed6a5a',
    },
  }
}



export function customSelectThemeNamespaces(theme: any) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25:  '#f1f6ff',
      neutral5:'#333',
      neutral10:'#333',
      neutral20: '#333',
      neutral30: '#333',
      neutral40: '#333',
      neutral50: '#333',
      neutral60: '#333',
      neutral70: '#333',
      neutral80: '#333',
      neutral90: '#333',
    },
  }
}

export const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    background: '#20C997',
    borderColor: '#20C997',
    // Removes weird border around container
    // boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? '#3371e3' : '#20C997'
    }
  }),
  placeholder: (defaultStyles: any) => {
    return {
        ...defaultStyles,
        color: '#333',
    }
  },
  menu: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    borderBottom: '1px dotted pink',
    colors: {
      primary25:  '#f1f6ff',
      priamry: '#3371e3',
      neutral120: '#333',
      neutral150: '#333',
      neutral180: '#333',
    },
    // backgroundColor: 'red'
  }),
}