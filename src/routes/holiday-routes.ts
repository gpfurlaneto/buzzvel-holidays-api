import { Router } from 'express';

import {
  create as createHoliday,
  update as updateHoliday,
  listAll,
  remove,
  load
} from '../controllers/holiday-controller';

export const router = Router()

router.post('/',async (req, res) => {
  await createHoliday(req.body)
  return res.status(200).send()
})

router.put('/:id',async (req, res) => {
  await updateHoliday(req.params.id, req.body)
  return res.status(200).send()
})

router.get('/',async (req, res) => {
  return res.status(200).json(await listAll())
})

router.get('/:id',async (req, res) => {
  return res.status(200).json(await load(req.params.id))
})

router.delete('/:id',async (req, res) => {
  return res.status(200).json(await remove(req.params.id))
})
