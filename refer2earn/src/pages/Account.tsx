import React from 'react';
import AccountManagement from '../components/AccountManagement';
import Referral from '../components/Referral';

const Account: React.FC = () => {
    return (
        <div>
            <h1>Your Account</h1>
            <AccountManagement />
            <Referral />
        </div>
    );
};

export default Account;