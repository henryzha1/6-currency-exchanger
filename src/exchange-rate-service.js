export default class ExchangeRateService {
  static async getRate(country) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonResponse = await response.json();
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonResponse.error-type}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}


