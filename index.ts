import { prisma } from './lib/prisma'

async function main() {
    const user = await prisma.user.create({
        data : {
            name : 'Bobd',
            email : 'Bdob@prisma.io',
            posts : {
                create : [
                    {
                        title : 'Hello World',
                        published : true
                    },
                    {
                        title : 'My Second Post',
                        content : 'This is still a draft'
                    }
                ]
            }
        }
    })
    console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })