import mongoose from "mongoose"
const dbInfo = require("./config/db.json");
export class ConnectDB {
    constructor() {
        this.connectDB();
    }
    private connectDB() {
         //连接mongodb 复制集
        //let url = `mongodb+srv://${dbInfo.user}:${dbInfo.password}@${dbInfo.url}/${dbInfo.database}?${dbInfo.else}`;
          //连接本地MongoDB 复制集
           let url = 'mongodb://localhost,localhost:27018,localhost:27019/test?replicaSet=rs0';
        console.log("开始链接数据库");
        mongoose.connect(url);
        var db = mongoose.connection;
        db.once('open', function () {
            console.log("链接数据库成功!");
        });
    }
}
new ConnectDB();