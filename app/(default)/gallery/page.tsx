import Image from 'next/image'

export default function GalleryPage() {
	const gallery = [
		{
			id: 1,
			title: 'Façonnage de la pâte',
			description: 'Un artisan boulanger marocain en train de pétrir la pâte à la main, symbole du savoir-faire traditionnel.',
			imageUrl: 'https://i0.wp.com/technomitron.aainb.com/wp-content/uploads/2018/08/M06114.jpg?resize=600%2C450&ssl=1',
		},
		{
			id: 2,
			title: 'Cuisson dans un four traditionnel',
			description: 'Pain marocain "khobz" cuit dans un four en terre, avec une chaleur authentique.',
			imageUrl: 'https://thumbs.dreamstime.com/b/pain-traditionnel-de-cuisson-dans-un-four-normal-d-argile-26477085.jpg',
		},
		{
			id: 3,
			title: 'Produits dorés sortant du four',
			description: 'Pain et viennoiseries fraîchement sortis du four, dorés à souhait.',
			imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
		},
		{
			id: 4,
			title: 'Pâtisseries marocaines',
			description: 'Assortiment de pâtisseries marocaines : ghriba, fekkas, chebakia.',
			imageUrl: 'https://img.cuisineaz.com/1280x720/2017/06/22/i130296-les-fazuelos-patisseries-marocaines.webp',
		},
		{
			id: 5,
			title: 'Le sourire de nos clients',
			description: 'Des clients satisfaits dégustant nos pains tout juste sortis du four.',
			imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
		},
		{
			id: 6,
			title: 'Moment de partage autour du pain',
			description: "Autour d'un thé à la menthe, le pain marocain devient un symbole de convivialité.",
			imageUrl: 'https://cdn.prod.website-files.com/65ca38505a485c9719220b9d/67f6674cc0d5da27a3f16bd0_le-grand-recho-recette-pain-de-partage1.jpg',
		},
		{
			id: 7,
			title: 'Étalage du jour',
			description: 'Une vue de notre étalage quotidien, avec les pains et viennoiseries du matin.',
			imageUrl: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
		},
		{
			id: 8,
			title: 'Décoration artisanale de la boutique',
			description: 'Ambiance chaleureuse avec carrelages marocains et paniers de pain tressés à la main.',
			imageUrl: 'https://images.unsplash.com/photo-1722408156506-94e073cda214?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1329',
		},
	]

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
						L’art du pain, en images
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Ici, tout est fait maison : du façonnage de la pâte au sourire de nos clients.
Découvrez nos fours traditionnels, nos produits dorés et nos instants de partage.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{gallery.map((post) => (
						<article
							key={post.id}
							className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
						>
							<Image
								src={post.imageUrl}
								alt=""
								width={500}
								height={400}
								className="absolute inset-0 -z-10 h-full w-full object-cover"
							/>
							<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
							<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

							
							<h3 className="mt-3 text-2xl font-semibold leading-8 text-white">
								<span className="absolute inset-0" />
								{post.title}
							</h3>

							<p className="mt-1 text-base leading-7 text-gray-300">{post.description}</p>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}