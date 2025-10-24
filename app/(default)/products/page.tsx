import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Khobz Beldi',
    description: 'Pain traditionnel marocain fait à la main avec de la farine complète, idéal pour accompagner tous vos plats.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Kesra',
    description: 'Pain rond traditionnel marocain, moelleux à l’intérieur et croustillant à l’extérieur.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Msemen',
    description: 'Crêpe feuilletée marocaine traditionnelle, parfaite pour le petit-déjeuner ou le goûter.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Croissants au Beurre',
    description: 'Viennoiseries françaises classiques, légères et feuilletées, préparées avec du beurre de qualité.',
    date: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Pains au Chocolat',
    description: 'Petits pains feuilletés garnis de barres de chocolat, un délice pour les gourmands.',
    date: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Brioches Marocaines',
    description: 'Brioches moelleuses aux saveurs marocaines, parfaites pour accompagner votre thé à la menthe.',
    date: '2024-01-14',
    image: 'https://toutelacuisinequejaime.wordpress.com/wp-content/uploads/2020/12/krachel.png'
  },
  {
    id: 7,
    title: 'Chebakia',
    description: 'Pâtisserie marocaine traditionnelle en forme de fleur, frite et enrobée de miel et de graines de sésame.',
    date: '2024-01-13',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCsfpJDxbM8Oe0AFZ3txqh9YsmWQWWbhztWYRaiqNUt3PMcE2qlqa-qKcnojkl4VzAMoy7Os82DH_uUSdKRS2wNRp8ViE7Tbp59p_Q2QBY'
  },
  {
    id: 8,
    title: 'Sellou',
    description: 'Pâtisserie énergétique marocaine à base de farine grillée, amandes et miel, riche en saveurs.',
    date: '2024-01-13',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGRUhxyzyRLuRIkqVRsaCmsMajffFEtQCdqsnX63ZpAWrorqyTO-QIu5DwY3UyBoJGjejB5J2Gsrgyc9BHSxRVprmQ7rK8Bo_wl3sFi9hY'
  },
  {
    id: 9,
    title: 'Fekkas',
    description: 'Biscuits croquants aux amandes et graines d’anis, parfaits pour accompagner le thé marocain.',
    date: '2024-01-13',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50shv7foheFiNXOGQIcqLgQ_sXMRXTlGodOOes1x35zYM5GKG328I1IOkV1E4Rt6fXO1jt77udc05l06BmVljaGTYxBevg9_RO_Gs9rES'
  },
  {
    id: 10,
    title: 'Ghriba',
    description: 'Biscuits marocains fondants et parfumés, disponibles aux amandes, noix de coco ou cacahuètes.',
    date: '2024-01-13',
    image: 'https://www.auxdelicesdupalais.net/wp-content/uploads/2016/06/Ghriba-aux-amandes-et-noix-de-cocoDSC05556.jpg'
  },
];

export default function ProductsPage() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
						Le goût du Maroc dans chaque bouchée
					</h2>
					<p className="mt-2 text-lg/8 text-gray-600">
						Découvrez nos pains, viennoiseries et pâtisseries marocaines préparés quotidiennement avec des ingrédients frais et locaux.
De la douceur sucrée de nos ghriba au croustillant doré du khobz beldi, chaque recette reflète l’authenticité et la générosité du Maroc.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
					{products.map((product) => (
						<article key={product.id} className="flex flex-col items-start justify-between">
							<div className="relative w-full">
								<Image
									src={product.image}
									alt=""
									width={800}
									height={600}
									className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
							</div>
							<div className="flex max-w-xl grow flex-col justify-between">
								
								<div className="group relative grow">
									<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 ">
										{product.title}
									</h3>
									<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
										{product.description}
									</p>
								</div>
								
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}