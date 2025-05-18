export type Card = {
	id: string;
	title: string;
	text: string;
};

export type Column = {
	id: string;
	title: string;
	cards: Card[];
};

export type ColumnDefinition = {
	id: string;
	title: string;
	stageLimits: {
		[key: number]: number;
	};
};
