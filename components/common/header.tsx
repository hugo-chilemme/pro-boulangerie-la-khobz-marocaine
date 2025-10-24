'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
	{ label: 'Accueil', href: '/' },
	{ label: 'À propos', href: '/about' },
	{ label: 'Nos produits', href: '/products' },
	{ label: 'Infos & contact', href: '/contact' },
	{ label: 'Galerie', href: '/gallery' },
];


const LOGO_CONFIG = {
	name: 'La Khobz Marocaine',
};

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
				<Link href="/" className="-m-1.5 p-1.5 text-lg flex items-center gap-6">
					<Image src="/logo.png?id=3" alt="La Khobz Marocaine" width={42} height={42} className="h-12 w-auto" />
					<span>{LOGO_CONFIG.name}</span>
				</Link>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-none"
					>
						<span className="sr-only">Open main menu</span>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
							<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{NAV_ITEMS.map((item) => (
						<Link key={item.label} href={item.href} className="text-sm/6 font-semibold text-gray-900">
							{item.label}
						</Link>
					))}
				</div>
			</nav>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden" role="dialog" aria-modal="true">
					<div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)} />
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">{LOGO_CONFIG.name}</span>
								<Image src="/logo.png?id=3" alt="La Khobz Marocaine" width={42} height={42} className="h-12 w-auto" />
							</Link>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 bg-none rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
									<path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{NAV_ITEMS.map((item) => (
										<Link
											key={item.label}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
										>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}