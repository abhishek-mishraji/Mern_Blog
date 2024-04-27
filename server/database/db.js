import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-8ajmqqb-shard-00-00.kvyyywi.mongodb.net:27017,ac-8ajmqqb-shard-00-01.kvyyywi.mongodb.net:27017,ac-8ajmqqb-shard-00-02.kvyyywi.mongodb.net:27017/?tls=true&replicaSet=atlas-nh6hbi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;