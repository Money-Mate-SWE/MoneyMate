export interface UserInfo {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
}

export interface expenseBill {
    user: string;
    store: string;
    currency: string;
    CardType: string;
    amount: number;
    tip: number;
    TotalAmount: number;
    date: string;
}