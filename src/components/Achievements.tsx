
import { Award, Trophy, Star, TrendingUp } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Developer of the Month",
      organization: "Entropik",
      description: "Recognized for balancing demanding priorities from Decode and Affect Labs projects, taking quick decisions, liaising with stakeholders across various functions to ensure smooth delivery.",
      image: "/lovable-uploads/4fddb25b-eea1-4183-834c-f87280a9152d.png",
      type: "certificate",
      icon: Award,
      color: "from-blue-600 to-teal-600"
    },
    {
      title: "Go Beyond Award",
      organization: "Entropik",
      description: "Exceptional performance in driving innovation and technical excellence across multiple projects.",
      type: "award",
      icon: Trophy,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Team Leadership Excellence",
      organization: "Entropik",
      description: "Successfully led a team of 5 developers to build Qatalyst, an AI-powered market research platform.",
      type: "leadership",
      icon: Star,
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Performance Optimization Champion",
      organization: "Multiple Projects",
      description: "Achieved significant performance improvements: 90% latency reduction, 30% accuracy boost, 25% cost reduction.",
      type: "performance",
      icon: TrendingUp,
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Recognition for technical excellence, leadership, and innovation in backend engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {achievement.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-purple-600 font-semibold mb-3">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {achievement.image && (
                    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-2xl opacity-50"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Latency Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">30%</div>
              <div className="text-gray-300 text-sm">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Microservices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
