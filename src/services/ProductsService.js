import { axiosInstance } from "../utils/AxiosInstance";
export const getActiveSessions = async (date, session) => {
  try {
    let response = await axiosInstance.get(
      "/product/parSession?date=" + date + "&session=" + session
    );
    if (response.status !== 200) {
      throw new Error("Quelque chose s'est mal passé");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    if (!error.response) {
      throw new Error("Erreur de Connexion !");
    } else if (error.response.status === 401) {
      throw new Error("Vous n'etes pas autorisé");
    } else if (error.response.status === 403) {
      throw new Error("Vous n'avez pas la permission");
    } else if (error.response.status === 406) {
      throw new Error("Un des champs n'est pas conforme aux normes");
    } else if (error.response.status === 409) {
      throw new Error("Un des champs uniques existe déja");
    } else if (error.response.status === 500) {
      throw new Error("Erreur du Serveur");
    } else {
      throw new Error("Quelque chose s'est mal passé");
    }
  }
};

export const getActiveStations = async (date) => {
  try {
    let response = await axiosInstance.get(
      "/product/activeStations?date=" + date
    );
    if (response.status !== 200) {
      throw new Error("Quelque chose s'est mal passé");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    if (!error.response) {
      throw new Error("Erreur de Connexion !");
    } else if (error.response.status === 401) {
      throw new Error("Vous n'etes pas autorisé");
    } else if (error.response.status === 403) {
      throw new Error("Vous n'avez pas la permission");
    } else if (error.response.status === 406) {
      throw new Error("Un des champs n'est pas conforme aux normes");
    } else if (error.response.status === 409) {
      throw new Error("Un des champs uniques existe déja");
    } else if (error.response.status === 500) {
      throw new Error("Erreur du Serveur");
    } else {
      throw new Error("Quelque chose s'est mal passé");
    }
  }
};
