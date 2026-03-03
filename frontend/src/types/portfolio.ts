export interface Portfolio {
  id: string;
  name: string;
  email: string;
  description: string;
  imageUrl?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface CreatePortfolioDTO {
  name: string;
  description: string;
  image: File;
}