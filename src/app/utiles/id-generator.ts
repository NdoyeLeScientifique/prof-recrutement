export function generateId(): string {
    // Fonction pour générer un identifiant unique de 6 caractères
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }