import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ChevronRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative"
      >
        <div className="relative h-full bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-teal-500/50 transition-all duration-300 shadow-xl hover:shadow-teal-500/20">
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-medium shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </span>
            </div>
          )}

          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
            {project.image_url ? (
              <img 
                src={project.image_url} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-600 transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.slice(0, 4).map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 4 && (
                <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-sm">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium flex items-center justify-center gap-1"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {project.github_url && (
                <a
                  href__={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              
              {project.project_url && (
                <a
                  href__={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowDetails(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-white/20 text-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 mb-4">
                {project.title}
              </h2>
              
              {project.image_url && (
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}

              <p className="text-gray-300 text-lg mb-4">{project.description}</p>

              {project.key_features && project.key_features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.key_features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-white border border-teal-500/50 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {project.project_url && (
                  <a
                    href__={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                )}
                {project.github_url && (
                  <a
                    href__={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-lg font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}