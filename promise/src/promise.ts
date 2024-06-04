const isValidCart = false;
const isValidOrderId = false;
const isValidOrderSummary = false;
const isValidWallet = false;

const cart = ['shirt', 'pant', 'shoes'];

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

function showOrderSummary(orderData: any): Promise<{ totalAmount: number }> {
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

function updateWallet(totalAmount: number): Promise<{ wallet: any }> {
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

createOrder(cart)
	.then((res) => {
		return proceedToPayment(res.orderId);
	})
	.catch((err) => {
		console.log(err.message); // Only ei catch block er  uporer then gular error handling korbe
	})
	.then((res) => {
		if (!res) return { totalAmount: 0 };
		return showOrderSummary(res.data);
	})
	.then((res) => {
		return updateWallet(res.totalAmount);
	})
	.then((res) => {
		console.log(res.wallet);
	}) // Jodi ami ekhane catch use kortam tahole er uporer sob gula then call er error handle korto
	.then(() => {
		console.log('No matter what happens this then chain will be called');
	});
