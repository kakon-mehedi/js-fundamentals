const isValidCart = false;
const isValidOrderId = false;
const isValidOrderSummary = false;
const isValidWallet = false;

function createOrder(cart: any): Promise<{ orderId: string }> {
	const createOrderPromise: Promise<{ orderId: string }> = new Promise(
		(resolve, reject) => {
			if (isValidCart) {
				const data = { orderId: 'demoOrderId' };
				resolve(data);
			} else {
				const err = new Error('Cart is not valid');
				reject(err);
			}
		}
	);

	return createOrderPromise;
}

function proceedToPayment(orderId: string): Promise<{ data: any }> {
	const paymentPromise: Promise<{ data: any }> = new Promise(
		(resolve, reject) => {
			if (isValidOrderId) {
				resolve({ data: 'This is dummy data' });
			} else {
				const err = new Error('Order id is not valid');
				reject(err);
			}
		}
	);

	return paymentPromise;
}

function showOrderSummary(): Promise<{ totalAmount: number }> {
	const orderSummaryPromise: Promise<{ totalAmount: number }> = new Promise(
		(resolve, reject) => {
			if (isValidOrderSummary) {
				resolve({ totalAmount: 500 });
			} else {
				const err = new Error('Order summary is not valid');
				reject(err);
			}
		}
	);

	return orderSummaryPromise;
}

function updateWallet(): Promise<{ wallet: any }> {
	const updateWalletPromise: Promise<{ wallet: any }> = new Promise(
		(resolve, reject) => {
			if (isValidWallet) {
				resolve({ wallet: 'Valid wallet' });
			} else {
				const err = new Error('Wallet is not valid');
				reject(err);
			}
		}
	);

	return updateWalletPromise;
}
