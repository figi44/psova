const siteUrl = 'https://psova.cz';
const websiteId = `${siteUrl}/#website`;
const businessId = `${siteUrl}/#business`;
const personId = `${siteUrl}/o-mne#person`;

const person = {
	'@type': 'Person',
	'@id': personId,
	name: 'Mgr. Kristýna Sznapková',
	url: `${siteUrl}/o-mne`,
	jobTitle: 'Psycholožka a koučka',
	worksFor: { '@id': businessId },
	sameAs: [
		'https://www.linkedin.com/in/sznapkovakristyna/',
		'https://www.cmpsy.cz/?page=adresar&id=1159&action=detail'
	]
};

const business = {
	'@type': 'LocalBusiness',
	'@id': businessId,
	name: 'PSOVA – Mgr. Kristýna Sznapková',
	alternateName: 'PSOVA',
	description: 'Psychologické poradenství, psychoterapie a koučink pro dospělé v Ostravě.',
	url: `${siteUrl}/`,
	logo: `${siteUrl}/android-chrome-512x512.png`,
	telephone: '+420731011138',
	email: 'sznapkova@psova.cz',
	priceRange: '1 000–1 600 Kč',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Na Hradbách 2632/18',
		postalCode: '702 00',
		addressLocality: 'Ostrava',
		addressRegion: 'Moravskoslezský kraj',
		addressCountry: 'CZ'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 49.8376566,
		longitude: 18.2916104
	},
	hasMap: 'https://maps.app.goo.gl/Q5noCBSUWCKBS4p96',
	areaServed: {
		'@type': 'City',
		name: 'Ostrava'
	},
	founder: { '@id': personId },
	identifier: {
		'@type': 'PropertyValue',
		propertyID: 'IČ',
		value: '21031495'
	},
	sameAs: [
		'https://www.firmy.cz/detail/13578534-psova-kristyna-sznapkova-ostrava-moravska-ostrava.html',
		'https://www.instagram.com/psova_/'
	]
};

const website = {
	'@type': 'WebSite',
	'@id': websiteId,
	url: `${siteUrl}/`,
	name: 'PSOVA',
	alternateName: 'PSOVA – Kristýna Sznapková',
	inLanguage: 'cs',
	publisher: { '@id': businessId }
};

export const homeStructuredData = {
	'@context': 'https://schema.org',
	'@graph': [website, business, person]
};

const services: Record<string, { name: string; serviceType: string }> = {
	poradenstvi: {
		name: 'Psychologické poradenství',
		serviceType: 'Individuální psychologické poradenství pro dospělé'
	},
	'hlubinna-psychoterapie': {
		name: 'Hlubinně orientovaná psychoterapie',
		serviceType: 'Individuální hlubinně orientovaná psychoterapie pro dospělé'
	},
	'act-terapie': {
		name: 'ACT terapie',
		serviceType: 'Individuální terapie přijetí a odhodlání pro dospělé'
	},
	koucink: {
		name: 'Koučink',
		serviceType: 'Individuální koučink pro dospělé'
	}
};

export function contentStructuredData(slug: string, heading: string) {
	const pageUrl = `${siteUrl}/${slug}`;
	const graph: Record<string, unknown>[] = [
		{
			'@type': 'BreadcrumbList',
			'@id': `${pageUrl}#breadcrumb`,
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Úvod',
					item: `${siteUrl}/`
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: heading,
					item: pageUrl
				}
			]
		}
	];

	const service = services[slug];
	if (service) {
		graph.push({
			'@type': 'Service',
			'@id': `${pageUrl}#service`,
			name: service.name,
			serviceType: service.serviceType,
			url: pageUrl,
			inLanguage: 'cs',
			provider: { '@id': businessId },
			areaServed: {
				'@type': 'City',
				name: 'Ostrava'
			}
		});
	}

	if (slug === 'o-mne') graph.push(person);
	if (slug === 'kontakt') graph.push(business);

	return {
		'@context': 'https://schema.org',
		'@graph': graph
	};
}
