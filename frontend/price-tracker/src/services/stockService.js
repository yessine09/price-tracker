import instanceAxios from "../configs/axios";

const STOCKS_ENDPOINT = "/stocks";
const WATCHLIST_ENDPOINT = "/watchlist";

// ----------------------Stocks EndPoints----------------------

// Récupérer le prix actuel d'une action
const getStockPrice = async (symbol) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/${symbol}`);
};

// Récupérer l'historique des prix d'une action
const getStockHistory = async (symbol) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/${symbol}/history`);
};

// Récupérer lastStock
const getLastStock = async () => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}`);
};

// Récupérer OneStock for detailStock
const getOneStock = async (stockId) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/getOne/${stockId}`);
};

//Search Stock by symbol
const searchStock = async (symbole) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/latest/${symbole}`);
};

// ----------------------WatchList EndPoints----------------------

// Ajouter une action à la watchlist d'un utilisateur
const addToWatchlist = async (userId, stockId) => {
  return await instanceAxios.post(
    `${WATCHLIST_ENDPOINT}/${userId}/add/${stockId}`
  );
};

// Retirer une action de la watchlist d'un utilisateur
const removeFromWatchlist = async (userId, stockId) => {
  return await instanceAxios.delete(
    `${WATCHLIST_ENDPOINT}/${userId}/remove/${stockId}`
  );
};

// Récupérer la watchlist d'un utilisateur
const getWatchlist = async (userId) => {
  return await instanceAxios.get(`${WATCHLIST_ENDPOINT}/${userId}`);
};

// ----------------------Historical EndPoints----------------------

// Récupérer l'historique price scraped
const getHistorical = async (symbol) => {
  return await instanceAxios.get(`historical-price/${symbol}`);
};

// Récupérer l'historique price pour 7 days
const getHistoricalData = async (symbol) => {
  return await instanceAxios.get(`historical-price/last7/${symbol}`);
};

export default {
  getStockPrice,
  getStockHistory,
  getLastStock,
  getOneStock,
  searchStock,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
  getHistorical,
  getHistoricalData,
};
