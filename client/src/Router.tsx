import {Routes, Route} from 'react-router-dom'
import App from './App'
import { OtherComponent } from './OtherComponent'
import { Topbar } from './Topbar'
export const Router = () => {
    return <>
    <Topbar />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test/:test/:id/:mando" element={<OtherComponent />} />
    </Routes> </>
}