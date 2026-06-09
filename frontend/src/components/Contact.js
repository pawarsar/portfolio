// import React, { useState } from 'react';
// import { Card } from './ui/card';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { Mail, Linkedin, Github, Send } from 'lucide-react';
// import { personalInfo } from '../mock';
// import { useToast } from '../hooks/use-toast';
// import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await axios.post(`${API}/contact`, formData);
      
//       if (response.status === 200) {
//         toast({
//           title: 'Message sent!',
//           description: 'Thank you for reaching out. I\'ll get back to you soon.',
//         });
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Error submitting contact form:', error);
      
//       let errorMessage = 'Failed to send message. Please try again.';
      
//       if (error.response?.status === 429) {
//         errorMessage = 'Too many requests. Please try again later.';
//       } else if (error.response?.data?.detail) {
//         // Handle both string and array format (Pydantic validation errors)
//         const detail = error.response.data.detail;
//         if (Array.isArray(detail) && detail.length > 0) {
//           // Extract message from first validation error
//           errorMessage = detail[0].msg || detail[0].message || JSON.stringify(detail[0]);
//         } else if (typeof detail === 'string') {
//           errorMessage = detail;
//         } else {
//           errorMessage = 'Validation error occurred';
//         }
//       }
      
//       toast({
//         title: 'Error',
//         description: errorMessage,
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const socialLinks = [
//     // {
//     //   icon: Mail,
//     //   label: 'Email',
//     //   value: personalInfo.email,
//     //   href: `mailto:${personalInfo.email}`,
//     //   description: 'Send me an email'
//     // },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       value: 'Connect on LinkedIn',
//       href: personalInfo.linkedin,
//       description: 'Let\'s connect professionally'
//     }
//     // {
//     //   icon: Github,
//     //   label: 'GitHub',
//     //   value: 'View my code',
//     //   href: personalInfo.github,
//     //   description: 'Check out my projects'
//     // }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Interested in collaborating? Let's discuss how we can work together
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
//           {/* Contact form */}
//           <Card className="md:col-span-3 p-8 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
//                   >
//                     Name *
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border-2 border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-white"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
//                   >
//                     Email *
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="border-2 border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-white"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
//                 >
//                   Subject *
//                 </label>
//                 <Input
//                   id="subject"
//                   name="subject"
//                   type="text"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="border-2 border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-white"
//                   placeholder="What would you like to discuss?"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
//                 >
//                   Message *
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="border-2 border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-white resize-none"
//                   placeholder="Tell me about your project or opportunity..."
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
//                 size="lg"
//               >
//                 {isSubmitting ? (
//                   'Sending...'
//                 ) : (
//                   <>
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </Card>

//           {/* Social links */}
//           <div className="md:col-span-2 space-y-4">
//             {socialLinks.map((link, index) => {
//               const Icon = link.icon;
//               return (
//                 <Card
//                   key={index}
//                   className="p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-200 bg-white dark:bg-black group cursor-pointer"
//                   onClick={() => window.open(link.href, '_blank')}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-200 flex-shrink-0">
//                       <Icon className="h-5 w-5 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
//                         {link.label}
//                       </h4>
//                       <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
//                         {link.description}
//                       </p>
//                       <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
//                         {link.value}
//                       </p>
//                     </div>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
