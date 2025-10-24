"use client";
import Image from 'next/image';

export default function Page() {
	return (
		<>
		<div className="relative isolate pt-16 overflow-hidden">
			<Image 
				src="https://images.unsplash.com/photo-1606248590187-d65f23e625ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
				alt="" 
				fill
				className="absolute inset-0 -z-10 object-cover opacity-15" 
			/>
			<div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
				<div 
					style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
							Le goût authentique du pain marocain, cuit avec passion chaque matin.
						</h1>
						<p className="mt-8 text-balance text-lg font-medium text-gray-800 sm:text-xl/8">Chez La Khobz Marocaine, nous perpétuons les recettes traditionnelles transmises de génération en génération — un savoir-faire qui fait le charme de nos pains, gâteaux et viennoiseries.</p>
						
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
				<div 
					style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
		</div>

		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<div className="max-w-4xl">
					<h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nos spécialités</h1>
					<p className="mt-6 text-xl/8 text-balance text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
				</div>
				<section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					<div className="lg:pr-8">
						<h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">Khobz Beldi</h2>
						<p className="mt-6 text-base/7 text-gray-800">Pain traditionnel marocain, croustillant à l’extérieur et moelleux à l’intérieur — parfait pour accompagner un tajine ou une soupe harira.</p>

						<h2 className="text-2xl mt-8 font-semibold tracking-tight text-pretty text-gray-900">Kesra</h2>
						<p className="mt-6 text-base/7 text-gray-800">Galette dorée au goût unique, pétrie à la main avec de l’huile d’olive pure et une touche d’amour.</p>

						<h2 className="text-2xl mt-8 font-semibold tracking-tight text-pretty text-gray-900">Ghriba</h2>
						<p className="mt-6 text-base/7 text-gray-800">Petits gâteaux sablés à la texture fondante, souvent parfumés à l’amande ou à la noix de coco — une douceur typiquement marocaine.</p>

						<h2 className="text-2xl mt-8 font-semibold tracking-tight text-pretty text-gray-900">Chebakia</h2>
						<p className="mt-6 text-base/7 text-gray-800">Délicieuse pâtisserie au miel et au sésame, symbole du mois de Ramadan.</p>
					</div>
					<div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
						<div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<Image src="https://tasteofmaroc.com/wp-content/uploads/2017/08/khobz-picturepartners-bigstock-Moroccan-bread-and-tagine-on-t-65143975.jpg.webp" alt="" className="block size-full object-cover" width={500} height={500} />
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<Image src="https://cuisine.nessma.tv/uploads/7/2020-03/a25eb93ce08249a6a2a00ed5c614b0d5.png" alt="" className="block size-full object-cover" width={500} height={500} />
							</div>
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<Image src="https://www.recettesvegetales.com/wp-content/uploads/2015/10/ghiba-aux-amandes.jpg" alt="" className="block size-full object-cover" width={500} height={500} />
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<Image src="https://www.perledoree.fr/wp-content/uploads/2025/03/recette-chebakia-patisserie-orientale-perle-doree-e1742378327148-500x350.webp" alt="" className="block size-full object-cover" width={500} height={500} />
							</div>
							
						</div>
					</div>
					
				</section>
			</div>
		</div>
		</>

	);
}
