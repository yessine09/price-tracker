import instanceAxios from "../configs/axios";

const STOCKS_ENDPOINT = "/stocks";
const ACTIONS_ENDPOINT = "/actions";
const WATCHLIST_ENDPOINT = "/watchlist";

// Récupérer le prix actuel d'une action
const getStockPrice = async (symbol) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/${symbol}`);
};

// Récupérer l'historique des prix d'une action
const getStockHistory = async (symbol) => {
  return await instanceAxios.get(`${STOCKS_ENDPOINT}/${symbol}/history`);
};

// Créer une nouvelle action
const createAction = async (actionData) => {
  return await instanceAxios.post(`${ACTIONS_ENDPOINT}/create`, actionData);
};

// Récupérer toutes les actions disponibles
const getAllActions = async () => {
  return await instanceAxios.get(ACTIONS_ENDPOINT);
};

// Récupérer les détails d'une action spécifique
const getActionDetails = async (symbol) => {
  return await instanceAxios.get(`${ACTIONS_ENDPOINT}/${symbol}`);
};

// Ajouter une action à la watchlist d'un utilisateur
const addToWatchlist = async (userId, actionId) => {
  return await instanceAxios.post(`${WATCHLIST_ENDPOINT}/${userId}/add/${actionId}`);
};

// Retirer une action de la watchlist d'un utilisateur
const removeFromWatchlist = async (userId, actionId) => {
  return await instanceAxios.delete(`${WATCHLIST_ENDPOINT}/${userId}/remove/${actionId}`);
};

// Récupérer la watchlist d'un utilisateur
const getWatchlist = async (userId) => {
  return await instanceAxios.get(`${WATCHLIST_ENDPOINT}/${userId}`);
};

export default {
  getStockPrice,
  getStockHistory,
  createAction,
  getAllActions,
  getActionDetails,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
};
