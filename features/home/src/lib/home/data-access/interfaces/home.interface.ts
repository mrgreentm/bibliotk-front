interface Loan {
    loanId: number;
    bookId: number;
    loanDate: [number, number, number];
    dueDate: [number, number, number];
    returnDate: [number, number, number];
    bookTitle: string;
    bookAuthor: string;
}

export interface UserLoansResponse {
    userId: number;
    userName: string;
    email: string;
    loans: Loan[];
}
