export type TNewsAndArticlesData = {
  id: number;
  thumbnail: {
    uuid: string;
    mime_type: string;
    disk: string;
    size: number;
    preview_link: string;
    path: string;
  };
  title: string;
  slug: string;
  headline: string | null;
  published_at: string;
  category: {
    id: number;
    title: string;
    brief_description: string;
  };
  views_count: number;
};
