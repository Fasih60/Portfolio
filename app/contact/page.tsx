"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Clock, Globe, MessageCircle } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mirza.fasih99@gmail.com",
      href: "mailto:mirza.fasih99@gmail.com",
      description: "Best way to reach me for business inquiries",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92-306-6899891",
      href: "tel:+923066899891",
      description: "Available during business hours (PKT)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#",
      description: "Remote work worldwide",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/Fasih60", label: "GitHub", username: "@Fasih60" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fasih-rehman60/", label: "LinkedIn", username: "Fasih Ur Rehman" },
    { icon: Instagram, href: "https://www.instagram.com/fasih.rehman.786/", label: "Instagram", username: "@fasih.rehman.786." },
  ]

  const workingHours = [
    { day: "Monday - Sunday", hours: "2:00 PM - 2:00 AM PKT" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text glow-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Ready to start your next project? Let's connect and discuss how we can work together to bring your ideas to
            life.
          </p>
        </div>

        {/* Main Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="cyber-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                  <info.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{info.label}</h3>
              <a
                href={info.href}
                className="text-pink-500 hover:text-pink-400 transition-colors font-medium text-lg block mb-3"
              >
                {info.value}
              </a>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Social Media & Professional Links */}
        <div className="cyber-card mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group border border-gray-700 hover:border-pink-500/50"
              >
                <div className="p-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                  <social.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">{social.label}</div>
                  <div className="text-gray-400 text-sm">{social.username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Working Hours */}
          <div className="cyber-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mr-4">
                <Clock size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Working Hours</h2>
            </div>
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                >
                  <span className="text-gray-300 font-medium">{schedule.day}</span>
                  <span className="text-pink-500">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg">
              <p className="text-pink-400 text-sm">
                <strong>Note:</strong> For urgent projects, I'm available outside regular hours. Just mention "URGENT"
                in your message.
              </p>
            </div>
          </div>

          {/* Services & Availability */}
          <div className="cyber-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                <Globe size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Services & Availability</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for new projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Full-stack development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">WordPress development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Remote collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Long-term partnerships</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24 hours. For project inquiries, expect a detailed response within
                48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cyber-card text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full">
              <MessageCircle size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a complete web application, WordPress site, or want to discuss a custom solution, I'm here
            to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fasihurrehmandev@gmail.com"
              className="cyber-button inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card">
              <h4 className="text-lg font-semibold text-white mb-3">What's your typical project timeline?</h4>
              <p className="text-gray-400">
                Project timelines vary based on complexity. Simple websites take 2-3 weeks, while complex applications
                can take 6-12 weeks. I'll provide a detailed timeline after understanding your requirements.
              </p>
            </div>
            <div className="cyber-card">
              <h4 className="text-lg font-semibold text-white mb-3">Do you work with international clients?</h4>
              <p className="text-gray-400">
                I work with clients worldwide and am comfortable with different time zones. I use modern communication
                tools to ensure smooth collaboration regardless of location.
              </p>
            </div>
            <div className="cyber-card">
              <h4 className="text-lg font-semibold text-white mb-3">What technologies do you specialize in?</h4>
              <p className="text-gray-400">
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and WordPress development. I also
                work with modern tools like Next.js, TypeScript, and various databases.
              </p>
            </div>
            <div className="cyber-card">
              <h4 className="text-lg font-semibold text-white mb-3">Do you provide ongoing support?</h4>
              <p className="text-gray-400">
                Yes! I offer maintenance packages to keep your website updated, secure, and performing optimally. This
                includes regular updates, security monitoring, and technical support.
              </p>
            </div>
            <div className="cyber-card">
              <h4 className="text-lg font-semibold text-white mb-3">What's your development process?</h4>
              <p className="text-gray-400">
                I follow an agile approach: Discovery → Planning → Design → Development → Testing → Launch → Support.
                You'll receive regular updates and can provide feedback throughout the process.
              </p>
            </div>
            <div className="cyber-card">
              <h4 className="text-lg font-semibold text-white mb-3">How do you handle project communication?</h4>
              <p className="text-gray-400">
                I believe in transparent communication. I provide regular progress updates, use project management
                tools, and am available for calls/meetings as needed to ensure we're always aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
