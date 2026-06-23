"use client";

import { useState } from "react";
import { MapPin, PhoneCall, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-transparent text-stone-900 dark:text-stone-100 font-sans selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-[hsl(224_80%_65%)]/5 dark:via-transparent dark:to-[hsl(224_80%_65%)]/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-[hsl(224_80%_65%)] text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
              <Mail className="w-4 h-4 fill-primary text-primary dark:text-[hsl(224_80%_65%)]" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 dark:from-[hsl(224_80%_65%)] dark:to-[hsl(224_80%_65%)/70%]">Us</span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              Have questions about our products, need assistance with an order, or want to collaborate with us?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white dark:bg-[hsl(224_40%_9%)] bg-washi shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8">Visit Our Store</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-[hsl(224_80%_65%)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Location</h3>
                    <p className="text-stone-600 dark:text-stone-300">
                      1-2-3 Shin-Okubo, Shinjuku City<br />
                      Tokyo, Japan 169-0073
                    </p>
                    <a 
                      href="https://maps.google.com/?q=1-2-3+Shin-Okubo+Shinjuku+City+Tokyo+Japan+169-0073" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary dark:text-[hsl(224_80%_65%)] font-medium hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-[hsl(224_80%_65%)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Phone & Fax</h3>
                    <p className="text-stone-600 dark:text-stone-300">
                      <strong>Phone:</strong> 03-XXXX-XXXX<br />
                      <strong>Fax:</strong> 03-XXXX-XXXX<br />
                      <strong>Emergency:</strong> 080-XXXX-XXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-[hsl(224_80%_65%)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Email</h3>
                    <p className="text-stone-600 dark:text-stone-300">
                      <strong>General Inquiries:</strong> info@manakamana.jp<br />
                      <strong>Orders:</strong> orders@manakamana.jp<br />
                      <strong>Wholesale:</strong> wholesale@manakamana.jp
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-[hsl(224_80%_65%)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-stone-600 dark:text-stone-300">
                      <p><strong>Monday - Friday:</strong> 10:00 - 22:00</p>
                      <p><strong>Saturday:</strong> 09:00 - 23:00</p>
                      <p><strong>Sunday:</strong> 09:00 - 21:00</p>
                      <p><strong>Holidays:</strong> May have reduced hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Note */}
              <div className="mt-12 p-6 bg-stone-50 dark:bg-[hsl(224_30%_15%)] rounded-xl border border-stone-100 dark:border-[hsl(224_30%_18%)]">
                <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">Response Time</h4>
                <p className="text-stone-600 dark:text-stone-300">
                  We typically respond to inquiries within <strong>24 hours</strong> on business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-lg bg-white dark:bg-[hsl(224_40%_9%)] focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[hsl(224_80%_65%)] transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-lg bg-white dark:bg-[hsl(224_40%_9%)] focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[hsl(224_80%_65%)] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-lg bg-white dark:bg-[hsl(224_40%_9%)] focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[hsl(224_80%_65%)] transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="event-planning">Event Planning</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-lg bg-white dark:bg-[hsl(224_40%_9%)] focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[hsl(224_80%_65%)] transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 dark:hover:bg-[hsl(224_80%_65%)]/90 text-white py-6 rounded-lg font-semibold text-lg transition-all shadow-xl shadow-primary/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-[hsl(224_40%_9%)] bg-washi shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Do you offer delivery outside of Tokyo?",
                answer: "Yes! We offer nationwide delivery across Japan through our online store. Delivery typically takes 1-3 business days for most urban areas, and 3-5 days for more remote locations. All orders are shipped with insulated packaging to ensure product quality during transit."
              },
              {
                question: "Can I return products if I'm not satisfied?",
                answer: "We offer a 7-day return policy for unopened and unused products in their original packaging. For perishable items like frozen momos, returns are not accepted once the product has been thawed. Please contact our customer service team for return instructions and we'll guide you through the process."
              },
              {
                question: "Do you sell wholesale for businesses?",
                answer: "Absolutely! We offer wholesale pricing for restaurants, stores, and businesses. Our wholesale program includes volume discounts, custom packaging options, and flexible delivery schedules. Please contact our wholesale department at wholesale@manakamana.jp for pricing and minimum order requirements."
              },
              {
                question: "Do you have gluten-free or vegan options?",
                answer: "Yes, we have a growing selection of gluten-free and vegan products. Look for the specific labels on our website or ask our store staff for assistance. Our gluten-free items include certain rice-based products and spices, while our vegan selection includes plant-based snacks and traditional Nepali vegetarian specialties."
              },
              {
                question: "How do I store frozen momos?",
                answer: "Frozen momos should be kept at -18°C or below. They can be stored in your freezer for up to 3 months. To cook, steam from frozen for 15-20 minutes until heated through. Do not refreeze after thawing. For best results, consume within 1 month of purchase."
              },
              {
                question: "Are your products authentic to Nepal?",
                answer: "Yes, all our products are sourced directly from Nepal or made using traditional Nepali recipes. We work with trusted suppliers and farmers in Nepal to ensure authenticity and quality. Every product is taste-tested and approved by our team to guarantee it meets our standards for authentic Himalayan flavor."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 dark:hover:bg-[hsl(224_30%_15%)] transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                >
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{faq.question}</h3>
                  {openFaqIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-primary dark:text-[hsl(224_80%_65%)]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 dark:text-stone-500" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-stone-100 dark:border-[hsl(224_30%_18%)]">
                    <p className="text-stone-600 dark:text-stone-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-600 dark:text-stone-300">
              Still have questions? <a href="#contact-form" className="text-primary dark:text-[hsl(224_80%_65%)] font-medium hover:underline">Contact us directly</a> or call us at <strong>03-XXXX-XXXX</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}