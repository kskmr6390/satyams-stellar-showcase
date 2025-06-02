
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Together
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to build something amazing? I'm always open to discussing new opportunities, 
            innovative projects, and collaborations in backend engineering and AI development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:ksatyam1038@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      ksatyam1038@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+917397463101" className="text-purple-400 hover:text-purple-300 transition-colors">
                      +91 7397463101
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Bangalore, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Response Time</h4>
                    <p className="text-gray-300">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-400" size={20} />
                Why Work With Me?
              </h4>
              <ul className="text-gray-300 text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>6+ years of backend engineering expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proven track record in scaling systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience leading development teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Specialized in AI-powered applications</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, requirements, or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <p className="text-center text-gray-400 text-sm">
                  Prefer a direct approach? Email me at{" "}
                  <a href="mailto:ksatyam1038@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    ksatyam1038@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h4 className="text-white font-semibold mb-6">Connect with me on</h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/satyam-chourasiya-931674141/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-slate-700/50 hover:border-blue-500"
            >
              <span className="text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/kskmr6390"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-slate-700/50 hover:border-gray-500"
            >
              <span className="text-gray-400 group-hover:text-white transition-colors">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
