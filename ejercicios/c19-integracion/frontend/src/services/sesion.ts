export const guardarToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const obtenerToken = (): string | null => {
  return localStorage.getItem("token");
};

export const borrarToken = (): void => {
  localStorage.removeItem("token");
};