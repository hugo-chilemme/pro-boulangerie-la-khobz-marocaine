import Image from 'next/image'

export default function Page() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
				<div className="mx-auto">
					<h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Notre histoire, une passion familiale</h2>
					<p className="mt-6 text-lg/8 text-gray-800">Depuis plus de 20 ans, La Khobz Marocaine fait vivre la tradition boulangère du Maroc.
						Tout a commencé dans une petite échoppe à Casablanca, où notre fondateur, Ahmed, pétrissait son premier pain à la main, avant même le lever du soleil.
						Aujourd&apos;hui, nous restons fidèles à cette philosophie : des ingrédients simples, du temps, et surtout beaucoup de passion.</p>
				</div>
				<ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
					<li className="rounded-2xl bg-gray-100 px-8 py-10">
						<Image src="https://images.unsplash.com/photo-1669175761786-e303d08d44f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" width={224} height={224} className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 object-cover outline-black/5 md:size-56" />
						<h3 className="mt-6 font-semibold text-lg tracking-tight text-gray-900">Ahmed El Amrani</h3>
						<p className="text-sm/6 text-gray-800">Maître Boulanger</p>
					</li>
					<li className="rounded-2xl bg-gray-100 px-8 py-10">
						<Image src="https://images.unsplash.com/photo-1569628433122-a3208a311b05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" width={224} height={224} className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 object-cover outline-black/5 md:size-56" />
						<h3 className="mt-6 font-semibold text-lg tracking-tight text-gray-900">Fatima Benjelloun</h3>
						<p className="text-sm/6 text-gray-800">Responsable Pâtisserie</p>
					</li>
					<li className="rounded-2xl bg-gray-100 px-8 py-10">
						<Image src="https://images.unsplash.com/photo-1632900820284-0a5d053fc81a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" width={224} height={224} className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 object-cover outline-black/5 md:size-56" />
						<h3 className="mt-6 font-semibold text-lg tracking-tight text-gray-900">Youssef Tazi</h3>
						<p className="text-sm/6 text-gray-800">Chef d&apos;Équipe</p>
					</li>
				</ul>

				<p className="mt-10 text-lg/8 text-gray-800">Chaque pain que nous cuisons est un hommage à notre culture, à la convivialité et au goût du vrai.</p>
			</div>
		</div>
	)
}