import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, content, slug, status, featuredImage, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, { title, slug, content, status, featuredImage, userId })
        } catch (e) {
            console.log(e)
        }
    }

    async UpdatePost(slug, { title, content, status, featuredImage, userId }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, slug, content, status, featuredImage, userId })
        } catch (e) {
            console.log(e)
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        } catch (e) {
            console.log(e)
        }

        return false
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.getDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (e) {
            console.log(e)
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (e) {
            console.log(e)
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.uniqe(), file)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (e) {
            console.log(e)
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
        } catch (e) {
            console.log(e)
        }
    }

}
const service = new Service();

export default service;
