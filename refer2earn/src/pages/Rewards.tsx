import React from 'react';

const Rewards: React.FC = () => {
    // Sample rewards data
    const rewards = [
        { id: 1, name: 'Gift Card', points: 100 },
        { id: 2, name: 'Discount Coupon', points: 200 },
        { id: 3, name: 'Free Product', points: 500 },
    ];

    return (
        <div>
            <h1>Your Rewards</h1>
            <ul>
                {rewards.map(reward => (
                    <li key={reward.id}>
                        {reward.name} - {reward.points} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rewards;