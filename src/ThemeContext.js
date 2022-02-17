import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

export default class ThemeProvider extends Component {
    state = {
        currentTheme: 'pink'
    }
    render() {
    return (
        <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
        </ThemeContext.Provider>
    )
  }
}

