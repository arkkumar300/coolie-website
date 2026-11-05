import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AccountDeletion from './pages/AccountDeletion';
function SiteLayout(){return <><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/privacy-policy" element={<PrivacyPolicy/>}/><Route path="/terms" element={<TermsConditions/>}/><Route path="/account-deletion" element={<AccountDeletion/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes><Footer/></>}
export default function App(){return <BrowserRouter><SiteLayout/></BrowserRouter>}
