import instanceAxios from "../configs/axios";

const STOCKS_ENDPOINT = "/stocks";
const WATCHLIST_ENDPOINT = "/watchlist";

// Récupérer le prix actuel d'une action
const getStockPrice = async (symbol) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/${symbol}`);
};

// Récupérer l'historique des prix d'une action
const getStockHistory = async (symbol) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/${symbol}/history`);
};

const getLastStock = async () => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}`);
};

// Récupérer OneStock
const getOneStock = async (stockId) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/getOne/${stockId}`);
};

const searchStock = async (symbole) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/latest/${symbole}`);
};

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

export default {
  getStockPrice,
  getStockHistory,
  getLastStock,
  getOneStock,
  searchStock,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
};
