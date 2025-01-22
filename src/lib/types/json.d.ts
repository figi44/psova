declare module "cards.json" {
    const value: {
        cards: Array<{
            id: string;
            title: string;
            text: string;
        }>;
    };
    export default value;
} 