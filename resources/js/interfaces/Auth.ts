export interface Auth {
    user: {
        id: string;
        email: string;
        name: string;
        avatar_url: string | null;
    };
}
