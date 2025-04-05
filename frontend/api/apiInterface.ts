export interface UserInfo {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
}

export interface expenseBill {
    _id: string;
    user: string;
    store: string;
    currency: string;
    CardType: string;
    amount: number;
    tip: number;
    TotalAmount: number;
    date: string;
}

export interface expenseBillItem {
    _id: string;
    itemName: string;
    quantity: number;
    amount: number;
}