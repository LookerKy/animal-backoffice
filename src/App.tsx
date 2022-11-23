import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './pages/global/Topbar';
import Dashboard from './pages/dashboard';
import Team from './pages/team';
import Contacts from './pages/contacts';
import Sidebar from './pages/global/Sidebar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              {/*<Route path="/" element={<Invoice />}></Route>*/}
              {/*<Route path="/" element={<Form />}></Route>*/}
              {/*<Route path="/" element={<Bar />}></Route>*/}
              {/*<Route path="/" element={<Pie />}></Route>*/}
              {/*<Route path="/" element={<Line />}></Route>*/}
              {/*<Route path="/" element={<FAQ />}></Route>*/}
              {/*<Route path="/" element={<Geography />}></Route>*/}
              {/*<Route path="/" element={<Calendar />}></Route>*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
