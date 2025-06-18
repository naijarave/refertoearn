import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const signUpUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error signing up user');
    }
};

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error fetching user data');
    }
};

export const updateUserData = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error updating user data');
    }
};

export const getReferralLinks = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/referrals/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error fetching referral links');
    }
};

export const claimReward = async (userId, rewardId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/rewards/claim`, { userId, rewardId });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error claiming reward');
    }
};