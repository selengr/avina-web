export interface IMenuProps {
  id: number;
  title: string;
  link: string;
  order: number;
  slug: string;
}
export interface IMobileMenuTypes {
  message: string;
  data: {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    status: {
      id: number;
      title: string;
    };
  };
  base_menus: IMenuProps[];
}
