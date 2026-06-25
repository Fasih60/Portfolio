import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.slug,
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Red Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors font-bold uppercase tracking-widest text-sm mb-12"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full bg-[#111] border border-white/5 text-sm font-semibold text-red-500 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {project.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {(project.images || [project.image]).map((img, index) => (
            <div key={index} className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent pointer-events-none rounded-3xl"></div>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-lg">
                <Image 
                  src={img} 
                  alt={`${project.title} - Image ${index + 1}`} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {project.link && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Want to see more?</h3>
            {project.link !== "#" ? (
              <>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  Check out the live version of this project to see it in action.
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
                >
                  <ExternalLink size={20} /> Visit Live Site
                </a>
              </>
            ) : (
              <>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  The live version of this project will be available soon. Stay tuned!
                </p>
                <button 
                  disabled
                  className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-gray-500 px-10 py-4 rounded-xl font-bold uppercase tracking-widest cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
