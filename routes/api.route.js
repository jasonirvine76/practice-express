const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/works', async (req, res, next) => {
    try {
        const works = await prisma.work.findMany({})
        res.json(works)
    } catch (error) {
        next(error)
    }
})

router.post('/works', async (req, res, next) => {
    try {
        //const data = req.body
        const work = await prisma.work.create({
            data: {
                name: req.body.name,
                description: req.body.description,
            },
        })
        res.json(work)
    } catch (error) {
        next(error)
    }
})

router.get('/works/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const work = await prisma.work.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(work)
    } catch (error){
        next(error)
    }
})

module.exports = router;