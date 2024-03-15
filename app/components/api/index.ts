import prisma from "./instance"
import UsersModule from "./users"
import DbModule from "./db"
import DocModule from "./doc"

export default {
    users: UsersModule(prisma),
    db: DbModule(prisma),
    doc: DocModule(prisma),
}