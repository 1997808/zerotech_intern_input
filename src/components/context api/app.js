import React, { useState } from 'react'
import ThemeContext from './themeContext'
import Header from './header'
import Main from './main'

export default function ContextApi() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}
