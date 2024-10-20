"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Contact } from 'payload-types';

export default function ContactSection({ title, address_label, address, phone_label, phone, email_label, email, name_label, message_label, send_label, locale }: Contact & { locale: string }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const validateName = (name: string) => {
        if (name.trim() === '') {
            return { en: 'Name is required', de: 'Name ist erforderlich' }[locale]!;
        }
        return '';
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return { en: 'Email is required', de: 'E-Mail ist erforderlich' }[locale]!;
        } else if (!emailRegex.test(email)) {
            return { en: 'Invalid email address', de: 'Ungültige E-Mail-Adresse' }[locale]!;
        }
        return '';
    };

    const validateMessage = (message: string) => {
        if (message.trim() === '') {
            return { en: 'Message is required', de: 'Nachricht ist erforderlich' }[locale]!;
        }
        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let error = '';
        switch (name) {
            case 'name':
                error = validateName(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'message':
                error = validateMessage(value);
                break;
            default:
                break;
        }
        setFormErrors({ ...formErrors, [name]: error });

        setIsFormValid(
            validateName(formData.name) === '' &&
            validateEmail(formData.email) === '' &&
            validateMessage(formData.message) === ''
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then((res) => {
                return res.json();
            }).then((data) => {
                alert(data[locale] || 'Message sent successfully');
                setFormData({ name: '', email: '', message: '' });
                setIsFormValid(false);
            }).catch((error) => {
                console.error('Error sending message:', error);
                alert('Failed to send message');
            });
        }
    };

    return (
        <section id="contact" className="bg-white py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-vollkorn">{title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 font-vollkorn">
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800">{address_label}</h3>
                                <p className="text-gray-600">{address}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-gray-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800">{phone_label}</h3>
                                <p className="text-gray-600">{phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-gray-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800">{email_label}</h3>
                                <p className="text-gray-600">{email}</p>
                            </div>
                        </div>
                        <div className="aspect-w-16 aspect-h-9 md:aspect-h-[13]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.19486381438!2d8.239997699999998!3d50.08263840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbda95e015beb%3A0x430c8835f4f01382!2sHaus%20des%20Weines!5e0!3m2!1sde!2sde!4v1713994382361!5m2!1sde!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                className='rounded-sm'
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-julius">{name_label}</label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 font-julius"
                                />
                                {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-julius">{email_label}</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 font-julius"
                                />
                                {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
                            </div>
                            <div className="flex-grow flex flex-col">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-julius">{message_label}</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 flex-grow resize-none font-julius"
                                />
                                {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-rouge hover:bg-red-700 text-white transition-all font-vollkorn duration-300 ease-in-out transform hover:scale-105"
                                disabled={!isFormValid}
                            >
                                <Send className="w-4 h-4 mr-2" />
                                {send_label}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
