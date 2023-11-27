import { Client, Account, ID } from "appwrite";
import conf from "../conf";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return null;
            }
        } catch (e) {
            console.log(e);
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (e) {
            console.log(e);
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    async logoutUser() {
        return await this.account.deleteSessions();
    }
}
const authService = new AuthService();

export default authService;
