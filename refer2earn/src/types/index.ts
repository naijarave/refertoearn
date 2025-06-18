export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Referral {
    id: string;
    userId: string;
    referralCode: string;
    referredUserId?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Reward {
    id: string;
    userId: string;
    amount: number;
    claimed: boolean;
    createdAt: Date;
    updatedAt: Date;
}