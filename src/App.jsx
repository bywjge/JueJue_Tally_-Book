// App.jsx
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation
} from "react-router-dom";
import routes from '@/router';
import { ConfigProvider } from 'zarm';
import NavBar from "@/components/NavBar";
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css'


function App() {
  const location = useLocation();
  const { pathname } = location;
  const needNav = ['/', '/data', '/user'];
  const [showNav, setShowNav] = useState(false)
  useEffect(()=>{
    setShowNav(needNav.includes(pathname))
  }, [pathname])

  return <div>
    <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
      <Routes>
        {routes.map(route => <Route exact key={route.path}
                                    path={route.path}
                                    element={<route.component/>}
        />)}
      </Routes>
    </ConfigProvider>
    <NavBar showNav={showNav} />
  </div>


}

export default App