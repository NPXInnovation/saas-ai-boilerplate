const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	stripe: {
		free: "price_1MQDDNEh4b291ZdRdtbpU0gJ",
		entry: "price_1MQDCIEh4b291ZdRY0zcmH60",
		pro: "price_1MQB01Eh4b291ZdRwUfMJ4lY"
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://app.openaitemplate.com",
	stripe: {
		free: "price_1MKISQKDl4BWQxUPCjluSykk",
		entry: "price_1MKISQKDl4BWQxUPCjluSykk",
		pro: "price_1MKISQKDl4BWQxUPCjluSykk"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;