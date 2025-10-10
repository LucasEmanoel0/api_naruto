import {Router} from 'express';
import villageController from '../controllers/villageController.ts';

const villagecontroller = new villageController()

const villagerouter = Router()

villagerouter.post('/',villagecontroller.create)
villagerouter.get('/:id',villagecontroller.index)
villagerouter.get('/',villagecontroller.show)
villagerouter.put('/:id',villagecontroller.update)
villagerouter.delete('/:id',villagecontroller.delete)

export default villagerouter