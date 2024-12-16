import { Routes, Route, Navigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import RequestAccess from './pages/RequestAccess'
import SearchList, { Student } from './components/SearchList'
import InstallPWA from './components/InstallPWA'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #ffeb3b 0%, #8bc34a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0;
  width: 100vw;
  position: relative;
`;

const NavigationBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 8px 16px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  backdrop-filter: blur(5px);
  transition: background 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

function App() {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [students, setStudents] = useState<Student[]>([]);
  const location = useLocation();

  useEffect(() => {
    const savedStatus = localStorage.getItem('approvalStatus');
    if (savedStatus === 'approved') {
      setHasAccess(true);
    }

    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
    localStorage.setItem('approvalStatus', 'approved');
  };

  if (hasAccess === null) {
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={hasAccess ? <Navigate to="/app" replace /> : <Navigate to="/request" replace />} />
          <Route path="/app" element={hasAccess ? <SearchList students={students} setStudents={setStudents} /> : <Navigate to="/request" replace />} />
          <Route path="/request" element={hasAccess ? <Navigate to="/app" replace /> : <RequestAccess onAccessGranted={handleAccessGranted} />} />
        </Routes>
        <InstallPWA />
      </AppContainer>
    </>
  );
}

export default App;
