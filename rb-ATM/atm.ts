class BankAccount {
	private balance: number;
	private accountNumber: string;
	private pin: number;
	private transactions: string[] = [];

	constructor(accountNumber: string, pin: number, balance: number) {
		this.accountNumber = accountNumber;
		this.pin = pin;
		this.balance = balance;
	}

	public checkBalance(pin: number): string {
		if (pin === this.pin) {
			return `Your balance is: ${this.balance}`;
		} else {
			return "Invalid PIN";
		}
	}

	public deposit(amount: number, pin: number): string {
		if (pin === this.pin) {
			this.balance += amount;
			this.transactions.push(`Deposited ${amount}`);
			return `Deposit successful. Your new balance is: ${this.balance}`;
		} else {
			return "Invalid PIN";
		}
	}

	public withdraw(amount: number, pin: number): string {
		if (pin === this.pin) {
			if (amount <= this.balance) {
				this.balance -= amount;
				this.transactions.push(`Withdraw ${amount}`);
				return `Withdrawal successful. Your new balance is: ${this.balance}`;
			} else {
				return "Insufficient balance";
			}
		} else {
			return "Invalid PIN";
		}
	}

	public getTransactionHistory(): string {
		return this.transactions.join("\n");
	}

	public getAccountNumber(): string {
		return this.accountNumber;
	}
}

export { BankAccount };
