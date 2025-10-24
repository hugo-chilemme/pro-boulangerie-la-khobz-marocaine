'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function ContactPage() {

	return (
		<div className="bg-white">
			
			<div className="relative isolate overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-14">
				<div aria-hidden="true" className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]  shadow-xl ring-1 shadow-yellow-600/10 ring-yellow-50 sm:-mr-80 lg:-mr-96" />
				<div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
						<h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">Venez partager un moment gourmand avec nous</h1>
						<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
							<p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Retrouvez-nous au cœur de votre quartier, dans une ambiance conviviale et parfumée.
					Chaque jour, nous sortons du four nos pains encore chauds — prêts à être dégustés !</p>
					<div className="flex flex-col gap-4">
							<div className="flex items-start gap-x-5 mt-8">
								<svg className="h-6 w-6 flex-none text-yellow-600 mt-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
								</svg>
								<div>
									<p className="font-semibold text-gray-900">Adresse</p>
									<p>12 rue El Jadida, Tanger</p>
								</div>
							</div>
							
							<div className="flex items-start gap-x-5">
								<svg className="h-6 w-6 flex-none text-yellow-600 mt-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
								</svg>
								<div>
									<p className="font-semibold text-gray-900">Téléphone</p>
									<a href="tel:+212612345678" className="hover:text-yellow-600">+212 6 12 34 56 78</a>
								</div>
							</div>
							
							<div className="flex items-start gap-x-5">
								<svg className="h-6 w-6 flex-none text-yellow-600 mt-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
								</svg>
								<div>
									<p className="font-semibold text-gray-900">E-mail</p>
									<a href="mailto:contact@lakhobzmarocaine.ma" className="hover:text-yellow-600">contact@lakhobzmarocaine.ma</a>
								</div>
							</div>
							
							<div className="flex items-start gap-x-5">
								<svg className="h-6 w-6 flex-none text-yellow-600 mt-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<div>
									<p className="font-semibold text-gray-900">Horaires</p>
									<p>Lundi – Dimanche : 6h – 20h</p>
									<p className="mt-2 text-sm italic text-yellow-700"> Passez de bonne heure, nos khobz beldi partent vite !</p>
								</div>
							</div>
						</div>
						</div>
						<div className="mt-10 w-full max-w-lg lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
							<iframe 
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2!2d-5.808520!3d35.784562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ3JzA0LjQiTiA1wrA0OCczMC43Ilc!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
								width="100%" 
								height="450" 
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy" 
								referrerPolicy="no-referrer-when-downgrade"
								className="rounded-2xl outline-1 -outline-offset-1 outline-black/5"
							/>
						</div>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
			</div>
		</div>
	);
}