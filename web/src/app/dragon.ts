export interface Dragon {
  id: number | any;
  name: string;
  type: string;
  quote?: string;
  label?: string;
  avatar?: string;
  position?: string;
  imageUrl?: string;
  landscape?: string;
  createdAt?: string;
  histories?: Array<string>;
}

export interface DragonType {
  value: string;
  label: string;
  avatar: string;
  imageUrl: string;
  position: string;
  landscape: string;
}

export const COMMON_DRAGON_TYPES: DragonType[] = [
  { value: 'fire',  label: 'Dragão de Fogo',   position: 'center',      avatar: './assets/image/dragon/dragon0-face.png', imageUrl: './assets/image/dragon/dragon0.png', landscape: './assets/image/dragon/landscape0.jpg' },
  { value: 'rock',  label: 'Dragão de Pedra',  position: 'top right',   avatar: './assets/image/dragon/dragon1-face.png', imageUrl: './assets/image/dragon/dragon1.png', landscape: './assets/image/dragon/landscape1.jpg' },
  { value: 'blood', label: 'Dragão de Sangue', position: 'top right',   avatar: './assets/image/dragon/dragon3-face.png', imageUrl: './assets/image/dragon/dragon3.png', landscape: './assets/image/dragon/landscape5.png' },
  { value: 'acid',  label: 'Dragão Venenoso',  position: 'top center',  avatar: './assets/image/dragon/dragon4-face.png', imageUrl: './assets/image/dragon/dragon4.png', landscape: './assets/image/dragon/landscape2.jpg' },
  { value: 'shock', label: 'Dragão Elétrico',  position: 'center left', avatar: './assets/image/dragon/dragon2-face.png', imageUrl: './assets/image/dragon/dragon2.png', landscape: './assets/image/dragon/landscape3.jpg' }
];
