import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  RequestConsulting,
  SocialMedia,
  UserComments,
} from '@/app/_components/homePage/dynamic-sections';
import BannerV3 from './_components/banner-v3';
import RelatedProjects from './_components/related-projects';
import ProjectInfo from './_components/projects-information';
import {
  getPortfolioProject,
  getProjectInfoRows,
  getRelatedProjects,
  portfolioProjects,
  projectImageSrc,
} from '@/constans/site-catalog';

type PageProps = {
  params: Promise<{ design: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ design: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { design } = await params;
  const project = getPortfolioProject(design);
  if (!project) {
    return { title: 'پروژه پیدا نشد' };
  }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [projectImageSrc(project.image)],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { design } = await params;
  const project = getPortfolioProject(design);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug);
  const infoRows = getProjectInfoRows(project);

  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <BannerV3
          title={project.category}
          subtitle={project.title}
          description={project.description}
          bgImage1="bg-banner-m-bg3"
          bgImage2="bg-banner-d-bg3"
          imageSrc={projectImageSrc(project.image)}
          imageAlt={project.title}
          customClasses={{
            bgImage1: ' top-[30%]',
            bgImage2: 'left-0 top-0',
            botImage:
              'h-[300px] w-[213px] lg:h-[550px] lg:w-[393px] lg:top-[101px]',
          }}
        />
      </div>

      <ProjectInfo rows={infoRows} />

      <RelatedProjects projects={related} />
      <UserComments />
      <RequestConsulting />
      <SocialMedia />
    </>
  );
}
