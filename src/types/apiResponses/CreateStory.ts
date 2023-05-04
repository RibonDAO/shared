export default interface CreateStory {
  id?: string | number;
  title: string;
  active?: boolean;
  position?: number;
  description: string;
  image?: any;
}
