
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AccountDeletion from './pages/AccountDeletion';

import CooliePartner_PrivacyPolicy from './pages/cooliePartner/PrivacyPolicy';
import CooliePartner_TermsConditions from './pages/cooliePartner/TermsConditions';
import CooliePartner_AccountDeletion from './pages/cooliePartner/AccountDeletion';

function SiteLayout() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/account-deletion" element={<AccountDeletion />} />

                {/* Coolie Partner Routes */}
                <Route
                    path="/cooliePartner/privacy-policy"
                    element={<CooliePartner_PrivacyPolicy />}
                />
                <Route
                    path="/cooliePartner/terms"
                    element={<CooliePartner_TermsConditions />}
                />
                <Route
                    path="/cooliePartner/account-deletion"
                    element={<CooliePartner_AccountDeletion />}
                />

                {/* Redirect unknown routes to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <SiteLayout />
        </BrowserRouter>
    );
}
