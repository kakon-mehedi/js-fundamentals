export interface ICheckoutManagementSystem {
	createOrder(cart: any): Promise<{ orderId: string }>;
	proceedToPayment(orderId: string): Promise<{ data: any }>;
	showOrderSummary(): Promise<{ totalAmount: number }>;
	updateWallet(): Promise<{ wallet: any }>;
}
